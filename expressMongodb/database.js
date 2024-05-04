const express = require("express");
const fs = require("fs");
const mongodb = require("mongodb").MongoClient;

const url = "mongodb://127.0.0.1:27017";

let database;

let connectDB = async()=>{

    try{

        let connect = await mongodb.connect(url);
        database = await connect.db("login");
        await database.createCollection("users");
        console.log('database connected');
    }
    catch(err)
    {
        console.log(err);
    }
}


connectDB();

const app = express();


app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{

    fs.createReadStream("./index.html").pipe(res);
})


app.post('/login',async (req,res)=>{

    // console.log(req.body);

   await database.collection("users").insertOne(req.body);
    res.send("ok");

})

app.listen(5000,err=>{
    if(err) throw err;
    console.log('app is running')
})