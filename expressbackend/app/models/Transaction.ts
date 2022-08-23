import mongoose from "mongoose";
import { Transaction } from "../interfaces";

const tranSchema = new mongoose.Schema<Transaction>({
  sender_id: {
    type: "string",
    required: true,
  },

  receiver_id: {
    type: "string",
    required: true,
  },

  date: {
    type: "date",
    required: true,
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

let DB = mongoose.model("Transaction", tranSchema);
export default DB;
