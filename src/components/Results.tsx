import { XMarkIcon } from "@heroicons/react/24/solid";
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
      {query && (
        <div className="results-container">
          <p className="results-for-text">Results for... </p>
          <button className="results-button">
            <XMarkIcon onClick={handleDelete} className="button-icon" />
            <p className="button-query">{query} </p>
          </button>
        </div>
      )}
    </>
  );
};

export default Results;
