const mongoose=require('mongoose');
const mongoURL='mongodb://localhost:27017/collage'//collage is database
mongoose.connect(mongoURL);

//mongoose.connect(mongoURL,{--------------- it is used in other version compulsary
//useNewUrlParser:true,
//useUnifiedTopology:true
//})

const db=mongoose.connection;

db.on('connected',()=>{
    console.log("connected to Database");
})

db.on('error',(err)=>{
    console.error('Error has occured DataBase is not Connected',err);
})

db.on('disconnected',()=>{
    console.log("Database is disconnected");
})

//Export database 
module.export=db;
