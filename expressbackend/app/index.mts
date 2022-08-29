import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import http from "http";
import { WebSocketServer } from "ws";

import UserRouter from "./route/UserRouter.js";
import TransactionRouter from "./route/TransactionRouter.js";
import onConnection from "./app-ws.js";

const app = express();

dotenv.config();

mongoose.connect(process.env.DB_CONNECT).then(() => {
  console.log("Connected to MongoDB!");
});

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

app.use("/", UserRouter);
app.use("/", TransactionRouter);

const server = http.createServer(app);

//const wss = new WebSocketServer({port: 9001});
//wss.on("connection", onConnection);

server.listen(9000);

// export default server;