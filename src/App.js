import React, { useState, useEffect } from "react";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

import covidlogo from "./images/covidlogo.png";

const App = () => {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("");

  useEffect(() => {
    const fetchedAPI = async () => {
      const fetchedData = await fetchData();
      setData(fetchedData);
    };
    fetchedAPI();
  }, []);

  const handleCountryChange = async (country) => {
    // fetch the data
    const fetchedData = await fetchData(country);
    // set the state
    setData(fetchedData);
    setCountry(country);
  };

  return (
    <div className={styles.container}>
      <img className={styles.image} src={covidlogo} alt="Covid 19" />
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
  );
};

export default App;
