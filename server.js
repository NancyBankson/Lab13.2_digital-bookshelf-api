const express = require('express');
const app = express();
const connectDB = require("./db/connection");
require("dotenv").config();
const PORT = process.env.PORT || 3001;
const bookRouter = require("./routes/bookRoutes");

connectDB();

app.use(express.json());
app.use(express.urlencoded());

app.use('/', bookRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});