const express = require("express");
const {connectDB} = require("./config/db");
const foodRoute = require("./routing/foodRoute");
const authRoute = require("./routing/authRoute")

const app = express();

require('dotenv').config();

connectDB();

let port = process.env.PORT


app.use(express.json());


app.use('/api',foodRoute)
app.use('/api/auth',authRoute)

app.listen(port,err=>{
    if(err) throw err;
    console.log('app is running');
})