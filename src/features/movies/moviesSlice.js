import { createSlice } from "@reduxjs/toolkit";
import { data } from "./data";

const movieSlice = createSlice({
  name: "movies",
  initialState: data.results,
  reducers: {},
});

export default movieSlice.reducer;
