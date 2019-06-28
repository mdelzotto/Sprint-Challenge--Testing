const express = require("express");
const gamesRoutes = require('./routes/games')

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/games/', gamesRoutes)

app.get("/", (req, res) => {
  res.status(200).json({
    message: "The Games API is up"
  });
});

module.exports = app;
