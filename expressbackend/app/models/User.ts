import mongoose from "mongoose";
import { User } from '../interfaces';

const userSchema = new mongoose.Schema<User>({
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

let DB = mongoose.model('User', userSchema);
export default DB;