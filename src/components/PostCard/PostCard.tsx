import {
  PostContentContainer,
  PostImage,
  PostFooter,
  PostContentText,
} from "./styledPostCard";
import { NavLink } from "react-router-dom";
import { AppRoute } from "../Enums/roter";
import { MovieType } from "../../Pages/PostCadPages/types";

export function PostCard({ movie }: { movie: MovieType }) {
  return (
    <PostContentContainer>
      <NavLink to={`${AppRoute.Post}/${movie.imdbID}`}>
        <PostImage src={movie.Poster} />
      </NavLink>
      <PostContentText>{movie.Title}</PostContentText>
      <PostFooter>
        {movie.Year}, {movie.Type}
      </PostFooter>
    </PostContentContainer>
  );
}
