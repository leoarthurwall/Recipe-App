import React, { useState, useEffect } from "react";
import "./App.css";

const App: React.FC = () => {
  const[ingredient, setIngredient] = useState<string>("")

  useEffect(() => {}, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIngredient(e.target.value)
    console.log(ingredient)
  }

  return (
    <div className="App">
      <form >
        <label>
          Search for an ingredient: 
          <input onChange={handleChange} type="text"></input>
        </label>

        <input type="submit" value="Search"></input>
      </form>
    </div>
  );
};

export default App;
