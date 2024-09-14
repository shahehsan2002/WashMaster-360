
/* eslint-disable @typescript-eslint/no-this-alias */
import { USER_Role, USER_STATUS } from "./user.constants";
import { TUser } from "./user.interface";
import { model, Schema } from "mongoose";

const userSchema = new Schema<TUser>({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  role: {
    type: String,
    required: [true, "Role is required"],
    enum: Object.keys(USER_Role),
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  phone: {
    type: String,
    required: [true, "Phone is required"],
  },
  address: {
    type: String,
    required: [true, "Address is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    select: 0,
  },
  status: {
    type: String,
    required: [true, "Status is required"],
    enum: Object.keys(USER_STATUS),
    default: USER_STATUS.ACTIVE,
  },
  passwordCreatedAt: {
    type: Date,
  },
});



export const User = model<TUser>("User", userSchema);