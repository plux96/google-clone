import "./App.css";
import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    // BEM
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/search" element={<SearchResult />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
