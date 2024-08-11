import React, { useState } from "react";

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

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a country name"
      />
      <button onClick={handleSearch}>Search</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default SearchBar;
