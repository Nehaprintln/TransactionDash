const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://127.0.0.1:27017/TransactionsBoard', {
        // process.env.MONGO_URI
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.log('Error: MongoDB Connected Failed');
    process.exit(1);
  }
};

module.exports = connectDB;

