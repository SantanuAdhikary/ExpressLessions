
//! how to post and get the data from the given form 

const express = require("express");
const fs = require("fs");

fs.readFile("day1/san.js")

const app = express();

//! middleware for working with form
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{

    fs.createReadStream("./index.html","utf-8").pipe(res);
})

app.post('/login',(req,res)=>{
   
    console.log(req.body);

    //! req.body is used to get the data from the form 
    res.send(req.body);
})

app.listen(5000,err=>{
    if(err) throw err;

    console.log('app is running');
})