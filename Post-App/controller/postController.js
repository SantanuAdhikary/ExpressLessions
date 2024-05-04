
const postSchema = require("../model/postSchema");


exports.createPost = async(req,res)=>{

    try
    {
        let payload = await postSchema.create(req.body);
    
        res
        .status(201)
        .json({success:true,message:"successfully added", payload})

    }
    catch(err)
    {
        console.log(err)
    }


}


exports.allPosts = async(req,res)=>{

    try{
        
            payload = await postSchema.find({});
            res
            .status(201)
            .json({success:true,message:"successfully fetched data", payload})

    }
    catch(err)
    {
        console.log(err);
    }
}

exports.singlePost = async(req,res)=>{

    try{

        let payload = await postSchema.findOne({_id:req.params.id})
        res
            .status(201)
            .json({success:true,message:"successfully fetched perticula data", payload})

    }
    catch(err)
    {
        console.log(err);
    }
}

exports.updatePost = async(req,res)=>{

    try{

         let payload = await postSchema.updateOne(
            {
                _id:req.params.id
            },
            {
                $set: req.body
            }
         )
         res.
         status(201)
         .json({message:"UPDATE DONE",payload});
    }
    catch(err)
    {
        console.log(err);
    }
}

exports.deletePost = async(req,res)=>{
    try
    {
       let payload = await postSchema.deleteOne({_id:req.params.id})
       res.
         status(203)
         .json({message:"Delete DONE",payload});

    }
    catch(err)
    {
       console.log(err);
    }
}