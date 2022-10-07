import { createSlice } from "@reduxjs/toolkit";
export const searchSlice = createSlice({
  name: "search",
  initialState: {
    movieName: "day",
  },
  reducers: {
    setMovieName: (state, action) => {
      state.movieName = action.payload;
    },
  },
});
console.log(searchSlice);
export const { reducer: searchReducer, actions: searchAction } = searchSlice;
