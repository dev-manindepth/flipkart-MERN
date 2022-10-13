import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const Connection = async () => {
  const URL = process.env.MONGOURL;
  try {
    await mongoose.connect(URL);
    console.log("database connected ");
  } catch (err) {
    console.log(`Error while connecting to the database ${err.message}`);
  }
};
export default Connection;
