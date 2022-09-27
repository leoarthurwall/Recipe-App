import { useState, useEffect } from "react";
import "./App.css";

const App: React.FC = () => {
  useEffect(() => {}, []);

  return (
    <div className="App">
      <form>
        <label>
          Search for an ingredient: 
          <input type="text"></input>
        </label>

        <input type="submit" value="Search"></input>
      </form>
    </div>
  );
};

export default App;
