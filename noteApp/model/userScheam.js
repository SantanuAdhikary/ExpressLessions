const {Schema,model} = require("mongoose");
const bcrypt = require("bcrypt");

let userSchema = new Schema(
    {
        photo:{
            type:String
        },
        name: {
            type:String,
            required:true
        },
        pass:{
            type:String,
            requied:true
        }
    },
    {
        timestamps:true
    }
)

userSchema.pre('save',async function(){
    let salt = await bcrypt.genSalt(10);
    this.pass= await bcrypt.hash(this.pass,salt);
})

module.exports = model("user",userSchema)