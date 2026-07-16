# Vibe-Droid ⚡📱

> **The Ultimate Zero-Lag Web Canvas for Vibe Coders & AI Agents**

Vibe-Droid is a lightweight, absolute-zero-lag Electron preview canvas designed for modern React Native and web app development. It eliminates the "Emulator Tax"—the massive CPU drain of running a virtual Android OS—giving you instant UI hot-reloading wrapped in a beautiful, draggable Pixel 7 Pro frame.

Built for compatibility with **agentic coding assistants**, Vibe-Droid acts as the perfect physical bridge for AI agents (like Antigravity) and manual coders alike.

---

## 👨‍💻 How Manual Coders Use It (In Detail)

For human developers, Vibe-Droid is a massive quality-of-life upgrade over traditional Android Studio Emulators or Expo Go:

1. **Start Your Bundler**: Spin up your local frontend (e.g. `npm run dev` for Vite, or Metro for React Native).
2. **Launch Vibe-Droid**: Run `npm start` in the Vibe-Droid folder. It instantly boots a beautiful, borderless Pixel frame on your desktop.
3. **Connect**: Enter your bundler URL (e.g., `http://localhost:5173`).
4. **Code with Zero Lag**: Because it relies on the Electron Chromium engine instead of a virtualized Android OS, your UI updates hot-reload in milliseconds without draining your laptop's battery or maxing out your RAM.
5. **Drag & Pin**: You can click and drag the phone frame anywhere on your screen. Keep it hovering next to your VS Code while you build your layouts!

---

## 🤖 How AI Agents (Antigravity) Use It

Vibe-Droid was built to unlock the true power of **Antigravity** and other agentic coding assistants. 

Because of the **AI Vision Bridge 👁️**—which silently captures the screen every 3 seconds to `live_feed.png`—your AI can natively *see* the UI it is building. 

**Want to let your AI take over completely? Just copy and paste this prompt to your agent:**

> *"I want you to visually build an app for me. First, clone `https://github.com/leethongs/vipedroid.git` into a new folder and run `npm install` and `npm start` to boot the Vibe-Droid canvas. Then, spin up a new React app in a separate folder next to it. Connect the app to Vibe-Droid. As you write the code, use the `live_feed.png` file in the Vibe-Droid folder to visually verify your UI layouts, CSS, and padding autonomously!"*

When paired with MCPs (like Supabase and GitHub), your AI agent can spin up a live database, build the frontend, visually debug the CSS using the live feed, and commit a production-ready MVP completely autonomously.

---

## 🔌 The Hardware Bridge (Camera, Bluetooth, GPS)

*"If there is no Android OS, how do I test native hardware?"*

Vibe-Droid embraces the **React Native Platform-Specific Extension** philosophy. You never have to write messy `if (isWeb)` code. Instead, you create two separate files for your hardware logic:

1. **Native (`BluetoothAdapter.js`)**: Uses native libraries for the real phone.
2. **Web (`BluetoothAdapter.web.js`)**: Uses `navigator.bluetooth` to hook directly into your PC's physical Bluetooth hardware for Vibe-Droid.

When you run your app in Vibe-Droid, the bundler automatically serves the `.web.js` file, connecting directly to your laptop's Webcam, GPS, and Bluetooth with zero emulator configuration!

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
