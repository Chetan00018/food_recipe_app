import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
// import foodimg from "../assets/foodRecipe.png";
import { BsStopwatchFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";


const RecipeItems = () => {
  
  const recipes = useLoaderData();
  const[allRecipe,setAllRecipes]=useState()
  let path=window.location.pathname==='/myrecipe'?true:false
  console.log(allRecipe);

  useEffect(()=>{
setAllRecipes(recipes)
  },[recipes])

  const onDelete=async(id)=>{
await axios.delete(`http://localhost:3000/recipe/${id}`)
.then((res)=>console.log(res))
setAllRecipes(recipes=>recipes.filter(recipe=>recipe._id!==id))
  }

  return (
  <>
  <div className="card-container">
    {
      allRecipe?.map((item,index)=>{
        return(
          <div className="card" key={index}>
            <img src={`http://localhost:3000/images/${item.coverImage}`} height="100px" width="120px" alt="" />
            <div className="card-body">
              <div className="title">{item.title}</div>
              <div className="icons">
                <div className="timer">
                  <BsStopwatchFill></BsStopwatchFill>{item.time}
                </div>
                {(!path)?<FaHeart></FaHeart>:
               <div className="action">
               <Link to={`/editrecipe/${item._id}`} className='editIcon'><FaEdit /></Link>
               <MdDelete className="deleteIcon" onClick={()=>onDelete(item._id)}/>
               </div>
      }
              </div>
            </div>
          </div>
        )
      })
    }
  </div>
  </>
  );
};
export default RecipeItems;
