import React, { useEffect, useState } from 'react'
import Model from './model'
import InputForm from './inputForm'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  const[isOpen,setIsOpen]=useState(false)
  let token=localStorage.getItem('token')
const[isLogin,setIsLogin]=useState(token? false:true)
let user=JSON.parse(localStorage.getItem('user'))

useEffect(()=>{
setIsLogin(token ? false:true)
},[token])

function checkLogin(){
  if(token){
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setIsLogin(true)
  }else{
    setIsOpen(true)
  }
  
}

  return (
    <div>
      <header>
        <h2>Food Blog</h2>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li onClick={()=>isLogin&&setIsOpen(true)}><NavLink to={!isLogin?'/myrecipe':'/'}>MyRecipe</NavLink></li>
          {/* <li onClick={()=>isLogin&&setIsOpen(true)}><NavLink to={!isLogin?'/favrecipe':'/'}>Favourites</NavLink></li> */}
          <li onClick={checkLogin}><p className='login'>{(isLogin)?"Login":"LogOut"}{user?.email? `(${user.email})`:""}</p></li>
        </ul>
      </header>
      {(isOpen) && <Model onClose={()=>{setIsOpen(false)}}><InputForm setIsOpen={()=>setIsOpen(false)}></InputForm></Model> }
    </div>
  )
}

export default Navbar
