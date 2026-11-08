# 🩺 AI Health & Wellness Advisor — Personalized Lifestyle Recommendations

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-4.x-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com)
[![Material-UI](https://img.shields.io/badge/Material--UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)](https://mui.com)
[![SQLite](https://img.shields.io/badge/SQLite-3-07405E?style=for-the-badge&logo=sqlite&logoColor=white)](https://www.sqlite.org)
[![Ollama](https://img.shields.io/badge/Ollama-Local_Inference-000000?style=for-the-badge&logo=ollama&logoColor=white)](https://ollama.ai)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

An AI-driven wellness assistant that generates personalized nutrition, workout, and lifestyle guidance based on physical metrics (age, gender, BMI, activity level) and specific wellness objectives. Engineered with a **React (MUI)** frontend, **Node.js/Express** backend, **SQLite** persistence, and offline LLM inference via **Ollama**.

---

## ✨ Features & Capabilities

- 🥗 **Personalized Nutrition & Diet**: Delivers macronutrient and meal recommendations tailored to your metabolic rate and goals (e.g., muscle gain, weight loss, endurance).
- 🏋️ **Adaptive Exercise Regimens**: Recommends customized fitness routines adjusting for beginner, intermediate, or advanced training states.
- 🧘 **Holistic Wellness Insights**: Provides actionable sleep hygiene, hydration, and stress-reduction protocols.
- 💾 **Profile & History Tracking**: Stores all previous wellness plans and body metric snapshots in a local SQLite database.
- 🔒 **100% Offline & Private**: Health profiles, weight stats, and biometric parameters never leave your local environment.
- 🎨 **Modern Material-UI Design**: Polished, accessible user interface with responsive forms, health metric badges, and interactive tip history drawers.

---

## 🛠️ Architecture & Tech Stack

```
  [ React Client (MUI) ] ──(REST API)──▶ [ Express.js Server (:8000) ]
                                                   │
                        ┌──────────────────────────┴──────────────────────────┐
                        ▼                                                     ▼
               [ SQLite3 Database ]                                [ Ollama Local Engine ]
           (Profiles, Logs, Tips)                               (mistral-nemo / llama3)
```

| Component | Technology | Role |
| :--- | :--- | :--- |
| **Frontend** | React 18, Material-UI (MUI), Lucide Icons | Client user interface and metric visualization |
| **Backend** | Node.js, Express.js | API routing, data validation, and LLM orchestration |
| **Database** | SQLite3 | Embedded persistence for user logs and recommendations |
| **Inference Engine** | Ollama (`mistral-nemo`) | Local privacy-preserving LLM inference |

---

## 📂 Project Structure

```text
health-tips-generator/
├── server/              # Express.js backend & SQLite storage
│   ├── database.db      # SQLite database file
│   ├── index.js         # API server, DB queries & Ollama integration
│   └── package.json     # Backend dependencies
├── src/                 # React frontend source code
│   ├── components/      # UI input forms, cards, and modal dialogs
│   └── App.js           # Main application state and layout
├── public/              # Static frontend assets
├── package.json         # Root scripts & frontend dependencies
└── README.md            # Documentation
```

---

## 🚀 Quick Start Guide

### Prerequisites
- **Node.js 18+** & **npm**
- **Ollama** installed ([download instructions](https://ollama.ai))

### 1. Clone Repository
```bash
git clone https://github.com/AnupamKhurana/health-tips-generator.git
cd health-tips-generator
```

### 2. Pull AI Model
Start the Ollama daemon and download the recommended model:
```bash
ollama pull mistral-nemo
```

### 3. Install Dependencies
```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd server
npm install
cd ..
```

### 4. Launch Application
Run both frontend and backend concurrently in development mode:
```bash
npm run dev
```

- **Frontend:** [http://localhost:3000](http://localhost:3000)
- **Backend API:** [http://localhost:8000](http://localhost:8000)

---

## 🔌 API Endpoints Reference

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/generate-tip` | Submits profile metrics to Ollama and saves generated recommendations |
| `GET` | `/api/tips` | Retrieves all saved wellness histories |
| `GET` | `/api/tips/:id` | Fetches details for a specific historical recommendation |
| `DELETE`| `/api/tips/:id` | Removes an archived tip from the SQLite database |

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for details.
