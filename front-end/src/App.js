import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import CountryInfo from "./components/CountryInfo";
import axios from "axios";

function App() {
  const [country, setCountry] = useState(null);

  const handleSearch = async (name) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/country?name=${name}`
      );
      setCountry(response.data);
    } catch (error) {
      setCountry({ error: "Country not found" });
    }
  };

  return (
    <div>
      <h1>Country Info Finder</h1>
      <SearchBar onSearch={handleSearch} />
      {country && !country.error && <CountryInfo country={country} />}
      {country && country.error && (
        <p style={{ color: "red" }}>{country.error}</p>
      )}
    </div>
  );
}

export default App;
