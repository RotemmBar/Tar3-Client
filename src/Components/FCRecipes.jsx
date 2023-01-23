import React from 'react'
import { useState } from 'react';
import FCIngredient from './FCIngredient';
import FCRecipe from './FCRecipe';
import FCRecipecard from './FCRecipecard';

export default function FCRecipes() {



const [recipearr,setRecipeArr]=useState([])

const GetRecipes=()=>
{
  const apiUrl='https://localhost:44338/api/recipe'
  fetch(apiUrl, 
    {
    method: 'GET',
    headers: new Headers({
      'Content-Type':'application/json; charset=UTF-8',
      'Accept':'application/json; charset=UTF-8',
      })
      
    })
  .then(res => {
  console.log('res=', res);
  return res.json()
  })
  .then(
  (result) => {
  setRecipeArr(result)

  },
  (error) => {
  console.log("err post=", error);
  });     
  
}


   
  return (
    <div>
    
        Your Recipes
        <br></br>

        <button onClick={GetRecipes} >Show Recipes</button>

        {recipearr.map((rec)=>
        {
          return(
            <div className='container'>
            <div className='row'>
            <FCRecipecard 
            key={rec.Id} 
            name={rec.Name}
            image={rec.Image}
            cookingmethod={rec.CookingMethod}
            cookingtime={rec.Time}
            inglist={rec.inglist}
            />
            </div>
            </div>
          )
        }
        )}

      
    </div>
  )
}
