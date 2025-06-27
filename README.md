# Health Tips Generator

This application allows users to store and retrieve personalized health tips. It consists of a React frontend and a Node.js/Express backend with a SQLite database.

## Features

*   **Personalized Health Tips Generation:** Generates health tips (diet, exercise, and general wellness) tailored to user input using a Large Language Model (LLM).
*   **Store User Information:** Save user details including name, age, gender, height, weight, activity level, and health goals.
*   **Retrieve Tips:** View all stored health tips or retrieve specific tips by ID.
*   **Delete Tips:** Remove health tips by ID.

## Technologies Used

*   **Frontend:** React
*   **Backend:** Node.js, Express.js
*   **Database:** SQLite3
*   **LLM Integration:** Ollama (`mistral-nemo` model)
*   **Package Management:** npm

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

*   Node.js (LTS version recommended)
*   npm (comes with Node.js)
*   **Ollama:** Installed and running on your system. Download from [ollama.ai](https://ollama.ai/).

### Ollama Setup

Before running the application, you need to pull the `mistral-nemo` model using Ollama:

```bash
ollama pull mistral-nemo
```

Ensure Ollama is running in the background before starting the application.

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
    Open a new terminal window, navigate to the `server` directory, and run:
    ```bash
    cd server
    npm start
    ```
    The server will run on `http://localhost:8000`.

2.  **Start the frontend application:**
    Open another terminal window, navigate to the root directory of the project (`health-tips-generator`), and run:
    ```bash
    npm start
    ```
    The React app will open in your browser at `http://localhost:3000`.

## API Endpoints

The backend provides the following API endpoints:

*   **`POST /api/tips`**: Create a new health tip entry.
    *   **Body:** JSON object with user details and health tips (diet, exercise, wellness arrays).
    *   **Example:**
        ```json
        {
            "userName": "John Doe",
            "age": 30,
            "gender": "Male",
            "height": 175,
            "weight": 70,
            "activityLevel": "Moderate",
            "healthGoals": "Maintain health",
            "diet": ["Eat more vegetables", "Reduce sugar intake"],
            "exercise": ["30 mins cardio daily", "Strength training 3 times/week"],
            "wellness": ["Meditate 10 mins daily", "Get 8 hours of sleep"]
        }
        ```

*   **`POST /api/tips/dummy`**: Create a dummy health tip entry (for testing purposes).

*   **`GET /api/tips`**: Retrieve all stored health tips.

*   **`GET /api/tips/:id`**: Retrieve a specific health tip by its ID.

*   **`DELETE /api/tips/:id`**: Delete a health tip by its ID.

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
