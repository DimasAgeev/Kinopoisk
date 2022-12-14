import { createSlice } from "@reduxjs/toolkit";
export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [] as Array<string>,
  },
  reducers: {
    addToFavorites: (state, action) => {
      state.favorites = [...state.favorites, action.payload];
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter((id) => id !== action.payload);
    },
  },
});
export const { reducer: favoritesReducer, actions: favoritesAction } =
  favoritesSlice;
