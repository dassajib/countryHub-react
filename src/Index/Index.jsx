import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Components/Home/Home";
import CountryDetails from "../Components/CountryDetails/CountryDetails";
import AllCountry from "../Components/AllCountry/AllCountry";
import Header from "../Components/Header/Header";

const Index = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/countries" element={<AllCountry />} />
        <Route path="/countries/:countryId" element={<CountryDetails />} />
        <Route path="*" element={<h2>Page is not found</h2>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
