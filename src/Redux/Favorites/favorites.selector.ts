import { State } from "../store";

export const favoritesSelector = (
  state: State
): State["favorites"]["favorites"] => state.favorites.favorites;
