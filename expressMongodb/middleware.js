

//!  middleware 


//? 1. express is framework which has minimal functionalities , if we want to add more functionalities we can use middleware.

//? 2. middleware functions are the functions that have access of both request object and response object and has the access of next() which can end the request response cycle. 


//! features : 


//? 1. it can execute any code. 
//? 2. it can change the request or the response object. 
//? 3. it can end the cycle of request ,response . 


//! types of Middleware 

//? 1. Application Level Middleware 
//? 2. Router Level Middleware
//? 3. Error Handling Middleware 
//? 4. Built-In Middleware 
//? 5. Third Party Middlware 


const express = require("express");

const app = express();

  
  //? for using middleware we need use() and it has 3 parameters 

   //! application level middleware 
   
app.use((req,res,next)=>{

    req.user = "salman"
   //! we are adding data to req object 

    console.log('this is middleware 1')
    next()
   
})

app.use((req,res,next)=>{

    console.log("this is m 2", req.user);  
    //! that added data can be moved to further middlewares 
    next() 

    //? it will break the request response cycle 
})

app.get("/",(req,res)=>{

    res.send(`my name is ${req.user}`);
})

app.listen(5000,err=>{
    if(err) throw err;

    console.log('app is running');
})
