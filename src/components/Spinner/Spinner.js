import React from "react";

export const SpinnerComponent = () => {
  return (
    <div className=" flex justify-center items-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-300"></div>
    </div>
  );
};
