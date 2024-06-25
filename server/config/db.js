const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    console.log("MongoDB Connected...");

    // Check for required data
    const collection = mongoose.connection.db.collection("mycollection");
    const count = await collection.countDocuments({});
    if (count === 0) {
      console.warn("Warning: no data in MongoDB");
    } else {
      console.log("Data found in MongoDB");
    }
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
