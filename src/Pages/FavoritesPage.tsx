import { PostCard } from "../components/PostCard/PostCard";
import { PostsContainer } from "../components/PostCard/styledPostCard";
import { useEffect, useState } from "react";
import { favoritesSelector } from "../Redux/Favorites/favorites.selector";
import { useSelector } from "react-redux";
import { DetailsPostType } from "../components/PostDetails/detailsPostType";
import { getPostDetails } from "../Api/detailsPost";

export function FavouriteMoviesPage(): JSX.Element {
  const movieIdList = useSelector(favoritesSelector);
  const [favouriteMovies, setFavouriteMovies] = useState<DetailsPostType[]>([]);

  useEffect(() => {
    movieIdList.map((id) => {
      getPostDetails(id).then((response) => {
        setFavouriteMovies((prev) => [...prev, response.data]);
      });
    });
  }, [movieIdList]);

  return (
    <>
      {movieIdList.length ? (
        <PostsContainer>
          {favouriteMovies.map((movie) => (
            <PostCard key={`${movie.imdbID}fav`} movie={movie} />
          ))}
        </PostsContainer>
      ) : null}
    </>
  );
}
