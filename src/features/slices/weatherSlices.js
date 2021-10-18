import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// using createAsyncThunk which takes in an action type and anonymous function (to call the api) as args
// the payload is the city name which is sent to the openweatherapi - aditional data that it accepts to send the request

// createAsyncThunk gives us 3 props:
// rejectWithValue - display and handles a user friendly error
// getState - gets access to the state in the store
// dispatch - dispatches an action from the anonymous function

// Action
export const fetchWeatherAction = createAsyncThunk(
  "weather/fetch",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=${process.env.REACT_APP_OPEN_WEATHER_API}`
      );
      return data;
    } catch (error) {
      // send an error message to the user if something goes wrong
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

// Slices - a neat way of seperating the state
// A slice automatically generates action creators and actions in the reducer

const weatherSlice = createSlice({
  name: "weather",
  initialState: {},
  // handles the actions - the extra reducers automatically handle pending, fulfilled, rejected
  extraReducers: (builder) => {
    // pending
    builder.addCase(fetchWeatherAction.pending, (state, action) => {
      state.loading = true;
    });
    // fulfilled
    builder.addCase(fetchWeatherAction.fulfilled, (state, action) => {
      // action && action.payload
      state.weather = action?.payload;
      state.loading = false;
      state.error = undefined;
    });
    // rejected
    builder.addCase(fetchWeatherAction.rejected, (state, action) => {
      // clearing all the state when theres an error
      state.loading = false;
      state.weather = undefined;
      state.error = action?.payload;
    });
  },
});

// in the store the reducer is mapped to the store(importing the reducer slice in store)
export default weatherSlice.reducer;
