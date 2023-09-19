import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CountryDetails = () => {
    
  const { countryId } = useParams();
  const [countryDetails, setCountryDetails] = useState([]);

  useEffect(() => {
    const url = `https://restcountries.com/v3.1/alpha/${countryId}`;
    axios.get(url).then((res) => setCountryDetails(res.data));
  }, [countryId]);

  return (
    <div>
      {countryDetails.map((country) => (
        <div>
          <div>
            <img src={country.flags.png} alt="" />
          </div>
          <div>
            <p>Capital: {country.capital}</p>
            <p>Region: {country.region}</p>
            <p>Area: {country.area} Square KM</p>
            <p>Population: {country.population}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryDetails;
