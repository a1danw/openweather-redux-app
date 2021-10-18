import React from "react";

export const HeaderTextComponent = ({ headerTitle, headerSubTitle }) => {
  return (
    <>
      <h2 className="mt-8 mb-8 lg:mb-12 text-white text-4xl lg:text-6xl font-semibold">
        {headerTitle}
      </h2>

      <div className="max-w-3xl mx-auto lg:mb-12 text-white text-xl opacity-50">
        {headerSubTitle}
      </div>
    </>
  );
};
