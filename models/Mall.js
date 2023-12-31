import mongoose from "mongoose";

const mallSchema = new mongoose.Schema({
  name: { type: String, required: [true, "A Mall must have a name"] },
  description: { type: String, required: true },
  locationLink: { type: String, required: true },
  openingHours: { type: String, required: true },
  stores: { type: [String], required: true },
  amenities: { type: [String], required: [true, "A Mall must have amenities"] },
  images: { type: [String], required: true },
  fb: { type: String, required: [true, "A Mall must have a fb link"] },
  insta: { type: String, required: [true, "A Mall must have an insta link"] },
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

const Mall = mongoose.models.Mall || mongoose.model("Mall", mallSchema);
export default Mall;
