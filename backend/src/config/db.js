const mongoose = require("mongoose");

async function connectDB() {
  try {
    const response = await mongoose.connect(
      `${process.env.MONGODB_URI}/sport-management-system`
    );
    console.log("connected to ", response.connection.host);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
}

module.exports = connectDB;
