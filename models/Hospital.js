import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
  name: { type: String, required: [true, "A Hospital must have a name"] },
  description: { type: String, required: true },
  address: {
    type: String,
    required: [true, "A Hospital must have an address"],
  },
  locationLink: { type: String, required: true },
  openingHours: { type: String, required: true },
  images: { type: [String], required: true },
  fb: { type: String, required: [true, "A Hospital must have a fb link"] },
  insta: {
    type: String,
    required: [true, "A Hospital must have an insta link"],
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
const Hospital =
  mongoose.models.Hospital || mongoose.model("Hospital", hospitalSchema);
export default Hospital;
