import mongoose from "mongoose";

const connectDB = async (mongoURI, dbName) => {
  if (!mongoURI) {
    console.warn("MONGO_URI not set; starting server without MongoDB connection");
    return;
  }
  try {
    await mongoose.connect(mongoURI, {
      dbName: dbName,
    });
    console.log(`MongoDB connected to database: ${dbName}`);
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }
};

export default connectDB;
