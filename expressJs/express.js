
//! express js 

//? it is web framework for nodejs 

//! features : 

//? it will speeds up the process because it minimize the codes.

//? the performance will be high.

//? it will help to make MVC architecture. 
  // M => Model 
  // V => view 
  // C => controllers

//! other framework for nodejs => 
  
//? Nest.js , Koa.js ,  Derby.js


//! how to create server with the help of express 

//! 1st step: import

// const express = require("express");


// //! 2nd step: initialize express app with top level express function 

// const app = express();


// //! 3rd step :  listen 

// app.listen(5000,err=>{
//     if(err) throw err;

//     console.log('app is running');
// })




//! how to do routing in express 

// const express = require("express");

// const app = express();

// ! routing part 

// app.get("/",(req,res)=>{
//     res.send("<h1>this is home page<h1>");
// })

// app.get("/about",(req,res)=>{
//     res.send("this is about page")
// })



// app.listen(5000,err=>{
//     if(err) throw err;

//     console.log('app is running ')
// })



//! how to serve different files in express 

// const express = require("express");
// const fs = require("fs");
// const app = express();


// app.get("/txt",(req,res)=>{

//     fs.createReadStream("./data.txt","utf-8").pipe(res);

// })

// app.get('/html',(req,res)=>{

//     fs.createReadStream("./index.html",'utf-8').pipe(res);
// })

// app.listen(5000,err=>{
//     if(err) throw err;

//     console.log('app is running');
// })