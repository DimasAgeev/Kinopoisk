import { PostCard } from "../../components/PostCard/PostCard";
import { PostsContainer } from "../../components/PostCard/styledPostCard";
import { CreatePost } from "../../Api/createPost";

import { MovieType } from "./types";
import { useEffect, useState } from "react";

export const PostCardPage = () => {
  const [movies, setMovies] = useState<MovieType[]>([
    { Poster: "", Title: "", Type: "", Year: "", imdbID: "" },
  ]);
  useEffect(() => {
    CreatePost().then((response) => {
      setMovies(response.data["Search"]);
      console.log(response.data);
    });
  }, []);

  return (
    <PostsContainer>
      {movies.map((el) => (
        <PostCard key={el.imdbID} movie={el} />
      ))}
    </PostsContainer>
  );
};
