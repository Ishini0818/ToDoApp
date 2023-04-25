const mongoose=require("mongoose");

const mongodbURL="mongodb+srv://ishini:pass123@cluster0.k85hrzv.mongodb.net/mydatabase?retryWrites=true&w=majority"

 mongoose.connect(mongodbURL,{useNewUrlParser:true,useUnifiedTopology:true});

 const connection=mongoose.connection
mongoose.set('strictQuery',true);

 connection.once("open",()=>{
    console.log("Mongodb connected!")
 });