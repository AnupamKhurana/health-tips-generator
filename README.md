# Health Tips Generator

This application provides personalized health tips using a Large Language Model (LLM) and allows users to store and manage these tips. It features a React frontend, a Node.js/Express backend, and a SQLite database.

## Features

*   **Personalized Health Tips:** Generates diet, exercise, and wellness tips tailored to individual user data using an LLM.
*   **User Data Management:** Securely stores user profiles and their associated health tips.
*   **Tip Retrieval & Deletion:** Easily view all saved tips or remove specific ones.

## Technologies

*   **Frontend:** React
*   **Backend:** Node.js, Express.js
*   **Database:** SQLite3
*   **LLM Integration:** Ollama (`mistral-nemo` model)

## Getting Started

Follow these steps to set up and run the application locally.

### Prerequisites

*   [Node.js](https://nodejs.org/) (LTS version recommended)
*   [npm](https://www.npmjs.com/) (comes with Node.js)
*   [Ollama](https://ollama.ai/) (installed and running)

### Ollama Setup

Before starting the application, pull the required LLM model:

```bash
ollama pull mistral-nemo
```

Ensure Ollama is running in the background.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/health-tips-generator.git
    cd health-tips-generator
    ```

2.  **Install backend dependencies:**
    ```bash
    cd server
    npm install
    cd ..
    ```

3.  **Install frontend dependencies:**
    ```bash
    npm install
    ```

### Running the Application

1.  **Start the backend server:**
    ```bash
    cd server
    npm start
    ```
    The server will be accessible at `http://localhost:8000`.

2.  **Start the frontend application:**
    ```bash
    npm start
    ```
    The React app will open in your browser at `http://localhost:3000`.

## API Endpoints

The backend exposes the following REST API endpoints:

*   **`POST /api/tips`**: Create a new health tip entry.
    *   **Body Example:**
        ```json
        {
            "userName": "John Doe",
            "age": 30,
            "gender": "Male",
            "height": 175,
            "weight": 70,
            "activityLevel": "Moderate",
            "healthGoals": "Maintain health",
            "diet": ["Eat more vegetables"],
            "exercise": ["30 mins cardio daily"],
            "wellness": ["Meditate 10 mins daily"]
        }
        ```

*   **`POST /api/tips/dummy`**: Create a dummy health tip entry (for testing).

*   **`GET /api/tips`**: Retrieve all stored health tips.

*   **`GET /api/tips/:id`**: Retrieve a specific health tip by ID.

*   **`DELETE /api/tips/:id`**: Delete a health tip by ID.

## Project Structure

```
health-tips-generator/
├── .env
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
├── node_modules/
├── public/
├── server/
│   ├── database.js
│   ├── db.sqlite
│   ├── index.js
│   ├── package-lock.json
│   └── package.json
└── src/
    ├── App.test.tsx
    ├── App.tsx
    ├── index.css
    ├── index.tsx
    ├── logo.svg
    ├── react-app-env.d.ts
    ├── reportWebVitals.ts
    ├── setupTests.ts
    └── ViewTips.js
```