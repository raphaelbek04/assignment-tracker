const mongoose = require('mongoose');

async function connectDB() {
  console.log("connecting...");
  console.log("URI =", process.env.MONGODB_URI);

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected");
  } catch (err) {
    console.log("error:");
    console.log(err);
  }
}

module.exports = connectDB;
