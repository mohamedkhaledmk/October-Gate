import mongoose from "mongoose";

const hypermarketSchema = new mongoose.Schema({
  name: { type: String, required: [true, "A Hypermarket must have a name"] },
  description: { type: String, required: true },
  locationLink: { type: String, required: true },
  openingHours: { type: String, required: true },
  images: { type: [String], required: true },
  // address: { type: String, required: true },
  fb: { type: String, required: [true, "A Hypermarket must have a fb link"] },
  insta: {
    type: String,
    required: [true, "A Hypermarket must have an insta link"],
  },
  comments: [
    {
      comment: {
        type: String,
        required: true,
      },
      user: {
        id: {
          type: String,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
      },
    },
  ],
});
const Hypermarket =
  mongoose.models.Hypermarket ||
  mongoose.model("Hypermarket", hypermarketSchema);
export default Hypermarket;
