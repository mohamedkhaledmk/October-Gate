import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  secondname: {
    type: String,
    required: true,
  },
  phonenumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilepic: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensures email addresses are unique
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Regular expression for email validation
  },
  favourites: {
    type: [String],
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
