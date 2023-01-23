import React from 'react';
import { Form } from 'react-router-dom';
import { useState } from 'react';

export default function FCNewIngredients() 
{

  const [nametxt,setNameTxt]=useState('')
  const [imageTxt, setImageTxt] = useState('')
  const [caloriesTxt,setCaloriesTxt]=useState('')
  const [counter,setCounter]=useState(3)
    const AddNewIngredient=()=>
    {
      alert(nametxt)
      {setCounter(prevC=>prevC+1)}
      alert (counter)
      const apiUrl='https://localhost:44338/api/ingredients'
      fetch(apiUrl, 
        {
        method: 'POST',
        body: JSON.stringify({
          Id:counter,
          Name:nametxt,
          Image:imageTxt,
          Calories:caloriesTxt

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
        console.log(result.Name);
        },
        (error) => {
        console.log("error post");
        });
    
      }
      
  return (
    <div className='col-sm-12'>
    <h1>Create New Ingredient</h1>
    Name:
    <input type="text" value={nametxt} name="name" onChange={(e)=>{setNameTxt(e.target.value)}}/>
    <br/>
    Image:
    <input type="text" value={imageTxt} name="image" onChange={(e)=> {setImageTxt(e.target.value)}} />
   <br/>
    Calories:
    <input type="text" value={caloriesTxt} name="calories" onChange={(e)=>{setCaloriesTxt(e.target.value)} }/>
    <br/>
    <button onClick={AddNewIngredient}>Add New Ingredient</button>

    </div>
  )
}
