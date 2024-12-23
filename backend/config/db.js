const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://ray93gupta:4xJAELEtc1n1KKtz@personalcluster0.myfou.mongodb.net/TransactionsBoard?retryWrites=true&w=majority&appName=PersonalCluster0', {
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

