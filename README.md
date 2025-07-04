# Health Tips Generator

![Health Tips Generator](https://i.imgur.com/your-gif-or-screenshot.gif)  <!-- Replace with a GIF or screenshot of your application -->

This application provides personalized health tips using a Large Language Model (LLM) and allows users to store and manage these tips. It features a React frontend, a Node.js/Express backend, and a SQLite database.

## Features

*   **Personalized Health Tips:** Generates diet, exercise, and wellness tips tailored to individual user data using an LLM.
*   **User Data Management:** Securely stores user profiles and their associated health tips.
*   **Tip Retrieval & Deletion:** Easily view all saved tips or remove specific ones.

## Technologies

*   **Frontend:** React, Material-UI
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
    git clone https://github.com/AnupamKhurana/health-tips-generator.git
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
    node index.js
    ```
    The server will be accessible at `http://localhost:8000`.

2.  **Start the frontend application:**
    In a new terminal, run:
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

*   **`GET /api/tips`**: Retrieve all stored health tips.

*   **`GET /api/tips/:id`**: Retrieve a specific health tip by ID.

*   **`DELETE /api/tips/:id`**: Delete a health tip by ID.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Anupam Khurana - [@AnupamKhurana](https://twitter.com/AnupamKhurana) - anupam.khurana@example.com

Project Link: [https://github.com/AnupamKhurana/health-tips-generator](https://github.com/AnupamKhurana/health-tips-generator)
