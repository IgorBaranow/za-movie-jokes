import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "src/features/movies/moviesSlice"; // this is my slice
import aiJokesReducer from "src/features/ai-jokes/aiJokesSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer, // this is how my reducer will be named inside store
    aiJokes: aiJokesReducer,
  },
});
