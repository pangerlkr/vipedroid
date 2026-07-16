# Vibe-Droid ⚡📱

> **The Ultimate Zero-Lag Web Canvas for Vibe Coders & AI Agents**

Vibe-Droid is a lightweight, absolute-zero-lag Electron preview canvas designed for modern React Native and web app development. It handles most UI iteration without launching an emulator—eliminating the massive CPU drain of running a virtual Android OS and giving you instant hot-reloading wrapped in a beautiful, draggable Pixel 7 Pro frame.

Built for compatibility with **agentic coding assistants** and optimized for **VS Code manual developers**, Vibe-Droid acts as the perfect physical bridge for AI agents (like Antigravity) and humans alike.

---

## ✨ Unique Abilities

What makes Vibe-Droid completely different from traditional UI testing?

1. **Absolute Zero Lag**: Traditional emulators run a full virtual Android OS which drains your laptop's battery and maxes out RAM. Vibe-Droid uses a lightweight Chromium webview wrapper. It boots instantly and consumes a fraction of the resources.
2. **The "Vibe" UI**: A hyper-realistic, borderless, frameless floating screen that sits cleanly on your desktop without clunky emulator toolbars.
3. **AI Vision Bridge 👁️**: Vibe-Droid silently captures its screen every 3 seconds and saves it to `live_feed.png`. This allows AI agents to *natively see* your UI layout as they code, enabling autonomous visual debugging (like fixing CSS padding or checking if text overlaps a notch).
4. **Desktop API Integration**: Use your desktop's camera, microphone, Bluetooth and location APIs while iterating on web-compatible code, keeping your workflow entirely out of heavy virtual machines during the early stages of development.

---

## 👨‍💻 How Manual Coders Use It (VS Code Integration)

For human developers, Vibe-Droid is a massive quality-of-life upgrade over Android Studio Emulators or Expo Go when building out your UI. It is designed to sit directly next to your IDE.

1. **Split Your Screen**: Open VS Code on one half of your screen. 
2. **Start Your Bundler**: Spin up your local frontend (e.g. `npm run dev` for Vite, or Metro for React Native).
3. **Launch Vibe-Droid**: Run `npm start` in the Vibe-Droid folder. It instantly boots a beautiful, borderless Pixel frame.
4. **Drag & Pin**: Click and drag the phone frame right next to your VS Code editor. 
5. **Code with Zero Lag**: Type your code, hit save, and watch your UI hot-reload in milliseconds. No emulator lag, no battery drain, just pure coding bliss.

*(Note: Vibe-Droid handles UI iteration perfectly, but you will eventually need a physical device or full Android Emulator to test true Native Android APIs prior to production).*

---

## 🤖 How AI Agents (Antigravity) Use It

Vibe-Droid was built to unlock the true power of **Antigravity** and other agentic coding assistants. Because of the **AI Vision Bridge**, your AI can act completely autonomously.

When paired with MCPs (like Supabase and GitHub), your AI agent can spin up a live database, build the frontend, visually debug the CSS using the live feed, and commit a production-ready MVP.

**Want to let your AI take over completely? Just copy and paste this detailed prompt to your agent:**

> *"I want you to act as an autonomous MVP factory. Here is your workflow:
> 1. Clone `https://github.com/leethongs/vipedroid.git` into a new folder. Run `npm install` and `npm start` to boot the Vibe-Droid canvas on my desktop.
> 2. Spin up a new React frontend in a separate folder next to it. Connect the app's dev server to Vibe-Droid.
> 3. Start building my app's UI. 
> 4. CRITICAL: Every time you make a CSS or layout change, use the `live_feed.png` file in the Vibe-Droid folder to visually verify your work. If elements are overlapping the camera notch, too close to the screen edges, or have bad contrast, you must physically see it and fix it autonomously.
> 5. Connect any necessary MCPs (like Supabase for the database) and wire up the backend. Do not stop until the UI looks perfect on the live feed and the MVP is complete!"*

---

## 🔌 Iterating with Web-Compatible APIs

*"If there is no Android OS, how do I test hardware features?"*

Vibe-Droid embraces the **React Native Platform-Specific Extension** philosophy. You never have to write messy `if (isWeb)` code. Instead, you create two separate files for your hardware logic:

1. **Native (`BluetoothAdapter.js`)**: Uses native Android/iOS libraries (tested later on a real device).
2. **Web (`BluetoothAdapter.web.js`)**: Uses your desktop's `navigator.bluetooth` to hook directly into your PC's physical Bluetooth hardware for fast iteration inside Vibe-Droid.

When you run your app in Vibe-Droid, the bundler automatically serves the `.web.js` file, connecting directly to your laptop's Web APIs (`navigator.mediaDevices`, `navigator.geolocation`). This allows you to build out the logic and UI for hardware features instantly without leaving your lightweight environment. 

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
