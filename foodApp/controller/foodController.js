const foodSchema = require("../model/foodSchema");


exports.createFood = async(req,res)=>{
    try{

        let payload = await foodSchema.create(req.body);
        res
        .status(201)
        .json({message:"food added", success:true,payload})
    }
    catch(err)
    {
        console.log(err);
    }
}

exports.allFood= async(req,res)=>{

    try{

        let payload = await foodSchema.find({});
        res
        .status(201)
        .json({message:"getting food", success:true,payload})
    }
    catch(err)
    {
        console.log(err)
    }
}

exports.singleFood = async(req,res)=>{

    try{

        let payload = await foodSchema.findOne({_id:req.params.id})
     
        res
        .status(201)
        .json({message:"getting single food", success:true,payload})
    }
    catch(err)
    {
        console.log(err)
    }
}

exports.updateFood = async(req,res)=>{
    try{

        let payload = await foodSchema.updateOne(
            {
                _id:req.params.id
            },
            {
                $set: req.body
            }
        )
        res
        .status(201)
        .json({message:"updated", success:true,payload})

    }
    catch(err)
    {
        console.log(err);
    }
}

exports.deleteFood = async(req,res)=>{

    try{

        await foodSchema.deleteOne({_id:req.params.id});
        res
            .status(203)
            .json({message:"deleted", success:true})
    }
    catch(err)
    {
        console.log(err)
    }

}