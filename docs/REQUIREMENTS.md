# Product Requirements & Intent Freeze

> **Status:** FROZEN (Prompt 1)  
> **Application:** Daily Damage  
> **Target OS:** macOS (Apple Silicon ARM64)

---

## 1. Product Identity & Purpose

Daily Damage is a polished, personal desktop tracker built exclusively for one user.

### Core Idea
> *"Daily Damage — How much damage did we do today?"*

### Explicit Non-Goals & Boundaries
Daily Damage is **NOT**:
- A SaaS or cloud service
- A multi-user app or account system
- A generic task manager or corporate productivity platform
- A web application requiring Terminal commands or `localhost` during normal daily usage

### The Everyday User Experience
1. User clicks `Daily Damage.app` on macOS.
2. The application opens instantly in a compact desktop companion window.
3. User interacts with daily trackers & mandatory study block timers.
4. User closes the app.
5. All state remains persisted, offline, and local.

---

## 2. Target Environment & Windowing

- **Target OS:** macOS (Apple Silicon ARM64 native binary).
- **Packaging Goal:** Standalone native macOS application bundle (`.app` / `.dmg`).
- **Compact Window Profile:**
  - **Width:** ~300 – 340 px
  - **Height:** ~650 – 750 px
  - **Behavior:** Frameless/sleek companion widget designed to live on the left side of the desktop.
  - **Future Feature:** Automatic window position retention across app launches.

---

## 3. Grounded Daily Routine Schedule

The application design reflects the user's real daily schedule:

| Time Slot | Routine Event | Category |
| :--- | :--- | :--- |
| `04:40` | Wake | Routine |
| `05:00 – 05:25` | **Namaz 1** | Prayer |
| `05:25 – 05:30` | Banana + Water | Nutrition |
| `05:30 – 07:00` | **Workout (90 mins)** | Training |
| `07:00 – 07:20` | Cooldown Walk (~2,000 steps) | Steps |
| `07:20 – 07:40` | Shower / Get Ready | Hygiene |
| `07:40 – 08:10` | Breakfast | Diet |
| `08:10 – 10:40` | **Study Block 1 (2h 30m / 150m)** | Mandatory Study |
| `10:40 – 11:05` | **Soya #1** + Short Walk | Recovery & Steps |
| `11:05 – 13:05` | **Study Block 2 (2h 00m / 120m)** | Mandatory Study |
| `13:05 – 13:20` | Free / Buffer Time | Recovery |
| `13:20 – 13:45` | **Namaz 2** | Prayer |
| `13:45 – 14:15` | Lunch | Diet |
| `14:15 – 14:45` | Nap | Sleep |
| `14:45 – 15:00` | Wake + Short Walk | Steps |
| `15:00 – 16:45` | **Study Block 3 (1h 45m / 105m)** | Mandatory Study |
| `16:45 – 17:10` | **Soya #2** + Break | Recovery |
| `17:15 – 17:40` | **Namaz 3** | Prayer |
| `17:40 – 18:20` | Free Time + Walking | Recovery & Steps |
| `18:30 – 18:55` | **Namaz 4** | Prayer |
| `18:55 – 19:20` | Dinner | Diet |
| `Evening` | **Study Block 4 (1h 15m / 75m)** *(Before Namaz 5)* | Mandatory Study |
| `20:30 – 20:55` | **Namaz 5** | Prayer |
| `Afterward` | Free Time / Remaining Steps / Sleep Prep | Recovery & Sleep |

---

## 4. Core Daily Trackers

The application is structured around **8 specific daily tracking areas**:

1. 🏋️ **Training (Workout)**
   - Target: **90 minutes**
   - Simple completion & duration logging.
2. 📚 **Study**
   - Target: **7 hours 30 minutes total** (4 mandatory blocks):
     - Block 1: `2h 30m` (150 mins)
     - Block 2: `2h 00m` (120 mins)
     - Block 3: `1h 45m` (105 mins)
     - Block 4: `1h 15m` (75 mins)
3. 🕌 **Namaz**
   - 5 individual daily prayer completions (Namaz 1 through 5).
4. 👟 **Steps**
   - Daily Target: **12,000 steps**.
5. 🫘 **Soya**
   - 2 discrete daily blocks (Soya #1, Soya #2).
6. 🥗 **Diet**
   - Daily adherence status (binary or simple qualitative indicator).
7. 😴 **Sleep**
   - Night sleep duration + Nap duration.
8. ☕ **Free Time**
   - Target: **~2 hours** of positive recovery & leisure time (non-punitive target).

---

## 5. Mandatory Study Block Timer Rules

The Study Tracker features a specialized mandatory timer system:

- **Strict Block Durations:** Each block has a predefined required duration.
- **No Standard "Stop" Button:** To encourage deep work focus, active study blocks display `DAMAGE IN PROGRESS` with elapsed/remaining timers, but **no prominent "End Block" or "Pause" button**.
- **Crash & Restart Persistence:** Timers are driven by persisted timestamp metadata (`started_at`, `target_duration_seconds`, `status`) in SQLite.
  - Quitting or restarting the desktop app mid-block **reconstructs the exact elapsed time upon launch**.
  - Closing the app does **not** escape or cancel an active study block.
- **Single Active Block Limit:** Only one study block may run at a given time.
- **Emergency Abandon Protocol:** An obscure context/overflow menu (`•••` → Abandon Block → Confirmation Modal) will allow aborting a block if necessary. **Abandoned blocks receive zero completion credit**.

---

## 6. Permanent Damage Levels & Canonical Copy

Daily completion generates an aggregate **Damage Percentage** (0–100%).

> **Note on Weighting:** Scoring formula and exact tracker weights will be finalized in Prompt 7 after tracker models are established.

### Canonical Damage Levels & Copy
| Damage Level | Percentage Range | Canonical Copy (Exact Wording) |
| :---: | :---: | :--- |
| **L1** | `0% – 20%` | *"Chalo, shuru toh karey."* |
| **L2** | `21% – 40%` | *"Nai hora bhai."* |
| **L3** | `41% – 60%` | *"Cooked hai maslaa."* |
| **L4** | `61% – 80%` | *"Say Wallahi bro."* |
| **L5** | `81% – 100%` | *"Same"* |

---

## 7. Data Storage & History Requirements

- **Local Persistence:** Powered by SQLite.
- **Day-Wise History:** Every calendar day maintains its historical log.
- **Distinct Statuses:** Unrecorded / missing days are treated as `No Record`, explicitly distinct from low completion (`L1`).
- **Data Integrity:** Schema migrations, graceful recovery, and support for future JSON/CSV export/backup.

---

## 8. Visual Identity & Design System Rules

- **Theme:** Ultra-dark charcoal (`#0D0E11`), elevated cards (`#14161B`), thin borders (`#232730`).
- **Typography:** Warm off-white primary text (`#F1F3F5`), muted gray secondary text (`#8A909E`), crisp tabular numbers for timers.
- **Accent Palette:** Warm amber (`#E5A93C`), deep gold (`#D48A2C`), restrained status highlights.
- **Tone:** Polished, restrained, serious desktop interface contrasting with dry, humorous copy.
