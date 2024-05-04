
const authSchema = require("../model/authSchema");


exports.register = async(req,res)=>{
    try{

        let user = {
            name:req.body.name,
            pass:req.body.pass,
            photo:req.file.path
        }

        let payload = await authSchema.create(user);
        res
        .status(201)
        .json({message:"successfully registered",payload,success:true})
    }
    catch(err)
    {
        console.log(err);
    }
}