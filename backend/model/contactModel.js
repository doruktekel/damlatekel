import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
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

const ContactModel = mongoose.model("Contact", ContactSchema);

export default ContactModel;
