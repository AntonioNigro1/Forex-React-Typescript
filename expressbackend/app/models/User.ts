import mongoose from "mongoose";
import { User } from "../interfaces";

const userSchema = new mongoose.Schema<User>({
  name: {
    type: "string",
    required: true,
    unique: false,
    maxLength: 255,
    minLength: 1,
  },

  email: {
    type: "string",
    required: true,
    unique: true,
    maxLength: 255,
    minLength: 1,
  },

  password: {
    type: "string",
    required: true,
    maxLength: 12,
    minLength: 6,
  },

  usd: {
    type: "number",
    required: false,
  },

  gbp: {
    type: "number",
    required: false,
  },
});

let DB = mongoose.model("User", userSchema);
export default DB;
