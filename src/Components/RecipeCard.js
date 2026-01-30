import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = ({recipe}) => {
   
    // const [idMeal, strMeal, strMealThumb] = recipe;
  return (
  
    
        <div>
           <div className='card m-3 shadow-lg'>
                <img className='card-img-top' src={recipe.strMealThumb} alt={recipe.strMeal} />
                <div className="card-body">
                    <h3 className="card-title">
                        {recipe.strMeal}
                    </h3>
                    <Link to={`/${recipe.idMeal}`}><button className='btn btn-warning'>Read</button></Link>
                </div>
           </div>
        </div>
            
   
  )
}

export default RecipeCard
