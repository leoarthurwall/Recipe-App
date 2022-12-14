import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import Recipe from "./components/Recipe/Recipe";
import Results from "./components/Results/Results";
import { IRecipe } from "./IRecipe";

const App: React.FC = () => {
  const [writtenIngredient, setWrittenIngredient] = useState<string>("");
  const [recipesFound, setRecipesfound] = useState<IRecipe[]>([]);
  const [query, setQuery] = useState<string>("Suggestions");

  const API_KEY = process.env.REACT_APP_RECIPE_API_KEY;
  const API_ID = process.env.REACT_APP_RECIPE_API_ID;

  const apiRequest = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${API_ID}&app_key=${API_KEY}&ingr=6&random=true`;

  // saves written input to writtenIngredient state
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(event.target.value);
    setWrittenIngredient(event.target.value);
  };

  // when form is submitted, the query state is updated with the writtenIngredient state
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setQuery(writtenIngredient);
    console.log(query);
    setWrittenIngredient("");
  };

  //when the query is updated, the useEffect calls the getRecipes api call function
  useEffect(() => {
    const getRecipes = async (): Promise<void> => {
      // does an async/ await fetch request to the API, adds the data to the recipesFound[] state
      try {
        const response = await fetch(apiRequest, {
          method: "Get",
          redirect: "follow"
        });
        const data = await response.json();

        setRecipesfound(data.hits);
        console.log("data.hits", data.hits);
      } catch (error) {
        console.log("error", error);
      }
    };
    getRecipes();
  }, [apiRequest]);

  return (
    <div className="App">
      <Header />
      <div className="App-banner">
        <div className="App-wrapper">
          <Input
            writtenIngredient={writtenIngredient}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
          />
          <div className="results-recipe-container">
            <Results query={query} setQuery={setQuery} />

            {recipesFound &&
              recipesFound.map((data, index) => (
                <Recipe query={query} key={index} recipe={data.recipe}></Recipe>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

//check state setup, also... follow nonTS tutorial to compare.
//it seems to be re-rendering every time I add to this commern
