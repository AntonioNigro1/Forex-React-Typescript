const User = require('../models/User');
import { ExpressMiddleware, User } from '../interfaces';
import jwt from 'jsonwebtoken';

type Req = { user: User };
type Res = { message: string };

export const register: ExpressMiddleware<Req, Res> = async (req, res) => {
  const { name, email, password } = req.body.user;
  try {
    const reply = await User.create({
      name,
      email,
      password
    });
    res.status(200).json({ status: '200' });
  } catch (err) {
    let message
    if (err instanceof Error) message = err.message
    else message = String(err)
    res.status(401).json({ status: '401', error: 'Something went wrong, check your credencials' + err })
  }
};

export const login: ExpressMiddleware<Req, Res> = async (req, res) => {
  const { email, password } = req.body;
  try {
    const reply = await User.find({ email: email, password: password }, '_id name');
    if (reply._id) {
      let id = reply._id;
      const token = jwt.sign({ id }, process.env.SECRET, {
        expiresIn: 3000
      });
      res.json({ auth: true, token: token, name: reply.name, _id: id })
    }
  } catch (err) {
    let message
    if (err instanceof Error) message = err.message
    else message = String(err)
    res.status(401).json({ status: '401', error: 'Something went wrong, check your credencials' + err })
  }
};

export const logout: ExpressMiddleware<Req, Res> = async (req, res) => {
  res.json({ auth: false, token: null });
};