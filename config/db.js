const mongoose = require("mongoose");
process.env.NODE_CONFIG_DIR = "./config";

const config = require("config");
const db = config.get("mongoURI");

// this will return promise (async await using here)
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
