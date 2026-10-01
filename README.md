# Daily Damage ⚡️

> *"How much damage did we do today?"*

**Daily Damage** is a compact, personal desktop companion built exclusively for single-user daily tracking on macOS (Apple Silicon). It lives on the left side of your desktop as a sleek, restrained companion widget tracking routine execution, study deep-work blocks, prayer schedule, fitness targets, and recovery.

---

## 🎯 Product Philosophy

- **Local & Offline First:** Zero cloud dependencies, zero external APIs, zero SaaS, single user.
- **Standalone Native Application:** Opens cleanly on macOS via double-click or Spotlight (`Daily Damage.app`). Requires **no Terminal**, **no runtime dev server**, and **no localhost browser window**.
- **Compact Desktop Companion:** Designed as a narrow vertical companion (~320px wide x 650–750px tall) that naturally docks on the left side of the macOS desktop.
- **Restrained Visual Aesthetics:** Dark charcoal/near-black surfaces, warm off-white typography, subtle amber/cream accents. Modern, dark, and information-dense without visual clutter. Humor lives in dry, sarcastic copy, not cartoonish graphics.

---

## 🛠 Technical Architecture

| Layer | Technology | Rationale |
| :--- | :--- | :--- |
| **Desktop Shell** | **Tauri v2** | Native macOS WKWebView container; ~30MB RAM footprint, instant startup, native packaging (`.app` / `.dmg`). |
| **Frontend UI** | **React (TypeScript) + Vite** | High-velocity UI iterations, modular component structure, clean CSS design system. |
| **Local Persistence** | **SQLite (`tauri-plugin-sql`)** | Robust local file-based database for routine logs, historical day records, and restart-safe timer state. |
| **Timer Engine** | **Persisted Timestamp State** | Active study blocks store `started_at` & `target_duration` in SQLite. Timers survive crashes and app restarts seamlessly. |

---

## 📋 Comprehensive Documentation

Detailed documentation is available in the [`docs/`](file:///Users/mohammedaafaqahmed/Developer/Daily%20Damage/docs) directory:

- 📖 [**Requirements Freeze (`docs/REQUIREMENTS.md`)**](file:///Users/mohammedaafaqahmed/Developer/Daily%20Damage/docs/REQUIREMENTS.md) — Daily routine, 8 core tracking areas, study timer rules, 5 canonical Damage levels.
- 🏗 [**Technical Architecture (`docs/ARCHITECTURE.md`)**](file:///Users/mohammedaafaqahmed/Developer/Daily%20Damage/docs/ARCHITECTURE.md) — Framework selection analysis, storage engine design, window companion mechanics, crash recovery semantics.
- 🗺 [**Incremental Build Roadmap (`docs/ROADMAP.md`)**](file:///Users/mohammedaafaqahmed/Developer/Daily%20Damage/docs/ROADMAP.md) — 12-phase development roadmap (P1 through P12).

---

## 🚀 Development & Build Workflow

### Prerequisites
- **Node.js**: `v24.x` or compatible
- **Rust Toolchain**: `stable-aarch64-apple-darwin` (`rustc` & `cargo`)

### Commands
```bash
# Install dependencies
npm install

# Run application in development mode (with Hot Module Replacement)
npm run tauri dev

# Compile production-ready standalone macOS application (.app & .dmg)
npm run tauri build
```

---

## 🚀 Incremental Build Plan

- [x] **P1 — Repository Audit, Requirements Freeze & Architecture**
- [x] **P2 — Desktop Application Foundation (Tauri v2 + React Setup)** *(Completed)*
- [ ] **P3 — Local Data Model & SQLite Persistence Engine**
- [ ] **P4 — Compact Today UI & Core Container**
- [ ] **P5 — Routine Trackers Implementation (Training, Namaz, Steps, Soya, Diet, Sleep, Free Time)**
- [ ] **P6 — Mandatory Study Block Timer Engine**
- [ ] **P7 — Damage Calculation Engine & Level Mapping (L1–L5)**
- [ ] **P8 — Day-Wise History Engine & Storage**
- [ ] **P9 — Expanded View & Historical Record Inspection**
- [ ] **P10 — Desktop Behavior (Position Memory & Window Constraints) & Visual Polish**
- [ ] **P11 — Reliability, Restart-Safety & Edge-Case Audit**
- [ ] **P12 — Production Packaging (`.app` / `.dmg`) & Final QA**

---

*Built with Antigravity IDE + Codex for macOS Apple Silicon.*
