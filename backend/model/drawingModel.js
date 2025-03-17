import mongoose from "mongoose";

const DrawingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    imageName: {
      type: String,
    },
    category: {
      type: String,
      enum: ["illustrasyonlar", "kartlar&afisler", "eskizler"],
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const DrawingModel = mongoose.model("Drawing", DrawingSchema);

export default DrawingModel;
