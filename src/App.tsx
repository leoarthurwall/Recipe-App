import React, { useState, useEffect } from "react";
import "./App.css";
import Recipe from "./components/Recipe";
import { IRecipe } from "./IRecipe";

const App: React.FC = () => {
  const [writtenIngredient, setWrittenIngredient] = useState<string>("");
  const [recipesFound, setRecipesfound] = useState<IRecipe[]>([]);
  const [query, setQuery] = useState<string>("mushroom");

  const API_KEY = process.env.REACT_APP_RECIPE_API_KEY;
  const API_ID = process.env.REACT_APP_RECIPE_API_ID;

  const apiRequest = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${API_ID}&app_key=${API_KEY}`;
  
  //when the query is updated, the useEffect calls the getRecipes api call function
  useEffect(() => {
    getRecipes();
  }, []);

  // does an async/ await fetch request to the API, adds the data to the recipesFound[] state
  const getRecipes = async (): Promise<any> => {
    const response = await fetch(apiRequest);
    const data = await response.json();
    setRecipesfound(data.hits);
    console.log("recipes.found", recipesFound);
    console.log("data.hits", data.hits)
  };
  // saves written input to writtenIngredient state
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setWrittenIngredient(event.target.value);
  };

  // when form is submitted, the query state is updated with the writtenIngredient state
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setQuery(writtenIngredient);
    console.log(query);
  };


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Search for an ingredient:
          <input onChange={handleChange} type="text"></input>
        </label>
        <input type="submit" value="Search"></input>
      </form>
      {query && <p>Results for {query}...</p>}
      {recipesFound &&
        recipesFound.map((recipe, index)  => (
          <div key={index}>
            <p>{recipe.recipe.label}</p>
            <p>hello</p>
          </div>
          // <Recipe key={recipe.calories} recipe={recipe}></Recipe>
        ))}
    </div>
  );
};

export default App;

//check state setup, also... follow nonTS tutorial to compare.
//it seems to be re-rendering every time I add to this commern