import React, { useState, useContext } from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../Contexts/SearchContext";

function Search({ hideButtons = true }) {
  const { input, setInput } = useContext(SearchContext);

  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    console.log(input);

    navigate("/search");
  };
  let show = () => {
    if (hideButtons) {
      return (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      );
    } else {
      return (
        <div className="search__buttons">
          <Button
            className="search__buttonsHidden"
            type="submit"
            onClick={search}
            variant="outlined"
          >
            Google Search
          </Button>
          <Button className="search__buttonsHidden" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      );
    }
  };
  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <MicIcon />
      </div>
      {show()}
    </form>
  );
}

export default Search;
