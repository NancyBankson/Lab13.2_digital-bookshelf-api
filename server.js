const express = require('express');
const app = express();
// const Book = require("./models/Book");
const connectDB = require("./db/connection");
// const mongoose = require('mongoose');
require("dotenv").config();
const PORT = process.env.PORT || 3001;
// const uri = process.env.MONGO_URI;
const bookRouter = require("./routes/bookRoutes");

connectDB();

// try {
//     await connectDB();
//     app.listen(PORT, () => {
//       console.log(`Server running on port ${PORT}`);
//     });
//   } catch (error) {
//     console.error('Failed to start server:', error);
//   }

  app.use(express.json());
  app.use(express.urlencoded());

  app.use('/', bookRouter);


  app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });