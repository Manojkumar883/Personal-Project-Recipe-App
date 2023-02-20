import React from "react";
import  style from "./Recipe.css"

const Recipe = ({title,calories,image,ingredients}) => {
  return (
    <div calssName = {style.recipe}>
      <h1 >{title}</h1>
      <ol>
        {ingredients.map(ingredient => (
            <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>{calories}</p>
      <img src={image} alt="" />

    </div>
  );
};

export default Recipe;
