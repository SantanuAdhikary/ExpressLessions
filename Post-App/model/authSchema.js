const {Schema,model} = require("mongoose");
const bcrypt = require("bcrypt");

let authSchema = new Schema({

    name:{
        type:String,
        required:true
    },
    pass:{
        type:String,
        required:true
    }
},
{
    timestamps:true
})

authSchema.pre('save', async function(){

    let salt = await bcrypt.genSalt(10);
    this.pass = await bcrypt.hash(this.pass, salt);
})

module.exports = model('user',authSchema);