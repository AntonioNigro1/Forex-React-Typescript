import TransDB from "./../models/Transaction.js";
import UserDB from "./../models/User.js";
import { ExpressMiddleware, Transaction } from "../interfaces";
import { convert } from "exchange-rates-api";

type Req = { trans: Transaction };
type Res = { message: string };

export const deposit: ExpressMiddleware<Req, Res> = async (req, res) => {
  const { sender_id, receiver_id, usd, gbp } = req.body;
  const exchange = 0;
  try {
    await TransDB.create({
      sender_id,
      receiver_id,
      exchange,
      date: Date.now(),
      usd,
      gbp,
    });

    let reply = await UserDB.findByIdAndUpdate(
      { _id: receiver_id },
      { $inc: { usd: usd, gbp: gbp } },
      { returnDocument: "after" }
    );

    const message: string =
      "Transaction made successefully, deposited: " + (usd | gbp);
    res.status(200).json({ status: "200", message: message });
  } catch (err) {
    const message: string = err;
    res.status(401).json({
      status: "401",
      error: "Something went wrong, check your credencials",
      message: "Db error: " + message,
    });
  }
};

export const withdraw: ExpressMiddleware<Req, Res> = async (req, res) => {
  const { sender_id, receiver_id, usd, gbp } = req.body;
  const exchange = 0;
  try {
    await TransDB.create({
      sender_id,
      receiver_id,
      exchange,
      date: Date.now(),
      usd: usd * -1,
      gbp: gbp * -1,
    });
    let reply = await UserDB.findByIdAndUpdate(
      { _id: receiver_id },
      { $inc: { usd: usd * -1, gbp: gbp * -1 } },
      { returnDocument: "after" }
    );

    const message: string =
      "Transaction made successefully, withdrawn: " + (usd | gbp);
    res.status(200).json({ status: "200", message: message });
  } catch (err) {
    const message: string = err;
    res.status(401).json({
      status: "401",
      error: "Something went wrong, check your credencials",
      message: "Db error: " + message,
    });
  }
};

export const exchange: ExpressMiddleware<Req, Res> = async (req, res) => {
  const { sender_id, receiver_id, usd, gbp } = req.body;
  const exchange = 1;
  if (usd != 0) {
    const amount = await convert(usd, "USD", "GBP");
    await TransDB.create({
      sender_id,
      receiver_id,
      exchange,
      date: Date.now(),
      usd: usd * -1,
      gbp: amount,
    });

    let reply = await UserDB.findByIdAndUpdate(
      { _id: receiver_id },
      { $inc: { usd: usd * -1, gbp: amount } },
      { returnDocument: "after" }
    );
  }

  if (gbp != 0) {
    const amount = await convert(gbp, "GBP", "USD");
    await TransDB.create({
      sender_id,
      receiver_id,
      exchange,
      date: Date.now(),
      usd: amount,
      gbp: gbp -1,
    });

    let reply = await UserDB.findByIdAndUpdate(
      { _id: receiver_id },
      { $inc: { usd: amount, gbp: gbp * -1 } },
      { returnDocument: "after" }
    );
  }

};

export const history: ExpressMiddleware<Req, Res> = async (req, res) => {
  const { sender_id } = req.body;

  try {
    const reply = await TransDB.find({ sender_id: sender_id }).sort({
      date: "desc",
    });
    res.status(200).json({ status: "200", data: reply });
  } catch (error) {
    res.status(401).json({
      status: "401",
      error: "Something went wrong, check your credencials",
    });
  }
};
