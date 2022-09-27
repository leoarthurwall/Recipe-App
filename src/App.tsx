import React, { useState, useEffect } from "react";
import "./App.css";
import Recipe from "./components/Recipe";
import { IRecipe } from "./model";

const App: React.FC = () => {
  // const [ingredient, setIngredient] = useState<string>("");
  const [recipesFound, setRecipesfound] = useState<IRecipe[]>([]);

  const API_KEY = process.env.REACT_APP_RECIPE_API_KEY;
  const API_ID = process.env.REACT_APP_RECIPE_API_ID;

  const apiRequest = `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${API_ID}&app_key=${API_KEY}`;

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async (): Promise<any> => {
    const response = await fetch(apiRequest);
    const data = await response.json();
    setRecipesfound(data.hits);
    console.log(data.hits);
  };

  
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
      {recipesFound.map((recipe) => (
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        />
      ))}
    </div>
  );
};

export default App;
