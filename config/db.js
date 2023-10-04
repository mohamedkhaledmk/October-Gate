// config/db.js
import mongoose from "mongoose";
const MONGO_URI =
  "mongodb+srv://mohamedkh:mi5a@cluster0.3iloqbm.mongodb.net/?retryWrites=true&w=majority";
export async function connectDB() {
  console.log("sssssssss");
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
