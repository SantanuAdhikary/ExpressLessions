
const authSchema = require("../model/authSchema");
const bcrypt = require("bcrypt");

exports.register = async(req,res)=>{

    try{

        let user = {
            name:req.body.name,
            pass:req.body.pass
        }

        let payload = await authSchema.create(user);
        res.
        status(201)
        .json({message:"successfully registered",success:true, payload})
    }
    catch(err)
    {
        console.log(err);
    }
}


exports.login = async(req,res)=>{
    try{
       
        const {name,pass} = await req.body;

        if(!name || !pass)
          res
        .status(401)
        .json({success:false,message:"both the fields should be present"});


        let user = await authSchema.findOne({name}).select("+pass")


        if(!user)
        res
        .status(401)
        .json({success:false,message:"wrong user"});


       const isMatch = await bcrypt.compare(pass,user.pass);

       if(!isMatch)   
        res
       .status(401)
       .json({success:false,message:"wrong password"});


       res.status(200)
          .json({message:"successfully login",success:true,user})
    }
    catch(err)
    {
        console.log(err);
    }
}