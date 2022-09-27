import React, { useState, useEffect } from "react";
import "./App.css";

const App: React.FC = () => {
  const [ingredient, setIngredient] = useState<string>("");

  const API_KEY = process.env.REACT_APP_RECIPE_API_KEY
  const API_ID = process.env.REACT_APP_RECIPE_API_ID

  // const apiRequest =  `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${API_ID}&app_key=${API_KEY}`

  useEffect(() => {
    getRecipes()
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${API_ID}&app_key=${API_KEY}`
    );
    const data = await response.json();
    console.log(data)
  }



  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault()
  //   setIngredient(e.target.value);
  //   console.log(ingredient);

  // };

  return (
    <div className="App">
      <form>
        <label>
          Search for an ingredient:
          <input type="text"></input>
        </label>
        <input type="submit" value="Search"></input>
      </form>
      <h3>{ingredient}</h3>
    </div>
  );
};

export default App;
