import mongoose from "mongoose";

async function connectDB() {
  try {
    const databaseUrl = process.env.DATABASE_URL;

    if (!databaseUrl) {
      throw new Error("DATABASE_URL is not defined in .env.local");
    }

    // اگر قبلاً اتصال برقرار شده، مجدد connect نکن
    if (mongoose.connection.readyState === 1) {
      console.log("MongoDB is already connected");
      return;
    }

    await mongoose.connect(databaseUrl);

    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
}

export default connectDB;
