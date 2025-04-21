const express =require("express");
const router = require("./routes/recipe.js");
const userRoutes=require('./routes/user.js')
const mongoose=require("mongoose")
const cors=require("cors")
const app=express();
app.use(express.json())
app.use(cors())
app.use(express.static("public"))

mongoose.connect("mongodb+srv://chetangore323:EwOJjoD708xpGkiD@cluster0.vvxrihv.mongodb.net/",{
  dbname:"foodrecipe"
}).then(()=>console.log("connected successfully")).catch((err)=>console.log(err))
const port=3000

app.use('/',userRoutes)
app.use('/recipe',router)

app.listen(port,()=>{
  console.log(`server is running on  port ${port}`)
})