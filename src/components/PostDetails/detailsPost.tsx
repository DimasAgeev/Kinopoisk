import {
  DetailsPostContainer,
  DetailsPostImageContainer,
  DetailsPostImage,
  DetailsPostContentWrapper,
  TitleWrapper,
  InfoWrapper,
  YearWrapper,
  YearInfo,
  YearContent,
  ReleasedWrapper,
  ReleasedInfo,
  ReleasedContent,
  RuntimeWrapper,
  RuntimeInfo,
  RuntimeContent,
  BoxOfficeWrapper,
  BoxOfficeInfo,
  BoxOfficeContent,
  GenreWrapper,
  GenreInfo,
  GenreContent,
  RatingsWrapper,
  BtnFavorite,
} from "./styledPostDetails";
import { DetailsPostType } from "./detailsPostType";
import { useParams } from "react-router-dom";
import { getPostDetails } from "../../Api/detailsPost";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../Redux/store";
import { favoritesSelector } from "../../Redux/Favorites/favorites.selector";
import { favoritesAction } from "../../Redux/Favorites/favorites.slice";

export function DetailsPost() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState<DetailsPostType>();
  const dispatch = useAppDispatch();
  const favoritesMovies = useSelector(favoritesSelector);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  useEffect(() => {
    getPostDetails(movieId).then(({ data }) => {
      setMovie(data);
    });
  }, []);

  useEffect(() => {
    if (movieId) {
      setIsFavorite(+favoritesMovies.indexOf(movieId) >= 0);
    }
  }, [favoritesMovies]);

  return (
    <DetailsPostContainer>
      <DetailsPostImageContainer>
        <DetailsPostImage src={movie?.Poster} />
        <BtnFavorite
          isFavorite={isFavorite}
          title="Add to favorites"
          onClick={() => {
            isFavorite
              ? dispatch(favoritesAction.removeFromFavorites(movieId))
              : dispatch(favoritesAction.addToFavorites(movieId));
          }}
        >
          {" "}
        </BtnFavorite>
      </DetailsPostImageContainer>
      <DetailsPostContentWrapper>
        <TitleWrapper>{`${movie?.Title}${""}${"("}${
          movie?.Year
        }${")"}`}</TitleWrapper>
        <InfoWrapper>
          <YearWrapper>
            <YearInfo>Year:</YearInfo>
            <YearContent>{movie?.Year}</YearContent>
          </YearWrapper>
          <ReleasedWrapper>
            <ReleasedInfo>Released:</ReleasedInfo>
            <ReleasedContent>{movie?.Released}</ReleasedContent>
          </ReleasedWrapper>
          <RuntimeWrapper>
            {" "}
            <RuntimeInfo>Runtime:</RuntimeInfo>{" "}
            <RuntimeContent>{movie?.Runtime}</RuntimeContent>{" "}
          </RuntimeWrapper>
          <BoxOfficeWrapper>
            <BoxOfficeInfo>BoxOffice:</BoxOfficeInfo>
            <BoxOfficeContent>{movie?.BoxOffice}</BoxOfficeContent>
          </BoxOfficeWrapper>
          <RatingsWrapper>{movie?.imdbRating}</RatingsWrapper>
        </InfoWrapper>
        <GenreWrapper>
          <GenreInfo>Gener:</GenreInfo>
          <GenreContent>{movie?.Genre}</GenreContent>
        </GenreWrapper>
        <GenreWrapper>
          <GenreInfo>Country:</GenreInfo>
          <GenreContent>{movie?.Country}</GenreContent>
        </GenreWrapper>
        <GenreWrapper>
          <GenreInfo>Actors:</GenreInfo>
          <GenreContent>{movie?.Actors}</GenreContent>
        </GenreWrapper>
        <GenreWrapper>
          <GenreInfo>Director:</GenreInfo>
          <GenreContent>{movie?.Director}</GenreContent>
        </GenreWrapper>
        <GenreWrapper>
          <GenreInfo>Writer:</GenreInfo>
          <GenreContent>{movie?.Writer}</GenreContent>
        </GenreWrapper>
        <GenreWrapper>
          <GenreInfo>Plot:</GenreInfo>
          <GenreContent>{movie?.Plot}</GenreContent>
        </GenreWrapper>
      </DetailsPostContentWrapper>
    </DetailsPostContainer>
  );
}
