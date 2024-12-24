require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/db");
const seedDatabase = require("./seed/seedData");
const trRouters = require("./routes/transactionRoutes");

const app = express();

// Connect to the database
connectDB();

// Allow requests from specific origin
app.use(
  cors({
    origin: "https://transaction-dash-front.vercel.app", // Replace with your frontend URL
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"], // Allowed HTTP methods
    credentials: true, // If using cookies or authorization headers
  })
);

app.use(bodyParser.json());
console.log("Seed data server...");

// Initialize the database
app.get("/api/initialize", async (req, res) => {
  console.log("Inside seed...");
  await seedDatabase();
  res.status(200).send("Database Initialized!");
});

// Routes
app.use("/api", trRouters);

// Export the app for Vercel's serverless function
module.exports = app;
