import { XMarkIcon, ListBulletIcon } from "@heroicons/react/24/solid";
import React from "react";
import "./Results.css";

type Props = {
  query: string;
  setQuery: any; // not specific
};

const Results: React.FC<Props> = ({ query, setQuery }) => {
  const handleDelete = () => {
    setQuery("");
  };

  return (
    <>
    { query === "Suggestions" ? (<div className="results-container">
      <ListBulletIcon className="list-icon" />
      <p className="results-for-text">Looking for Inspiration? </p>
      <button className="results-button">
        <XMarkIcon onClick={handleDelete} className="button-icon" />
        <p className="button-query">{query} </p>
      </button>
    </div>) : query === "" ? (null) : (<div className="results-container">
      <ListBulletIcon className="list-icon" />
      <p className="results-for-text">Top Results for... </p>
      <button className="results-button">
        <XMarkIcon onClick={handleDelete} className="button-icon" />
        <p className="button-query">{query} </p>
      </button>
    </div>)
    } 
    
   
    </>
  );
};

export default Results;
