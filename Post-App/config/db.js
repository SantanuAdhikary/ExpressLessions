
const mongoose = require("mongoose");

require('dotenv').config();

let url = process.env.URL

exports.connectDB = async()=>{

    await mongoose.connect(url);
    console.log('database connected');
}