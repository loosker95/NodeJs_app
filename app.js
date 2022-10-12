const express = require('express')
const http = require('http');
const dotenv = require('dotenv');
const myRoutes = require('./route/route');
const app = express();

const hostname = '127.0.0.1';

dotenv.config({path:'config.env'})
const p = process.env.PORT || 1010;

app.set('view engine', 'ejs');
app.use("/", myRoutes);


app.listen(p, () => {
  console.log(`Server running at http://${hostname}:${p}/`);
});