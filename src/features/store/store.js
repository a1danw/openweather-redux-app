import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../slices/weatherSlices";

// configureStore accepts an object of reducers which takes in all the slices
export const store = configureStore({
  reducer: weatherReducer,
});
