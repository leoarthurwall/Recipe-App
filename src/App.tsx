import { useState, useEffect } from "react";
import "./App.css";

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
  }

  useEffect(() => {
    console.log("Effect has been run");
  },[]);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">Go</button>
      </form>
      <h1 onClick={handleClick}> {count}</h1>
    </div>
  );
};

export default App;
