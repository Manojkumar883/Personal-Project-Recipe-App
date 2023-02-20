import React, { useEffect } from "react";
import { useState } from "react";
import Recipe from "./Components/Recipe/Recipes"
import "./App.css"

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('')
  const [submit, setSubmit] = useState('chicken')

  const APP_ID = "33042e6e";
  const APP_KEYS = "9b0755b710b1ed633456a0fd5c691e48";

  //  const example_request =

  useEffect(() => {
    getRecipes();
  }, [submit]);


  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${submit}&app_id=${APP_ID}&app_key=${APP_KEYS}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (event) => {
    setSearch(event.target.value)
  }

  const handleSearch = (event) => {
    event.preventDefault()
    setSubmit(search)
    setSearch('')
  }
  return (
    <div className = "App">
      <form onSubmit = {handleSearch} className = "search-form" >
        <input className = "search-bar" type="text" value = {search} onChange ={updateSearch} />
        <button className = "search-button" type="submit"> Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe 
        key = {recipe.recipe.lable}
        title = {recipe.recipe.label} 
        calories = {recipe.recipe.calories}
        image = {recipe.recipe.image}
        ingredients = {recipe.recipe.ingredients} />
      ))}
      </div>
    </div>
  );
};

export default App;
