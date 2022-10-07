import { PostCard } from "../../components/PostCard/PostCard";
import { PostsContainer } from "../../components/PostCard/styledPostCard";
import { CreatePost } from "../../Api/createPost";
import { MovieType } from "./types";
import { useEffect, useState } from "react";
import { searchSelector } from "../../Redux/Search/search.selector";
import { useSelector } from "react-redux";
export const PostCardPage = () => {
  const [movies, setMovies] = useState<MovieType[]>([
    { Poster: "", Title: "", Type: "", Year: "", imdbID: "" },
  ]);
  const movieName = useSelector(searchSelector).trim();

  useEffect(() => {
    if (movieName) {
      CreatePost(movieName).then((response) => {
        setMovies(response.data["Search"] || []);
      });
    }
  }, [movieName]);

  return (
    <PostsContainer>
      {movies.map((el) => (
        <PostCard key={el.imdbID} movie={el} />
      ))}
    </PostsContainer>
  );
};
