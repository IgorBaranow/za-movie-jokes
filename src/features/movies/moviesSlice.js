import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPopularMovies } from "./api";

const initialState = {
  movies: [],
  status: "idle", // 'idle' / 'loading' / 'succeeded' / 'failed'
  error: null,
};

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const data = await fetchPopularMovies();

  return data.data;
});

const movieSlice = createSlice({
  name: "movies",
  initialState: data.results,
  reducers: {},
});

export const selectAllMovies = (state) => state.movies;
export const selectMovieById = (state, movieId) =>
  state.movies.movies.find((movie) => movie.id === Number(movieId));

export default moviesSlice.reducer;
