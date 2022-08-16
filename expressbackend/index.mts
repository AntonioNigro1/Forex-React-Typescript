const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const http = require('http');

var app = express();

dotenv.config();

mongoose.connect(process.env.DB_CONNECT).then(
  () => { console.log('Connected to MongoDB!') }).catch((err) => {
    let message
    if (err instanceof Error) message = err.message
    else message = String(err)
    console.log('Connection to MongoDB Failed' + message)
    process.exit();
  })

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

http.createServer(app).listen(9000);