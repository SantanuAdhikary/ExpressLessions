const {Schema,model} = require("mongoose");


let foodSchema = new Schema(
    {
        name: {
            type:String,
            required:true
        },
        desc:
        {
            type:String,
            required:true
        }

    },
    {
        timestamps:true
    }
)

module.exports = model("food",foodSchema)