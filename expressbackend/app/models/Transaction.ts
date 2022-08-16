import mongoose from "mongoose";
import { transaction } from '../interfaces';

const tranSchema = new mongoose.Schema<transaction>({
  _id: {
    type: 'string',
    required: true,
    unique: true,
  },

  sender_id: {
    type: 'string',
    required: true
  },

  receiver_id: {
    type: 'string',
    required: true
  },

  usd: {
    type: 'number',
    required: false
  },

  gbp: {
    type: 'number',
    required: false
  }
})