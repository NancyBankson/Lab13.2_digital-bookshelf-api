const mongoose = require('mongoose');
require('dotenv').config();
const uri = process.env.MONGO_URI;

const connectDB = async () => {
    mongoose
  .connect(uri)
  .then(() => console.log("Successfully connected to MongoDB!"))
  .catch((err) => console.error("Connection error", err));
}

module.exports = connectDB;