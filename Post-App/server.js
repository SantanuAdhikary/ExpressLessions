
const express = require("express");

const {connectDB} = require("./config/db")

const PostRoute = require("./routing/postRoute");
const AuthRoute = require("./routing/authRoute");

const app = express();

require('dotenv').config();

let Port = process.env.PORT 

connectDB();

app.use(express.json());

app.use("/api",PostRoute);
app.use("/api/user",AuthRoute)

app.listen(Port,err=>{
    if(err) throw err;

    console.log(`app is running ${Port}`);
})