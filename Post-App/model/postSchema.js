
const {Schema, model} = require("mongoose");


let postSchema = new Schema(
    {
        quote : {
            type:String,
            required:true
        },
        writtenBy : {
            type:String,
            required:true
        },
        description:
        {
            type:String,
            required:true
        }
    },
    {
        timeseries:true
    }
)

module.exports = model("post",postSchema);