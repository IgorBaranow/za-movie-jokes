import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "src/features/movies/moviesSlice"; // this is my slice

export const store = configureStore({
  reducer: {
    movies: moviesReducer, // this is how my reducer will be named inside store
  },
});
