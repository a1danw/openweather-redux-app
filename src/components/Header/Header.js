import React, { useState } from "react";
import { useAppDispatch } from "../../features/hooks/redux-hooks";
import { fetchWeatherAction } from "../../features/slices/weatherSlices";
import openWeatherImg from "../../assets/img/open-weather-img.png";

import { SearchInput } from "../SearchInput";
import { HeaderText } from "../HeaderText";
import { Button } from "../Button";

export const HeaderComponent = () => {
  const [city, setCity] = useState("");
  // dispatch action
  const dispatch = useAppDispatch();

  const fetchWeather = () => {
    dispatch(fetchWeatherAction(city));
    setCity("");
  };

  const searchCity = (e) => {
    setCity(e.target.value);
  };

  return (
    <header>
      <img
        className="w-56 lg:block lg:absolute top-0 left-0 px-4 pt-10"
        src={openWeatherImg}
        alt="/"
      />
      <HeaderText
        headerTitle="Open Weather API"
        headerSubTitle="Search for live weather updates around the world"
      />
      <SearchInput searchCity={searchCity} city={city} />
      <Button fetchWeather={fetchWeather} btnType="Search">
        Search
      </Button>
    </header>
  );
};
