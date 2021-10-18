import React, { useEffect } from "react";
import { fetchWeatherAction } from "../features/slices/weatherSlices";
import { ErrorMessage } from "../components/ErrorMessage";
import { useAppDispatch, useAppSelector } from "../features/hooks/redux-hooks";

import { Header } from "../components/Header";
import { Spinner } from "../components/Spinner";
import { Button } from "../components/Button";

function Home() {
  // select state from store
  const state = useAppSelector((state) => state);
  const { weather, loading, error } = state;

  // dispatch action
  const dispatch = useAppDispatch();

  // dispatch the action on mount - pass in the fetchWeatherAction which takes in a city
  useEffect(() => {
    dispatch(fetchWeatherAction("Newcastle Upon Tyne"));
  }, []);

  return (
    <div>
      <section className="relative bg-gray-900  min-h-screen">
        <div className="relative container pt-6 px-4 mb-10 mx-auto text-center">
          <Header />
        </div>
        {/* Body content */}
        {loading ? (
          <Spinner />
        ) : error ? (
          <ErrorMessage />
        ) : (
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-wrap -mx-4 justify-center">
              <div className="w-full md:w-1/2 px-4">
                <div className="p-8 border border-blue-800 rounded-lg">
                  <div className="flex justify-start  items-center">
                    <span className="flex items-center justify-center w-16 h-16 rounded-full border-2">
                      {/* weather logo */}
                      <img
                        className="w-56"
                        src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
                        alt="/"
                      />
                    </span>
                    <h1 className="text-gray-300 pl-5">
                      {weather?.weather[0].main}
                    </h1>{" "}
                  </div>
                  <h1 className="text-gray-300 text-center text-4xl mb-10">
                    {/* convert decimal to full number */}
                    {Math.ceil(Number(weather?.main.temp))}{" "}
                    <span className="text-yellow-500 text-4xl">°C</span>
                  </h1>
                  <h3 className="mb-6 text-xl text-white font-semibold">
                    {weather?.name}, {weather?.sys?.country}
                    &nbsp; &nbsp;
                    <Button btnType="Add to favourites" />
                  </h3>

                  <p className="mb-8 text-gray-300">
                    The weather condition in {weather?.name},{" "}
                    {weather?.sys?.country} is described as :{" "}
                    {weather?.weather[0].description} with a temperature of{" "}
                    {Math.ceil(Number(weather?.main.temp))} °C and a humidity of{" "}
                    {weather?.main?.humidity} % .
                  </p>
                  <div
                    className="ml-auto flex items-center justify-center w-20 h-20 rounded-full text-white"
                    href="#"
                  >
                    <span className="flex items-center justify-center w-16 h-16 rounded-full border-2">
                      {/* weather logo */}
                      <img
                        className="w-56 "
                        src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`}
                        alt="/"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default Home;
