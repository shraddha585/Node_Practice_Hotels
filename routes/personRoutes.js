const express=require('express');
const router=express.Router();
const person=require('./../models/person');

//Post routes to add a person
router.post('/',async(req,res)=>{

    try{
    const data=req.body//Assume the request body contains person data
 
    //create a new person document using mongoose model
    const newperson=new person(data);
    //save the new person to the database
    const response=await newperson.save();
    console.log('data saved', response);
    res.status(200).json(response);
 }catch(err){
   console.log("error has occured",err);
   res.status(500).json({error:'Internal Server Error'});
 }
 })
 
 //get method to got user data
 
 router.get('/',async(req,res)=>{
    try{
    const data=await person.find();
    console.log('data fetched');
    res.status(200).json(data);
    }catch(err){
    console.log("error has occured");
    res.status(500).json({error:'Internal error has occurd'})
    }
 })

 router.get('/:workType',async(req,res)=>{
    try{
    const workType=req.params.workType;//Extract work type from url parameter
    if(workType=='chef'||workType=='manager'||workType=='waiter'){
       const response=await person.find({work: workType});
       res.status(200).json(response);
    }else{
       res.status(404).json({error:"Invalid work type"});
    }
 }catch(err){
    console.log("Error has occured",err);
    res.status(500).json({error:"Invalid"});
 }
 })

 //to update the data use put

 router.put('/:id',async(req,res)=>{
   try{
    const personId=req.params.id;//Extract the id from the url parameter
    const updatepersonData=req.body;//updated data for the person
    const response=await person.findByIdAndUpdate(personId,updatepersonData,{
     new:true,
     runValidators:true,
   })

   if(!response){
    return res.status(404).json({error:"person not found"})
   }
   console.log('data updated');
   res.status(200).json(response);
   }catch(err){
    console.log("Error has occured",err);
    res.status(500).json({error:"Invalid"});
 }
 })

 router.delete('/:id',async(req,res)=>{
    try{
        const personId = req.params.id;
        const response = await person.findByIdAndDelete(personId);
        if(!response){
            return res.status(404).json({error:"person not found"})
           }

           console.log('data deleted');
           res.status(200).json(response);

    }catch(err){
        console.log("Error has occured",err);
        res.status(500).json({error:"Invalid"});
    }
 })

 module.exports=router;
 