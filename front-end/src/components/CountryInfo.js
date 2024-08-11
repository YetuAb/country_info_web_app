import React from "react";

function CountryInfo({ country }) {
  if (!country) return null;

  return (
    <div>
      <h2>{country.name}</h2>
      <img src={country.flag} alt={`${country.name} flag`} width="100" />
      <p>
        <strong>Capital:</strong> {country.capital}
      </p>
      <p>
        <strong>Population:</strong> {country.population.toLocaleString()}
      </p>
      <p>
        <strong>Languages:</strong> {country.languages}
      </p>
    </div>
  );
}

export default CountryInfo;
