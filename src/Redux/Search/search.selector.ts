import { State } from "../store";

export const searchSelector = (state: State): State["search"]["movieName"] =>
  state.search.movieName;
