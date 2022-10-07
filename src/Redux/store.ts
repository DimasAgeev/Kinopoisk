import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { searchReducer } from "./Search/search.slice";
import { favoritesReducer } from "./Favorites/favorites.slice";
export const rootStore = configureStore({
  reducer: {
    search: searchReducer,
    favorites: favoritesReducer,
  },
});

export type State = ReturnType<typeof rootStore.getState>;
export type AppDispatch = typeof rootStore.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
