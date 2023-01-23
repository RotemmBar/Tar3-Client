import React from 'react'
import FCIngredient from './FCIngredient';
import { useState } from 'react';

export default function FCRecipe(props) {
 
  const calcTotalCalories = () => {
    let totalCalories = 0;
    props.inglist.map((item) => {
      totalCalories += item.Calories;
    });
    return totalCalories; };

    const [isShown, setIsShown] = useState(false);

    const handleclick=()=>{
      setIsShown(current => !current);       
    }

      
    
  return (

        <div className='recipe'>
          <div>
            <img src={props.image} style={{width:300, height:250}}></img>
            <p>Name: {props.name}</p>
            <p>Cooking Method: {props.cookingmethod}</p>
            <p>Cooking Time: {props.cookingtime}</p>
            <p>Calories: {calcTotalCalories()}</p>
            <button onClick={handleclick} >Show Ingredients</button>
            <div style={{display: isShown ? 'block' : 'none'}}>            
            {props.inglist.map((ing)=>{    
              return(        
          <FCIngredient 
          key={ing.Id} 
          name={ing.Name}
          image={ing.Image}
          calories={ing.Calories}
          Id={ing.Id}
          />
              )
           })}
       </div>
        </div>
        </div>
      )
 }
    
      

