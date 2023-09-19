import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const AllCountry = () => {
  const [countryList, setCountryList] = useState([]);
  // we need a state where filter data will be stored
  const [filteredCountryList, setFilterCountryList] = useState([]);
  const [region, setRegion] = useState([]);
  const [searchCountry, setSearchCountry] = useState([]);

  // all countries fetching
  useEffect(() => {
    const url = "https://restcountries.com/v3.1/all";
    axios.get(url).then((res) => {
      // all countries data state
      setCountryList(res.data);
      // filter country data state
      setFilterCountryList(res.data);
    });
  }, []);

  // data will show based on search and select region
  useEffect(() => {
    // if no filter is using then all data will be show
    if (region === " " && searchCountry === " ") {
      setFilterCountryList(countryList);
    } else {
      let filterResult = countryList;
      // region state filter functionility (select item)
      if (region.length) {
        // region element from country, will have to filter out from region state
        filterResult = filterResult.filter((country) => {
          if (country.region === region) return true;
          return false;
        });
      }

      // searched text filter functionility
      if (searchCountry.length) {
        filterResult = filterResult.filter((country) => {
          // country name lower case
          const countryLowerCase = country.name.common.toLowerCase();
          // country filter out from search text
          if (countryLowerCase.includes(searchCountry.toLowerCase()))
            return true;
          return false;
        });
      }
      setFilterCountryList(filterResult);
    }
  }, [region, countryList, searchCountry]);

  // search by name function
  const handleSearchChange = (event) => {
    setSearchCountry(event.target.value);
  };

  // search by region function
  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };

  return (
    <div>
      <div style={{ height: "10rem" }}>
        <TextField
          id="outlined-basic"
          label="Search By Name"
          variant="outlined"
          value={searchCountry}
          onChange={handleSearchChange}
        />
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">Region</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            label="Region"
            value={region}
            onChange={handleRegionChange}
          >
            {/* according to logic "" means all data */}
            <MenuItem value={""}>All</MenuItem>
            <MenuItem value={"Asia"}>Asia</MenuItem>
            <MenuItem value={"Europe"}>Europe</MenuItem>
            <MenuItem value={"Africa"}>Africa</MenuItem>
            <MenuItem value={"Americas"}>Americas</MenuItem>
            <MenuItem value={"Oceania"}>Oceania</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {filteredCountryList.map((country) => (
          <Link
            key={country.cca3}
            to={`/countries/${country.cca3}`}
            style={{ textDecoration: "none" }}
          >
            <Card key={country.name.common} sx={{ maxWidth: 345, width: 190 }}>
              <CardMedia
                component="img"
                alt={country.name.common}
                height="120"
                image={country.flags.png}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {country.name.common}
                </Typography>
                <Typography gutterBottom variant="p" component="div">
                  Capital : {country.capital}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllCountry;
