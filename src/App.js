import "./App.css";
import { useState } from "react";
import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { SearchContext } from "./Contexts/SearchContext";

function App() {
  const [input, setInput] = useState("");
  const [press, setPress] = useState(false);
  return (
    // BEM
    <div className="app">
      <SearchContext.Provider value={{ input, setInput, press, setPress }}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/search" element={<SearchResult />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
