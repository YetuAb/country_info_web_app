import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleSearch = () => {
    if (!input) {
      setError("Country name cannot be empty");
      return;
    }
    setError("");
    onSearch(input);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <div className="search-bar">
        <input
          className="search-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter a country name"
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default SearchBar;
