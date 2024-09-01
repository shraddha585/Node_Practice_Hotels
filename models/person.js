const mongoose=require('mongoose');


const personSchma=new mongoose.Schema({
   name:{ type:String,
    require:true
   },
   age:{
    type:Number
   },
   work:{
    type:String,
    enum:['chef','waiter','manager'],
    require:true
   },
   mobile:{
    type:String,
    require:true,
    unique:true
   },
   email:{
    type:String,
    require:true,
    unique:true
   },
   address:{
    type:String
   },
   salary:{
    type:Number,
    require:true
   }
})

const person=mongoose.model('person',personSchma);
module.exports=person;