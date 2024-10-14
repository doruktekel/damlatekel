import mongoose from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email girilmesi zorunlu alandir"],
      unique: true,
      validate: [validator.isEmail, "Lutfen gecerli bir email formati giriniz"],
    },
    password: {
      type: String,
      required: [true, "Sifre girilmesi zorunlu alandir"],
    },
    name: {
      type: String,
      required: [true, "Isim girilmesi zorunlu alandir"],
    },
    drawings: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Drawing",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
