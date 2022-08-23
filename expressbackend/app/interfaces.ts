import { NextFunction, Request, Response } from "express";
import { ObjectId } from 'mongoose';

type TypedReq<
  ReqBody = Record<string, unknown>,
  QueryString = Record<string, unknown>
> = Request<
  Record<string, unknown>,
  Record<string, unknown>,
  Partial<ReqBody>,
  Partial<QueryString>
>;

export type ExpressMiddleware<
  ReqBody = Record<string, unknown>,
  Res = Record<string, unknown>,
  QueryString = Record<string, unknown>
> = (
  req: TypedReq<ReqBody, QueryString>,
  res: Response<Res>,
  next: NextFunction
) => Promise<void> | void;

interface currency {
  usd?: number;
  gbp?: number;
}

export interface Transaction extends currency {
  sender_id: string;
  receiver_id: string;
  date: Date;
}
export interface User extends currency{
  name: string;
  email: string;
  password: string;
}
