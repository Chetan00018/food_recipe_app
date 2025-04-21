const express=require('express')
const {getRecipes,getRecipe,addRecipe,deleteRecipe,editRecipe,upload} = require('../controller/recipe.js')
const router=express.Router()
const verifyToken=require('../middleware/auth.js')

router.get('/',getRecipes)//get all recipe
router.get('/:id',getRecipe)
router.post('/',upload.single('file'),verifyToken,addRecipe)
router.put('/:id',upload.single('file'),editRecipe)
router.delete('/:id',deleteRecipe)


module.exports=router