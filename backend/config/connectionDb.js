const mongoose=require("mongoose")

const connectDb=async()=>{
 await mongoose.connect(process.env.CONNECTION_STRING,{
  dbname:"food_recipe"
 }).then(()=>console.log("connected")).catch((error)=>console.log(error))
}

module.exports=connectDb;