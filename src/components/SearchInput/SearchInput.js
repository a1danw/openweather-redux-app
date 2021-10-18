import React from "react";

export const SearchInputComponent = ({ searchCity, city }) => {
  return (
    <>
      <input
        type="text"
        title="searchInput"
        value={city}
        onChange={searchCity}
        placeholder="Search City"
        className="relative z-10 inline-block w-full md:w-auto mb-2  px-3 py-2 mr-4 mt-4  font-medium leading-normal bg-transparent border-2 rounded-lg text-green-400"
      ></input>
    </>
  );
};
