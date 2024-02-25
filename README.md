# LocationApi README

This repository contains a Location API that utilizes Node.js and PostgreSQL. Follow the instructions below to set up and run the API.

## Prerequisites

1. Clone the repository:

    ```bash
    git clone https://github.com/ArturRushanyan/LocationApi.git
    cd LocationApi
    ```

2. Ensure that Node.js is installed on your local machine with a version equal to or greater than 20.0.0. You can download Node.js from [here](https://nodejs.org/).

3. Install PostgreSQL on your local machine. You can download PostgreSQL from [here](https://www.postgresql.org/download/).

## Configuration

4. Create a `.env` file in the project root and copy the content from `.env.example`:

    ```bash
    cp .env.example .env
    ```

    Add the required configurations to the `.env` file, including the port on which the server will run and the database URL.

## Installation

5. Install the project dependencies:

    ```bash
    npm install
    ```

6. Run the Prisma migration for development:

    ```bash
    npx prisma migrate dev
    ```

7. Deploy the Prisma migration:

    ```bash
    npx prisma migrate deploy
    ```

## Running the Server

8. Start the server:

    ```bash
    npm start
    ```

The Location API is now running on the specified port, and you can interact with it using the defined routes.

### Postman Collection

Explore the API using the attached Postman collection file. Import it into your Postman workspace to access detailed API descriptions, endpoints, and sample requests.

Feel free to make requests based on your requirements and refer to the Postman collection for a comprehensive overview of the available API functionalities.
