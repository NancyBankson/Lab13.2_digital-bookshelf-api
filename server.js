const express = require('express');
const app = express();
const Book = require("./models/Book");
const connectDB = require("./db/connection");
const mongoose = require('mongoose');
require("dotenv").config();
const PORT = process.env.PORT || 3001;
const uri = process.env.MONGO_URI;

try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
  }