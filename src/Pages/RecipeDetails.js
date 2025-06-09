import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const RecipeDetails = () => {
    const {mealid} = useParams();
    const [info,setinfo]= useState();

    const details = async ()=>{
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
        const url = await get.json();
        console.log(url)
        setinfo(url.meals[0])

    }
    useEffect(()=>{
        if(info != ""){
            details();
         }
    },[])
    


  return (
    <div>
      {
        !info ? "Recipe Not Found" : 
        <div className='d-lg-flex detail'>
           
            
            <img className='shadow-lg rounded m-5 img-fluid' src={info.strMealThumb} alt="img" />
            
            <div className='mt-5 d-flex flex-column flex-wrap'>
            <h1>{info.strMeal}</h1>
            <h3>Recipe Details</h3>
            <p className='m-3'>{info.strInstructions}</p>
            </div>
            
        </div>
      }
    </div>
  )
}

export default RecipeDetails
