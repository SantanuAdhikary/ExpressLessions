

const noteSchema = require("../model/noteSchema");

// insert , fetch all , fetch perticular data, update, delete


//! inserting data 

 exports.createNotes = async (req,res)=>{

   let payload =  await noteSchema.create(req.body);
   res
   .status(201)
   .json({success:true, message:"data inserted", payload})
 }


 //! for getting all the data 

 exports.allNotes = async(req,res)=>{

   let payload= await noteSchema.find({});
   res
   .status(201)
   .json({success:true, message:"we are getting dagta", payload})
 }

 
 //! get perticular data 

 exports.singleNote = async(req,res)=>{

  try
  {

    let payload=  await noteSchema.findOne({_id:req.params.id});
    res
    .status(201)
    .json({success:true, message:"we are getting perticular data", payload})
  }
  catch(err)
  {
    console.log(err);
  }

 }

 //! update notes 

 exports.updateNote = async(req,res)=>{

  try{  
       let payload = await noteSchema.updateOne(
          {
             _id:req.params.id
          },
          {
            $set: req.body
          }
        )
        res
        .status(201)
        .json({success:true, message:"update done", payload})
  }
  catch(err)
  {
    console.log(err);
  }
 }


 //! delete note 

 exports.deleteNote = async(req,res)=>{

  try{

    let payload = await noteSchema.deleteOne(
      {
        _id : req.params.id
      }
    )
    res
        .status(203)
        .json({success:true, message:"delete done", payload})


  }
  catch(err)
  {
    console.log(err);
  }
 }
