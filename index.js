import fs from 'fs';
import path from 'path';
import { spawn, execSync } from 'child_process';
import { fileURLToPath } from 'url';
import chalk from 'chalk';
import { input } from '@inquirer/prompts';
import tcpPortUsed from 'tcp-port-used';
import axios from 'axios';
import AdmZip from 'adm-zip';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SCRCPY_URL = 'https://github.com/Genymobile/scrcpy/releases/download/v2.4/scrcpy-win64-v2.4.zip';
const VENDOR_DIR = path.join(__dirname, 'vendor');
const SCRCPY_DIR = path.join(VENDOR_DIR, 'scrcpy-win64-v2.4');
const SCRCPY_EXE = path.join(SCRCPY_DIR, 'scrcpy.exe');
const ADB_EXE = path.join(SCRCPY_DIR, 'adb.exe');
const AI_FEED_PATH = path.join(__dirname, 'live_feed.png');

const ANDROID_SDK_ROOT = 'E:\\SDK'; // As discovered previously
const EMULATOR_EXE = path.join(ANDROID_SDK_ROOT, 'emulator', 'emulator.exe');

async function downloadScrcpy() {
    if (fs.existsSync(SCRCPY_EXE)) return;
    console.log(chalk.blue('Downloading Scrcpy...'));
    fs.mkdirSync(VENDOR_DIR, { recursive: true });
    const zipPath = path.join(VENDOR_DIR, 'scrcpy.zip');
    
    const response = await axios({ url: SCRCPY_URL, method: 'GET', responseType: 'stream' });
    const writer = fs.createWriteStream(zipPath);
    response.data.pipe(writer);
    
    await new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
    });

    console.log(chalk.blue('Extracting...'));
    const zip = new AdmZip(zipPath);
    zip.extractAllTo(VENDOR_DIR, true);
    fs.unlinkSync(zipPath);
}

async function bootEmulator() {
    try {
        const out = execSync(`"${ADB_EXE}" devices`, { encoding: 'utf8' });
        if (out.includes('device') && !out.includes('offline') && out.split('\n').some(l => l.includes('emulator-'))) {
            console.log(chalk.green('✓ Emulator already running.'));
            return;
        }
    } catch (e) {}

    console.log(chalk.yellow('Booting Headless Emulator...'));
    const avds = execSync(`"${EMULATOR_EXE}" -list-avds`, { encoding: 'utf8' }).split('\n').map(l => l.trim()).filter(Boolean);
    if (avds.length === 0) throw new Error('No AVDs found.');
    
    const avd = avds[0];
    const emuProcess = spawn(EMULATOR_EXE, ['-avd', avd, '-no-window', '-no-audio'], { stdio: 'ignore', detached: true });
    emuProcess.unref();

    console.log(chalk.yellow('Waiting for Android OS to boot...'));
    let booted = false;
    while (!booted) {
        try {
            const state = execSync(`"${ADB_EXE}" wait-for-device shell getprop sys.boot_completed`, { encoding: 'utf8' });
            if (state.trim() === '1') booted = true;
        } catch (e) {}
        if (!booted) await new Promise(r => setTimeout(r, 2000));
    }
    console.log(chalk.green('✓ Android OS booted.'));
}

async function main() {
    console.log(chalk.cyan.bold('\n🤖 Vibe-Droid Control Center\n'));

    // 1. Interactive CLI for Ports
    const bundlerPortStr = await input({ 
        message: 'Enter your Metro Bundler port:', 
        default: '8081' 
    });
    const port = parseInt(bundlerPortStr, 10);
    const inUse = await tcpPortUsed.check(port, '127.0.0.1');
    if (inUse) {
        console.log(chalk.green(`✓ Port ${port} is active.`));
    } else {
        console.log(chalk.yellow(`⚠ Port ${port} is free (did you forget to start your bundler?)`));
    }

    // 2. Setup Dependencies
    await downloadScrcpy();
    await bootEmulator();

    // 3. Port Forwarding
    console.log(chalk.blue(`Forwarding tcp:${port}...`));
    execSync(`"${ADB_EXE}" reverse tcp:${port} tcp:${port}`);

    // 4. Hide OS Bloat (The Illusion)
    console.log(chalk.blue('Hiding Android system bars...'));
    try {
        execSync(`"${ADB_EXE}" shell settings put global policy_control immersive.full=*`);
        // Push splash HTML
        execSync(`"${ADB_EXE}" push splash.html /sdcard/splash.html`);
        // We just leave it black/immersive for now. When they run react-native, it takes over.
    } catch (e) {
        console.log(chalk.red('Could not hide system bars.'));
    }

    // 5. Start Scrcpy with ultra-smooth settings
    console.log(chalk.green.bold('\n✨ Launching the Canvas...'));
    const scrcpyProcess = spawn(SCRCPY_EXE, [
        '--window-borderless',
        '--window-title=VibeDroid',
        '--always-on-top',
        '--stay-awake',
        '--show-touches',
        '-m', '1024',
        '-b', '2M',
        '--max-fps=60'
    ], { stdio: 'inherit' });

    // 6. Start AI Vision Bridge
    console.log(chalk.magenta('👁️ Starting AI Vision Bridge...'));
    setInterval(() => {
        try {
            execSync(`"${ADB_EXE}" exec-out screencap -p > "${AI_FEED_PATH}"`);
        } catch (e) {}
    }, 3000);

    console.log(chalk.cyan('\nReady! Run `react-native run-android` in your project to see the magic.'));
}

main().catch(console.error);
