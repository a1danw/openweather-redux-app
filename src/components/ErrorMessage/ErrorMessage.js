import React from "react";
import { useSelector } from "react-redux";

export const ErrorMessageComponent = () => {
  const { error } = useSelector((state) => state);

  return (
    <h1 className="text-red-400 text-2xl text-center">{error?.message}</h1>
  );
};
