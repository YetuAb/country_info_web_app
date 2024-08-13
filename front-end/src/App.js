import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import CountryInfo from "./components/CountryInfo";
import axios from "axios";
import "./App.css";
import Logo from "./assets/images/logo512.png";

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
      <div className="header">
        <img className="logo" src={Logo} alt="Logo" />
        <h1 className="title">Search the World</h1>
      </div>
      <SearchBar onSearch={handleSearch} />
      {country && !country.error && <CountryInfo country={country} />}
      {country && country.error && (
        <p style={{ color: "red" }}>{country.error}</p>
      )}
    </div>
  );
}

export default App;
