const { app, BrowserWindow, ipcMain, nativeImage } = require('electron');
const path = require('path');
const fs = require('fs');

let mainWindow;
const AI_FEED_PATH = path.join(__dirname, 'live_feed.png');

function createWindow() {
    // Determine the URL to load based on CLI args (e.g., npm start -- http://localhost:8081)
    const args = process.argv.slice(2);
    const targetUrl = args[0] || `file://${path.join(__dirname, 'index.html')}`;

    mainWindow = new BrowserWindow({
        width: 440,
        height: 900,
        frame: false,
        transparent: true,
        alwaysOnTop: true,
        resizable: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            webviewTag: true
        }
    });

    // If it's a localhost URL, we load index.html and pass the URL to the webview
    if (targetUrl.startsWith('http')) {
        mainWindow.loadFile('index.html');
        mainWindow.webContents.on('did-finish-load', () => {
            mainWindow.webContents.send('load-url', targetUrl);
        });
    } else {
        mainWindow.loadURL(targetUrl);
    }

    // AI Vision Bridge: Capture page silently every 3 seconds
    setInterval(async () => {
        try {
            if (!mainWindow || mainWindow.isDestroyed()) return;
            const image = await mainWindow.webContents.capturePage();
            fs.writeFileSync(AI_FEED_PATH, image.toPNG());
        } catch (e) {
            // Ignore if window is closing
        }
    }, 3000);
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
