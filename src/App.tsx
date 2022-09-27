import React, { useState, useEffect } from "react";
import "./App.css";
import Recipe from "./components/Recipe";

const App: React.FC = () => {
  const [submitIngredient, setSubmitIngredient] = useState<string>("");
  const [writtenIngredient, setWrittenIngredient] = useState<string>("");
  const [recipesFound, setRecipesfound] = useState([]);
  const [query, setQuery] = useState("mushroom");

  const API_KEY = process.env.REACT_APP_RECIPE_API_KEY;
  const API_ID = process.env.REACT_APP_RECIPE_API_ID;

  const apiRequest = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${API_ID}&app_key=${API_KEY}`;

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async (): Promise<any> => {
    const response = await fetch(apiRequest);
    const data = await response.json();
    setRecipesfound(data.hits);
    console.log(data.hits);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event.target);
    // setSubmitIngredient(e.target.value);
    // console.log(ingredient);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setWrittenIngredient(event.target.value)
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
      {recipesFound.map((recipe) => (
        <Recipe />
      ))}
    </div>
  );
};

export default App;
