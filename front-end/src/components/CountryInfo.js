import React from "react";
import "./CountryInfo.css";

function CountryInfo({ country }) {
  if (!country) return null;

  return (
    <div className="container">
      <div className="card">
        <img className="img" src={country.flag} alt={`${country.name} flag`} />
        <h2>{country.name}</h2>
        <ul>
          <li>
            <strong>Capital:</strong> {country.capital}
          </li>
          <li>
            <strong>Population:</strong> {country.population.toLocaleString()}
          </li>
          <li>
            <strong>Languages:</strong> {country.languages}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CountryInfo;
