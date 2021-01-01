import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import Header from "../components/Header";
import WeatherImage from "../components/WeatherImage";

import City from "../components/City";

function Home() {
  const history = useHistory();
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Crema");

  const [cities, setCities] = useState([
    {
      name: "Jakarta",
      currentTemp: "0",
      color: "bg-yellow-500",
    },
    {
      name: "Bandung",
      currentTemp: "0",
      color: "bg-yellow-500",
    },
    {
      name: "Bogor",
      currentTemp: "0",
      color: "bg-yellow-500",
    },
  ]);

  useEffect(() => {
    // console.log(process.env.REACT_APP_WEATHER_KEY);
    axios // axios is to get data from an API,you can also use axios to put/edit and delete data
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`
      )
      .then(function (response) {
        // ‘promise’ (using .then and .catch)
        // Succesful request
        const weather = response.data;
        setWeatherData(weather);
      })
      .catch(function (error) {
        // The best practice of coding is to not use console.log
        console.warn(error);
      });
  }, [city]); // the [city] is a dependency
  // which u’re always listening to (aka always renewing and getting the last updated data)

  useEffect(() => {
    // useEffect is something that happens when u first open the page
    const searchParams = history.location.search;
    const urlParams = new URLSearchParams(searchParams);
    const city = urlParams.get("city");
    if (city) {
      setCity(city);
    }
  }, [history]);

  const { currentTemp } = useMemo(() => {
    let currentTemp = "";
    if (weatherData) {
      currentTemp = `${Math.round(weatherData.main.temp)}°C`;
    }
    return {
      currentTemp,
    };
  }, [weatherData]);

  console.log("weatherData", weatherData);
  console.log("currentTemp", currentTemp);

  return (
    // Container
    <div className="flex flex-col h-screen bg-green-200">
      {cities.map((item, index) => {
        <City cityName={item.name} item={item.currentTemp}color={item.color}/>;
      )};
    </div>
  );
}

export default Home;
