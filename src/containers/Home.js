import React, { useState, useEffect, useMemo } from "react";
// import axios from "axios";
// import { useHistory } from "react-router-dom";

import Header from "../components/Header";
import WeatherImage from "../components/WeatherImage";

import City from "../components/City";

const weatherKey = `TODO`; // Your API Key here

function Home() {
  // TODO
  return (
    // Container
    <div className="flex flex-col h-screen bg-green-200">
      <City cityName={"Milan"} temp={"14°"} color={"bg-yellow-500"} />

      <City cityName={"Paris"} temp={"10°"} color={"bg-pink-500"} />

      <City cityName={"Seoul"} temp={"7°"} color={"bg-purple-500"} />
    </div>
  );
}

export default Home;
