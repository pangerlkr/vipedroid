# Vibe-Droid: The Lightning Web Canvas ⚡📱

A zero-friction, absolute-zero-lag Electron preview canvas for modern mobile development. Built for "vibe coders" and AI coding agents.

Vibe-Droid uses a lightweight Web Canvas to instantly render your React Native Web or Web App projects inside a hyper-realistic Pixel 7 Pro frame. 

By completely removing the heavy Android Emulator, Vibe-Droid gives you **zero CPU lag** and instant hot-reloading.

## Features ✨

- **Absolute Zero Lag:** Boots in under 2 seconds. No heavy Android OS dragging down your CPU.
- **The "Vibe" UI:** A beautiful, draggable, borderless Pixel 7 Pro frame on your desktop.
- **Live URL Connect:** A built-in splash screen that lets you instantly connect to any local bundler port without restarting.
- **AI Vision Bridge 👁️:** Continuously saves the live screen buffer to `live_feed.png` in the project root via native Electron capture. Your AI coding assistants can natively "see" your app in real-time, enabling autonomous UI debugging!

---

## 🛑 The "Emulator Tax" (Why no Android OS?)

You might be wondering: *"Why doesn't this run a real Android Emulator so I can test native APKs?"*

**The harsh reality of mobile development:** You cannot run a full virtual Android Operating System on a mid-range PC without severe CPU lag. If your tools lag, your workflow breaks. 

We built Vibe-Droid for **speed**. We chose instant UI rendering over sluggish native `.apk` support.

## 🔌 The Hardware Bridge Philosophy (Bluetooth, Camera, GPS)

*"If there is no Android OS, how do I test native hardware like Bluetooth?"*

React Native supports **Platform-Specific Extensions**. You do not need to write messy `if (isWeb)` code. Instead, you create two files:

1. `BluetoothAdapter.js` *(Uses native `react-native-ble-plx` for the real phone)*
2. `BluetoothAdapter.web.js` *(Uses `navigator.bluetooth` for the Vibe-Droid canvas)*

When you test your app in Vibe-Droid, the bundler **automatically** uses the `.web.js` file, which hooks directly into your laptop's physical Bluetooth radio via the Web Bluetooth API! When you compile the app for the Play Store, it automatically ignores the web file and uses the native Android file.

**This applies to all hardware:**
- **Camera?** Write a `.web.js` file using `navigator.mediaDevices` (uses your laptop webcam).
- **GPS?** Write a `.web.js` file using `navigator.geolocation` (uses your IP location).

This philosophy allows you to build and test your entire app instantly in Vibe-Droid using your PC's hardware, and only touch a physical phone for final testing!

---

## Installation 🛠️

```bash
git clone https://github.com/your-username/vibe-droid.git
cd vibe-droid
npm install
```

## Usage 🚀

Start the preview canvas:

```bash
npm start
```

1. Vibe-Droid will instantly open the "Ready for Code" screen.
2. Type in your dev server URL (e.g., `http://localhost:8081` for React Native Web).
3. Hit Connect and experience absolute zero-lag UI coding!
