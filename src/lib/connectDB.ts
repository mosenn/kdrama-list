import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function connectDB() {
  try {
    // console.log(process.env.DB_USER, "db url");
    // console.log({
    //   username: process.env.DB_USER,
    //   password: process.env.DB_PASS,
    // });
    // console.log(
    //   `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zutazhf.mongodb.net/kdrama`
    // );
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zutazhf.mongodb.net/kdrama`
    );
    // await mongoose.connect(process.env.MONGO_URI);
    console.log("connect to DB");
  } catch (error) {
    console.log("error mongo--->", error);
    // throw new Error("Connection failed!");
  }
}

export default connectDB;
