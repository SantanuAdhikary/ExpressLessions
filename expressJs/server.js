
const express = require("express");
// const {Router} = require("express");

const app = express();
const router = express.Router();

// app.use((req,res,next)=>{
//     req.user = "santanu"
//     console.log('first middleware')
//     next();
// })
// app.use((req,res,next)=>{
//     console.log('second middleware', req.user)
//     next();
   
// })

app.get("/",(req,res)=>{

    res.send("Heelo")
})


app.listen(5000,err=>{
    if(err) throw err;

    console.log('app is running from server file');
})