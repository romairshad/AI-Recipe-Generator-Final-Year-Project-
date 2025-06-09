
import React, { useEffect, useState } from 'react'
import RecipeCard from '../Components/RecipeCard';
import Search from '../Components/Search';


const Searchrecipe = () => {
  const get = "https://www.themealdb.com/api/json/v1/1/search.php?s="


  const [data, setdata] = useState(false);
  const [query, setquery] = useState('');
  const [recipes, setrecipes] = useState([])

  const searchRecipe = async () => {
    setdata(true)
    const url = get + query;
    const res = await fetch(url);
    const jsData = await res.json();
    setrecipes(jsData.meals)
    setdata(false)
  }
  useEffect(() => {
    searchRecipe();
  }, []);

  const handleForm = (event)=>{
      event.preventDefault();
      searchRecipe();
  }


  return (
    <div >
      <div className=' fs-1 recipe-text d-flex justify-content-center align-items-center '>
      <h1 className=' text-warning-emphasis'>Our Recipes</h1>
      </div>
     <Search handleForm={handleForm}
     value={query}
      onChange={event =>setquery(event.target.value) } data={data} />
      <div className='d-flex flex-wrap justify-content-center'>
        {
          recipes ? recipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          )) : "No Recipe"
        }
      </div>
     

    </div>
  )
}

export default Searchrecipe
