# Wysa_Backend
![Wysa_2](https://github.com/user-attachments/assets/e7c1a440-a70b-4115-b716-dbff601334bf)
![Wysa_1](https://github.com/user-attachments/assets/2a0cfe17-ab9a-4193-8b80-6f18c292d500)


Here's a README file for your project:

---

# Sleep Assessment and User Management API

This project provides a RESTful API for managing sleep assessments and user data. It is built with Node.js, Express, and MongoDB, and it includes routes for handling sleep assessments, user signups, and user retrieval.

## Project Setup

### Prerequisites

- Node.js and npm
- MongoDB instance (local or remote)

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure MongoDB connection:
   - Create a `.env` file in the root directory of the project.
   - Add the following environment variable:
     ```
     MONGO_URI=<your-mongodb-connection-string>
     ```

3. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### User Routes

- **POST /api/users/signup**
  - Create a new user.
  - **Request Body:**
    ```json
    {
      "nickname": "string",
      "password": "string"
    }
    ```
  - **Response:**
    - **201 Created:** `{"message": "User created successfully"}`
    - **400 Bad Request:** `{"message": "Nickname already taken"}`
    - **500 Internal Server Error:** `{"message": "Server error", "error": "<error details>"}`
  
- **GET /api/users**
  - Retrieve a list of all users (for testing purposes).
  - **Response:**
    - **200 OK:** Array of user objects

### Sleep Assessment Routes

- **POST /api/sleep/sleep-assessment**
  - Submit a new sleep assessment.
  - **Request Body:**
    ```json
    {
      "user_id": "string",
      "sleep_struggles_duration": "string",
      "bed_time": "string",
      "wake_time": "string",
      "total_sleep_hours": "number"
    }
    ```
  - **Response:**
    - **201 Created:** `{"message": "Sleep assessment saved successfully!"}`
    - **500 Internal Server Error:** `{"error": "Failed to save sleep data"}`
  
- **GET /api/sleep/sleep-assessment/:userId**
  - Retrieve sleep assessment data for a specific user.
  - **Response:**
    - **200 OK:** Sleep assessment data object
    - **404 Not Found:** `{"message": "No sleep data found for this user"}`
    - **500 Internal Server Error:** `{"error": "Failed to fetch sleep data"}`
  
## Middleware

- **CORS:** Configured to allow requests from `http://localhost:3000`. Update this URL as needed based on your frontend application.

## Directory Structure

- `config/db.js` - MongoDB connection configuration
- `routes/sleepRoutes.js` - Routes for sleep assessments
- `routes/userRoutes.js` - Routes for user management
- `models/Sleep.js` - Sleep assessment model
- `models/User.js` - User model
- `controllers/sleepController.js` - Logic for sleep assessment routes
- `controllers/userController.js` - Logic for user routes
- `index.js` - Entry point for the server

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---


