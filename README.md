# Lab 13.2 Mongoose Models and Schemas

## Overview

In this lab, we created a Mongoose Schema and used CRUD with express to create, read, update, and delete information in the database.

## Features

Activity Tasks

Task 1: Project Setup

    1. Create a new project directory (e.g., digital-bookshelf-api).
    2. Initialize the project with npm init -y.
    3. Install the required dependencies: express, mongoose, and dotenv.
    4. Set up your file structure. It’s a good practice to separate your concerns. Create the following:
        - server.js: The main entry point for your application.
        - db/: A directory to hold your database connection logic.
        - models/: A directory for your Mongoose models.
        - routes/: A directory for your Express route definitions.
    5. Create a .env file and add your MongoDB Atlas connection string to it.
    6. Create a .gitignore file and add node_modules/ and .env to it.

Task 2: Database Connection

    1. In the db/ directory, create a connection.js file.
    2. In this file, use mongoose.connect() to establish a connection to your database using the URI from your .env file. Export your connection logic.
    3. In server.js, require and execute your database connection.

Task 3: Book Schema and Model

    1. In the models/ directory, create a Book.js file.
    2. Define a schema for a Book with the following fields and validation rules:
        - title: A String, which is required.
        - author: A String, which is required.
        - isbn: A String, which must be unique.
        - publishedDate: A Date.
        - inStock: A Boolean, with a default value of true.
    3. Compile this schema into a model named Book and export it.

Task 4: API Routes

    1. In the routes/ directory, create a bookRoutes.js file.
    2. Use express.Router() to create a new router instance.
    3. Implement the five core CRUD endpoints on this router:
        - Create: POST / - Creates a new book using the data in req.body.
        - Read All: GET / - Retrieves all books from the database.
        - Read One: GET /:id - Retrieves a single book by its _id.
        - Update: PUT /:id - Updates a book by its _id using the data in req.body.
        - Delete: DELETE /:id - Deletes a book by its _id.
    4. Use async/await and try...catch blocks in all routes to handle errors.
    5. Export the router.

Task 5: Server Configuration

    1. In server.js:
        - Set up your Express application.
        - Use the express.json() middleware to parse request bodies.
        - Mount your book router at a base path, like /api/books.
        - Start the server on a specified port.

## Tools

- JavaScript
- Node.js
- Express.js
- MongoDB
- Mongoose

## Reflection Questions

1. Why is it beneficial to separate your routes, models, and database connection into different directories?

This method allows for separation of concerns.  It provides improved organization, enhanced maintainablilty, easier debugging, and encourages reusabilty.

2. What is the difference between PUT and PATCH HTTP methods, and which one does your PUT /:id endpoint more closely resemble?

Put replaces the entire resource, while patch allows for partial modifications.  My endpoint resembles PUT because it allows for the entire resource to be modified.

3. In the DELETE route, what is a good practice for the response you send back to the client after a successful deletion? Should you send the deleted object, a simple success message, or something else? Why?

The message should send the user a message that the item was deleted as well the resource ID that is recorded before deletion.  That allows the user to see that the correct record was deleted.