const mongoose=require('mongoose')

const receipeSchema=mongoose.Schema({
title:{
  type:String,
  required:true
},
ingredients:{
  type:Array,
  required:true
},
instructions:{
  type:String,
  required:true
},
time:{
  type:String,
  
},
coverImage:{
  type:String,
},
createdBy:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"User"
}

},{timestamp:true})

module.exports=mongoose.model('Recipes',receipeSchema)