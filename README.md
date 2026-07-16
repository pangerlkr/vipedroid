# Vibe-Droid: The Ultimate Native Hybrid ⚡📱

A zero-friction, lightning-fast native preview canvas for modern Android development (React Native CLI, Supabase Native SDKs). Built for "vibe coders" and AI coding agents.

Say goodbye to the heavy, bloated Android Studio emulator interface. Vibe-Droid invisibly orchestrates the real Android Emulator in the background, but surfaces it to you as a buttery-smooth, borderless floating window on your desktop.

## Features ✨

- **Native Power, Web Speed:** Runs true `.apk` files and native SDKs on the Android OS, but streams the UI at 60fps with zero lag via extreme `scrcpy` optimizations.
- **The "Vibe" UI:** A hyper-realistic, borderless, frameless floating screen. The default Android OS bloat (status bar, navigation, home screen) is hidden automatically via ADB immersive mode.
- **Interactive Control Center:** A sleek terminal CLI that automatically detects active bundler ports and forwards them (`adb reverse`) seamlessly.
- **AI Vision Bridge 👁️:** Continuously saves the live screen buffer to `live_feed.png` via ADB. Your AI coding assistants can natively "see" your app in real-time!

## Installation 🛠️

```bash
git clone https://github.com/your-username/vibe-droid.git
cd vibe-droid
npm install
```

## Usage 🚀

Start the Vibe-Droid Control Center:

```bash
npm start
```

1. Enter your Metro Bundler port (e.g., `8081`).
2. Vibe-Droid boots the headless emulator, configures port forwarding, hides the Android UI, and launches the borderless canvas.
3. In your React Native project, run `react-native run-android`.
4. Watch it instantly appear in the floating canvas!

---
*Built to solve tiny problems for sane hard coders.*
