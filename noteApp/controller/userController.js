const userSchema = require("../model/userScheam");
const bcrypt = require("bcrypt");


exports.register = async(req,res)=>{
    try{

        let user = {
            name:req.body.name,
            pass:req.body.pass,
            photo:req.file.path
        }
        let payload = await userSchema.create(user);
        res.status(201).json({message:"register done",payload});
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
        res.status(401).json({success:false, message:"password & user is required"})

        const user = await userSchema.findOne({name}).select("+pass");

        if(!user)
            res.status(401).json({success:false, message:"wrong user"})

        const isMatch = await bcrypt.compare(pass,user.pass);

        if(!isMatch)
           res.status(401).json({success:false, message:"wrong pass"})

         res.status(200).json({success:true, message:"successfully logged in",user})

    }
    catch(err)
    {
        console.log(err);
    }
}