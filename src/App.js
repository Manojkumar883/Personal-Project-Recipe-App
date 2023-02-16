import React, { useEffect } from "react";
import { useState } from "react";

import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [recipes, setRecipes] = useState([])
  const APP_ID = "33042e6e";
  const APP_KEYS = "9b0755b710b1ed633456a0fd5c691e48";

  //  const example_request =

  useEffect(() => {
    getRecipes();
  }, []);
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEYS}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits)
  };
  return (
    <div>
      <form>
        <input type="text" />
        <button type="submit"> Search</button>
      </form>
    </div>
  );
};

export default App;
