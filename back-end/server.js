const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/api/country", async (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ error: "Country name cannot be empty" });
  }

  try {
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${name}`
    );
    const country = response.data[0];

    const countryData = {
      name: country.name.common,
      flag: country.flags.png,
      capital: country.capital ? country.capital[0] : "N/A",
      population: country.population,
      languages: Object.values(country.languages).join(", "),
    };

    res.json(countryData);
  } catch (error) {
    res.status(404).json({ error: "Country not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
