import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      
    },
    email: {
      type: String,
      required: true,
      unique: true,
      
    },
    password: {
      type: String,
      required: true,
      
    },
    phone: {
      type: String,
      required: true, 
      
    },
    address: {
      type: String,
      required: true, 
      
    },
    role: {
      type: String,
      default: "user",
      enum: {
        values: ["user", "admin"],
        message: "{VALUE} is not a valid role",
      },
    },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
