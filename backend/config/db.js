const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI);
    console.log("mongodb connected");
  } catch (err) {
    console.log("error connecting to database : " + err);
  }
};

module.exports = connectDb;
