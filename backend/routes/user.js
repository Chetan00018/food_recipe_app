const express=require('express')
const router=express.Router()
const{userSignUp,userLogin,getUser}=require('../controller/user.js')

router.post('/signUp',userSignUp)
router.post('/login',userLogin)
router.get('/login/:id',getUser)

module.exports=router