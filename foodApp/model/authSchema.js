const {Schema,model}=require("mongoose");

let authSchema = new Schema({

    name: {
        type:String,
        required:true
    },
    pass:
    {
        type:String,
        required:true
    },
    photo:{
        type:String,
        required:true
    }

})

module.exports = model("user",authSchema)