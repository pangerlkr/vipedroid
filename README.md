# Vibe-Droid ⚡📱

> **The Ultimate Zero-Lag Web Canvas for Vibe Coders & AI Agents**

Vibe-Droid is a lightweight, absolute-zero-lag Electron preview canvas designed for modern React Native and web app development. It eliminates the "Emulator Tax"—the massive CPU drain of running a virtual Android OS—giving you instant UI hot-reloading wrapped in a beautiful, draggable Pixel 7 Pro frame.

But Vibe-Droid is more than just a preview window. It is purpose-built to be the perfect companion for **Antigravity** (Google DeepMind's agentic AI assistant).

---

## 🌟 Core Features

- **Absolute Zero Lag:** No heavy Android OS running in the background. Your app boots instantly and UI changes hot-reload in milliseconds.
- **The "Vibe" UI:** A hyper-realistic, borderless, frameless floating screen that sits cleanly on your desktop.
- **Live URL Connect:** A built-in splash screen lets you instantly connect to any local bundler port (like Vite or Expo) without restarting the canvas.
- **AI Vision Bridge 👁️:** Vibe-Droid silently captures its screen every 3 seconds and saves it to `live_feed.png` in the root folder. This allows AI agents (like Antigravity) to *natively see* your UI layout as they code, enabling autonomous visual debugging!

---

## 🔌 The Hardware Bridge (Camera, Bluetooth, GPS)

*"If there is no Android OS, how do I test native hardware?"*

Vibe-Droid embraces the **React Native Platform-Specific Extension** philosophy. You never have to write messy `if (isWeb)` code. Instead, you create two separate files for your hardware logic:

1. **Native (`BluetoothAdapter.js`)**: Uses native libraries like `react-native-ble-plx` for the real phone.
2. **Web (`BluetoothAdapter.web.js`)**: Uses `navigator.bluetooth` to hook directly into your PC's physical Bluetooth hardware for Vibe-Droid.

When you run your app in Vibe-Droid, the bundler **automatically** serves the `.web.js` file, connecting directly to your laptop's Webcam (`navigator.mediaDevices`), GPS, and Bluetooth. When you finally compile the `.apk` for Android, it ignores the web file entirely.

This allows you to test native hardware integrations instantly using your PC's hardware, with zero emulator lag!

---

## 🤖 The Antigravity Synergy

Vibe-Droid was built to unlock the true power of **Antigravity**. 

When you pair Vibe-Droid with Antigravity, you unlock a completely autonomous MVP factory:
1. **Visual Awareness:** Because of the `live_feed.png` bridge, Antigravity can physically see the UI it is building. If a header is overlapping a notch, Antigravity can see it and fix the CSS padding itself.
2. **MCP Superpowers:** Connect the **Supabase MCP** and **GitHub MCP** to Antigravity.
3. **Instant MVPs:** You can tell Antigravity, *"Build a social feed app."* Antigravity will autonomously generate the UI, hot-reload it into Vibe-Droid, visually verify the layout, use the Supabase MCP to instantly spin up a live Postgres database and API, connect the frontend, and push the final MVP-ready codebase to GitHub.

You just sit back and watch the code come to life on the canvas.

---

## 🛠️ Installation & Usage

```bash
# Clone the repository
git clone https://github.com/leethongs/vipedroid.git
cd vibe-droid

# Install dependencies
npm install

# Start Vibe-Droid
npm start
```

1. Vibe-Droid will boot instantly to the "Ready for Code" screen.
2. Type in your dev server URL (e.g., `http://localhost:5173` for Vite, or `8081` for Metro).
3. Hit **Connect** and experience absolute zero-lag UI coding!
