
//! 1st step : import 

const express = require("express");
const fs = require("fs");

//! 2nd step : assign to 

const app = express();

app.get('/about',(req,res)=>{

    fs.createReadStream("./index.html",'utf-8').pipe(res);
})



app.listen(5000,err=>{
    if(err) throw err;
    console.log('app is runnning')
})