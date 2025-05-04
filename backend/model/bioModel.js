import mongoose from "mongoose";

const BioSchema = new mongoose.Schema({
  info: {
    type: String,
    required: [true, "Yazi girilmesi zorunlu alandir"],
  },
  imageUrl: {
    type: String,
    required: [true, "Min 1 adet resim girmelisiniz"],
  },
  imageName: {
    type: String,
  },
});

const BioModel = mongoose.model("Bio", BioSchema);

export default BioModel;
