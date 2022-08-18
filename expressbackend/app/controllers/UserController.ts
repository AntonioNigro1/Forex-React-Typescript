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
    res.status(200).json({ status: '200' });
  } catch (err) {
    let message
    if (err instanceof Error) message = err.message
    else message = String(err)
    res.status(401).json({ status: '401', error: 'Something went wrong, check your credencials: ' + err })
  }
};

export const login: ExpressMiddleware<Req, Res> = async (req, res) => {
  const { email, password } = req.body;
  try {
    UserDB.find({ email: email, password: password }, '_id name').exec(function (err, doc) {
      if (doc) {
        const token = jwt.sign({ doc }, process.env.SECRET, {
          expiresIn: 3000
        });
        res.json({ auth: true, token: token, userInfo: doc })
      }
    });

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