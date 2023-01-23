import './App.css';
import FCIngredient from './Components/FCIngredient';
import { useState } from 'react';
import { useEffect } from 'react';
import FCCreateRecipe from './Components/FCCreateRecipe';
import GetIngredients from './Components/FCCreateRecipe';
import { Link, Route, Routes } from 'react-router-dom';
import FCRecipes from './Components/FCRecipes';
import FCNewIngredient from './Components/FCNewIngredients'
import FCRecipecard from './Components/FCRecipecard';

function App(){
  

  return (
    <div className="App">
      <div style={{margin:20, fontSize:25}}>
      <Link to="/"> Home </Link>|
      <Link to="/createrecipe"> Create Recipe</Link>|
      <Link to="/createingredient"> Create Ingredient</Link>
      {/* <Link to="/params/7 OR {"/params/"+int}">USEPARAMS</Link> */}

      </div>
      <header className="App-header">
      <Routes>
      <Route path="/" element={<FCRecipes/>} />
      <Route path="/createingredient" element={<FCNewIngredient/>} />
      <Route path="/createrecipe" element={<FCCreateRecipe />} />
      <Route path="/recipecard" element={<FCRecipecard />} />
      {/* <Route path="/menu/:userid" element={menu}/> */}
      </Routes>
      </header>
    
    </div>
  );
}

export default App;
