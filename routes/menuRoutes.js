const express=require('express');
const router=express.Router();
const menu=require('./../models/menu');

router.post('/', async(req,res)=>{
    try{
       const data=req.body;
       const newmenu=new menu(data);
       const response=await newmenu.save();
       console.log(data);
       res.status(200).json(response);
    }catch(err){
      console.log("error has occured",err);
      res.status(500).json({error:"Internal Error has Occured"});
    }
})

router.get('/',async(req,res)=>{
    try{
     const data=await menu.find();
     console.log(data);
     res.status(200).json(data);
    }catch(err){
      console.log("error has occured",err);
      res.status(500).json({error:"Internal Error has Occured"});
    }
})

module.exports=router;