import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import http from "http";

import UserRouter from "./route/UserRouter.js";

const app = express();

dotenv.config();

mongoose.connect(process.env.DB_CONNECT).then(() => {
  console.log("Connected to MongoDB!");
});

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

app.use("/", UserRouter);

http.createServer(app).listen(9000);
