import UserDB from './../models/User.js';
import { ExpressMiddleware, User } from '../interfaces';
import jwt from 'jsonwebtoken';

type Req = { user: User };
type Res = { message: string };

export const register: ExpressMiddleware<Req, Res> = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const reply = await UserDB.create({
      name,
      email,
      password
    });
    const message: string = 'User registred successefully';
    res.status(200).json({ status: '200', message: message });
  } catch (err) {
    res.status(401).json({ status: '409', error: 'Something went wrong, check your credencials' });
  }
};

export const login: ExpressMiddleware<Req, Res> = async (req, res) => {
  const { email, password } = req.body;
  try {

    const reply = await UserDB.findOne({ email: email, password: password }, '_id name');
    if (reply != null) {
      const token = jwt.sign({ reply }, process.env.Secret, {
        expiresIn: 3000
      })
      const message: string = 'Loging successeful, Redirecting...'
      res.status(200).json({ auth: true, token: token, userInfo: reply, message: message });
    } else {
      const message: string = 'User email or password invalid';
      throw new Error(message);
    }
  } catch (err) {
    res.status(409).json({ status: '409', error: 'User not found, check your credencials' });
  }
};

export const logout: ExpressMiddleware<Req, Res> = async (req, res) => {
  res.json({ auth: false, token: null });
};
