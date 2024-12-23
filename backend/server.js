require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const connectDB = require("./config/db");
const connectDB = require("./config/db");
const seedDatabase = require("./seed/seedData");
const trRouters = require("./routes/transactionRoutes");
const app = express();

connectDB();

app.use(cors());
app.use(bodyParser.json());
console.log("Seed data server..")
app.get("/api/initialize", async (req, res) => {
    console.log("INside seed...")
  await seedDatabase();
  res.status(200).send("Database Initialized!");
});
// app.use(async (req, res) => {
//     console.log("INside seed...")
//   await seedDatabase();
//   res.status(200).send("Database Initialized!");
// });

// Routes
app.use("/api", trRouters);
// app.use("/api/getStatistics", trRouters);
// app.use("/api/getBar-chart", trRouters);
// app.use("/api/transactions", require("./routes/transactionRoutes"));
// Add more routes for statistics and charts here.

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
