const {Schema,model} = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

let authSchema = new Schema({

    name:{
        type:String,
        required:true
    },
    pass:{
        type:String,
        required:true
    },
   
},
{
    timestamps:true
})


//! matching password 

authSchema.methods.comparePassword = async function (pass)
{
    try{
        return bcrypt.compare(pass,this.pass)
    }
    catch(err)
    {
        console.log(err)
    }
}

//! creating token 

authSchema.methods.generateToken = async function (){
    try{
        return jwt.sign(
            {},
            process.env.JWT_SECRET_KEY,
            {
                expiresIn:"30d"
            }
        )
    }
    catch(err)
    {
        console.log(err)
    }
}

authSchema.pre('save', async function(){

    let salt = await bcrypt.genSalt(10);
    this.pass = await bcrypt.hash(this.pass, salt);
})

module.exports = model('user',authSchema);