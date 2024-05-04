const express = require("express");

const {connectDB} = require("./config/db");

const noteRoutes = require("./routing/noteRoute");
const userRoutes = require("./routing/userRoute")

const app = express();

require('dotenv').config();

const port = process.env.PORT || 3000; 


connectDB();




//! built-in middleware

app.use(express.json());

app.use("/api",noteRoutes)
app.use("/api/auth",userRoutes)


app.listen(port,err=>{
    if(err) throw err;
    console.log(`app is running on port ${port}`);
})