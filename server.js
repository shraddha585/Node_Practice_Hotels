const express=require('express');
const app=express();
const db=require('./db');
const menu=require('./models/menu');

const bodyParser=require('body-parser');
app.use(bodyParser.json()); //data in json format send to res.body

app.get('/',function(req,res){
   var a={
    name:"Jay Raghoji Bhojanalay"
   }
   res.send("welcome to my server");
})

//app.post('/person',async(req,res)=>{

   //try{
   //const data=req.body//Assume the request body contains person data

   //create a new person document using mongoose model
   //const newperson=new person(data);
   /*newperson.name=data.name;
   newperson.age=data.age;
   newperson.work=data.work;
   newperson.mobile=data.mobile;
   newperson.email=data.email;
   newperson.address=data.address;
   newperson.salary=data.salary;   -----instead of this we pass data in person like person(data)*/

   //save the new person to the database
  /* const response=await newperson.save();
   console.log('data saved', response);
   res.status(200).json(response);
}catch(err){
  console.log("error has occured",err);
  res.status(500).json({error:'Internal Server Error'});
}
})

//get method to got user data

app.get('/person',async(req,res)=>{
   try{
   const data=await person.find();
   console.log('data fetched');
   res.status(200).json(data);
   }catch(err){
   console.log("error has occured");
   res.status(500).json({error:'Internal error has occurd'})
   }
})*/

/*app.post('/menu', async(req,res)=>{
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

app.get('/menu',async(req,res)=>{
    try{
     const data=await menu.find();
     console.log(data);
     res.status(200).json(data);
    }catch(err){
      console.log("error has occured",err);
      res.status(500).json({error:"Internal Error has Occured"});
    }
})*/

/*app.get('/person/:workType',async(req,res)=>{
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
})*/

const personRoutes = require('./routes/personRoutes');
app.use('/person',personRoutes);

const menuRoutes =require('./routes/menuRoutes');
app.use('/menu',menuRoutes);

app.listen(3000, async()=>{
console.log("server is listen on port 3000" )
})