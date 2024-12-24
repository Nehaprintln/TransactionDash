require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/db");
const seedDatabase = require("./seed/seedData");
const trRouters = require("./routes/transactionRoutes");
const app = express();

connectDB();

app.use(cors());
app.use(bodyParser.json());

app.get("/api/initialize", async (req, res) => {
  await seedDatabase();
  res.status(200).send("Database Initialized!");
});


// Routes
app.use("/api", trRouters);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
