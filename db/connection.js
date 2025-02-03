const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to mongoDB successfully");
  } catch (err) {
    console.error("MongoDB connection:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

// beastsneaky
// rQP4noPrWDWFvQoK
//mongodb+srv://beastsneaky:rQP4noPrWDWFvQoK@cluster0.789q8.mongodb.net/Baby-Toys?retryWrites=true&w=majority&appName=Cluster0
