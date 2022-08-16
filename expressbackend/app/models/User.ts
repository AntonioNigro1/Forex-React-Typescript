import mongoose from "mongoose";
import { User } from '../interfaces';

const userSchema = new mongoose.Schema<User>({
  _id: {
    type: 'string',
    required: true,
    unique: true,
  },

  name: {
    type: 'string',
    required: true,
    unique: false,
    maxLength: 255,
    minLength: 1
  },

  email: {
    type: 'string',
    required: true,
    unique: true,
    maxLength: 255,
    minLength: 1
  },

  password: {
    type: 'string',
    required: true,
    maxLength: 12,
    minLength: 1
  }
})

module.exports = mongoose.model('User', userSchema);