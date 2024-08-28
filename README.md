# School Management API

This project implements a set of APIs using Node.js, Express.js, and MySQL to manage school data. The system allows users to add new schools and retrieve a list of schools sorted by proximity to a user-specified location.

## Features

- **Add School:** Add a new school with its name, address, latitude, and longitude.
- **List Schools:** Retrieve a list of schools sorted by proximity to the user's location.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **MySQL**: Relational database management system.
- **dotenv**: Module to load environment variables.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v14 or higher)
- **MySQL** (v5.7 or higher)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/anshika2111091/School-Management-API.git
   cd school-management

2. Install dependencies
    npm install

3. Set up the MySQL database:

 Create a new database in MySQL:
    CREATE DATABASE school_management;

  Run the following SQL script to create the schools table :
       CREATE TABLE schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL
);

4. Create a .env file in the root directory and add your database credentials:
    DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=school_management

5. Start the server:
    npm start


  ## API Endpoints

1. Add School

Endpoint: /api/addSchool
Method: POST
Description: Adds a new school to the database.
Request Body:


{
    "name": "Sample School",
    "address": "123 Main St, Anytown, USA",
    "latitude": 37.7749,
    "longitude": -122.4194
}

Response:
Success: 201 Created - School added successfully.
Error: 400 Bad Request - Missing or invalid fields.


2. List Schools
Endpoint: /api/listSchools
Method: GET
Description: Retrieves a list of schools sorted by proximity to the user's location.
Query Parameters:
userLat: User's latitude (e.g., 37.7749)
userLong: User's longitude (e.g., -122.4194)
Response:

[
    {
        "id": 1,
        "name": "Sample School",
        "address": "123 Main St, Anytown, USA",
        "latitude": 37.7749,
        "longitude": -122.4194
    },
    ...
]
Success: 200 OK - List of schools sorted by proximity.
Error: 400 Bad Request - Missing or invalid query parameters.
