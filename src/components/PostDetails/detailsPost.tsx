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
} from "./styledPostDetails";
import { DetailsPostType } from "./detailsPostType";
import { useParams } from "react-router-dom";
import { getPostDetails } from "../../Api/detailsPost";
import { useState } from "react";
export function DetailsPost() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState<DetailsPostType>();
  getPostDetails(movieId).then(({ data }) => {
    setMovie(data);
  });

  return (
    <DetailsPostContainer>
      <DetailsPostImageContainer>
        <DetailsPostImage src={movie?.Poster} />
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
