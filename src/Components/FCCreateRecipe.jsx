import React from 'react'
import { useState } from 'react';
import FCIngredient from './FCIngredient';

export default function FCCreateRecipe() {

    const[arr,changearr]=useState([]);
    const[recipename,setRecipename]=useState('');
    const[recipeimg,setRecipeImage]=useState('');
    const[recipemethod,setRecipeMethod]=useState('');
    const[recipetime,setRecipeTime]=useState(' ');
    const [recepiesCounter,setRecepiesCounter]=useState(17)

    const GetIngredients=()=>
    {
      const apiUrl='https://localhost:44338/api/ingredients'
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
      changearr(result)
  
      },
      (error) => {
      console.log("err post=", error);
      });     
      
    }

    const AddNewRecipe=()=>
    {
      alert(recipename);
      {setRecepiesCounter(prevC=>prevC+1)}
      const apiUrl='https://localhost:44338/api/recipe'
      fetch(apiUrl, 
        {
        method: 'POST',
        body: JSON.stringify({
          id:recepiesCounter,
          Name:recipename,
          Image:recipeimg,
          CookingMethod:recipemethod,
          Time:recipetime,
        }
       ),
        headers: new Headers({
        'Content-type': 'application/json; charset=UTF-8' //very important to add the 'charset=UTF-8'!!!!
        })
        })
        .then(res => {
        console.log('res=', res);
        console.log("res status=", res.status)
        return res.json();
        })
        .then((result) => {
        console.log("fetch POST= ", result);
        console.log(result.recipename);
        },
        (error) => {
        console.log("error post");
        });
    

    }

    const [arrIngrec,setIngrec]=useState([])

    const markedYes=(e)=>
    {

      if(e.target.checked)
      {

      setIngrec([...arrIngrec,arr[e.target.id]])
      alert(e.target.id)
      console.log(arrIngrec)

      }
      else 
      {
        alert("not")
        
        setIngrec(arrIngrec.filter(ingredient => ingredient.Id === e.target.id))
        // setIngrec((arrIngrec)=> arrIngrec.filter((ing)=>ing.Id!=e.target.dataset.pid));
        console.log(arrIngrec)

        // var array = arrIngrec;
        // var index = arrIngrec.indexOf(e.target.dataset.pid); // Let's say it's Bob.
        // delete array[index];
    
       }
     
      }
  

  return (
    <div>
    <h1>Create New Recipe</h1>
    Recipe Name:
    <input type="text" value={recipename} name="name" onChange={(e)=>{setRecipename(e.target.value)}}/>
    <br/>
    Recipe Image:
    <input type="text" value={recipeimg} name="image" onChange={(e)=> {setRecipeImage(e.target.value)}} />
    <br/>
    Recipe Cooking Time:
    <input type="text" value={recipetime} name="time" onChange={(e)=> {setRecipeTime(e.target.value)}} />
   <br/>
    Recipe Cooking Method:
    <input type="text" value={recipemethod} name="method" onChange={(e)=> {setRecipeMethod(e.target.value)}} />

    <br/>

      <div> 
    <button onClick={GetIngredients}>Show Ingredients</button>
    {arr.map((ing)=>
        {
          return(
            <div>
            <FCIngredient 
            key={ing.Id} 
            name={ing.Name}
            image={ing.Image}
            calories={ing.Calories}
            Id={ing.Id}
            />
      <input id={ing.Id} type="checkbox" data-pid={ing.Id} onChange={(e)=>markedYes(e)}/>          
      </div>
          )        
        }
        )}


        </div>
        <button onClick={AddNewRecipe}>Add New Recipe</button>

    </div>
  )
  
}
