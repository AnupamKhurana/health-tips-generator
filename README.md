# 🩺 Health Tips Generator

An AI-driven wellness assistant that generates personalized diet, exercise, and lifestyle recommendations based on individual physical profiles and wellness goals. Built with React (Material-UI) and Node.js/Express, powered by a local SQLite3 database and Ollama (`mistral-nemo`).

---

## ✨ Features

- **🥗 Personalized Recommendations**: Uses local LLMs to generate tailored nutrition, workout, and mental wellness tips based on user parameters (age, gender, height, weight, activity level).
- **📂 User Profiles & History**: Tracks and stores generated tips and user profiles locally.
- **🔄 Tip CRUD Operations**: Supports viewing all saved health logs, fetching detailed insights by ID, or clearing out old histories.
- **🛡️ 100% Private & Local**: Zero data is sent to external cloud APIs; your data stays local on your system.

---

## 🛠️ Tech Stack

- **Frontend**: React, Material-UI (MUI), Lucide Icons
- **Backend**: Node.js, Express.js
- **Database**: SQLite3 (via sqlite3 library)
- **Local AI**: Ollama (`mistral-nemo` model)

---

## 📋 Prerequisites

Ensure you have the following installed:
1. **Node.js 18+** & **npm**
2. **Ollama** installed on your system (Download from [ollama.ai](https://ollama.ai))

---

## 🚀 Setup & Installation

### 1. Clone the Repository
```bash
git clone https://github.com/AnupamKhurana/health-tips-generator.git
cd health-tips-generator
```

### 2. Pull the AI Model
Ensure Ollama is running in the background, then pull the model:
```bash
ollama pull mistral-nemo
```

### 3. Install Dependencies
Install packages for both the React frontend and Express backend:
```bash
# Install root (frontend) dependencies
npm install

# Install backend dependencies
cd server
npm install
cd ..
```

### 4. Start the Application
To run the frontend and backend servers concurrently:
```bash
npm run dev
```
- **React Frontend**: [http://localhost:3000](http://localhost:3000)
- **Express Backend**: [http://localhost:8000](http://localhost:8000)

---

## 📂 Project Structure

```
health-tips-generator/
├── server/              # Node.js/Express Backend & SQLite db
│   ├── database.db      # Local SQLite database
│   ├── index.js         # API Server & Ollama logic
│   └── package.json     # Backend packages
├── src/                 # React frontend src code
├── public/              # Static frontend assets
├── package.json         # Main launcher & frontend packages
└── README.md            # This guide
```
