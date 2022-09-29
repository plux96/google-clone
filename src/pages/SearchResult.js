import React, { useContext } from "react";
import "./SearchResult.css";
import { SearchContext } from "../Contexts/SearchContext";
import useGoogleSearch from "../useGoogleSearch";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function SearchResult() {
  const { input } = useContext(SearchContext);
  const { data } = useGoogleSearch(input);
  console.log(data);
  return (
    <div className="searchResult">
      <div className="searchResult__header">
        <Link to="/">
          <img
            className="searchResult__logo"
            src="https://www.google.co.uz/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png"
            alt="searchResult__logo"
          />
        </Link>
        <div className="searchResult__headerBody">
          <Search hideButtons={false} />
          <div className="searchResult__options">
            <div className="searchResult__optionsLeft">
              <div className="searchResult__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchResult__option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="searchResult__option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchResult__option">
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="searchResult__option">
                <RoomIcon />
                <Link to="/maps">maps</Link>
              </div>
              <div className="searchResult__option">
                <MoreVertIcon />
                <Link to="/more">more</Link>
              </div>
            </div>
            <div className="searchResult__optionsRight">
              <div className="searchResult__option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchResult__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {input && (
        <div className="searchResult__results">
          <p className="searchResult__resultCount">
            About {data?.searchInformation?.formattedTotalResults} results (
            {data?.searchInformation?.formattedSearchTime} seconds)
          </p>

          {data?.items.map((item) => (
            <div className="searchResult__result">
              <a className="searchResult__resultLink" href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchResult__resultImage"
                      src={
                        item.pagemap?.cse_image?.length > 0 &&
                        item.pagemap?.cse_image[0]?.src
                      }
                      alt=""
                    />
                  )}
                {item.displayLink}
              </a>

              <a className="searchResult__resultTitle" href={item.link}>
                {item.title}
              </a>
              <p className="searchResult__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResult;
