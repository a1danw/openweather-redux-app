import React from "react";

export const ButtonComponent = ({ fetchWeather, btnType }) => {
  return (
    <button
      onClick={btnType === "Search" ? fetchWeather : null}
      title="searchBtn"
      type="searchButton"
      className="inline-flex w-full md:w-auto items-center px-3 pr-3 28 text-center py-3 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      {btnType}
    </button>
  );
};
