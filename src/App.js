import React, { useEffect } from "react";
import { useState } from "react";
import Recipe from "./Components/Recipes"

import "./App.css";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('')
  const APP_ID = "33042e6e";
  const APP_KEYS = "9b0755b710b1ed633456a0fd5c691e48";

  //  const example_request =

  useEffect(() => {
    getRecipes();
  }, [search]);
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEYS}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (event) => {
    setSearch(event.target.value)
    console.log(search)
  }
  return (
    <div>
      <form>
        <input className = "search-bar" type="text" value = {search} onChange ={updateSearch} />
        <button type="submit"> Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipe 
        key = {recipe.recipe.lable}
        title = {recipe.recipe.label} 
        calories = {recipe.recipe.calories}
        image = {recipe.recipe.image} />
      ))}
    </div>
  );
};

export default App;
