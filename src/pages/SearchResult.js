import React, { useContext } from "react";
import "./SearchResult.css";
import { SearchContext } from "../Contexts/SearchContext";

function SearchResult() {
  const { input } = useContext(SearchContext);
  return (
    <div className="searchResult">
      <div className="searchResult__header">
        <h1>{input}</h1>
      </div>
      <div className="searchResult__results"></div>
    </div>
  );
}

export default SearchResult;
