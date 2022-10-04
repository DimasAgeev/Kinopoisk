import styled from "@emotion/styled";
export const DetailsPostContainer = styled.div`
  display: flex;
  max-width: 100%;
  gap: 2rem;
  justify-content: start;
  position: relative;
  color: white;
  overflow: auto;
`;
export const DetailsPostImageContainer = styled.div`
  position: relative;
  width: 26.75rem;
  margin-bottom: 4rem;
`;
export const DetailsPostImage = styled.img`
  max-height: 41.625rem;
  width: 100%;
  margin: auto;
  border-radius: 0.5rem;
  object-fit: cover;
  position: relative;
`;
export const DetailsPostContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  max-width: 45%;
`;
export const TitleWrapper = styled.div`
  display: flex;
  font-size: 2rem;
  line-height: 2.93rem;
  justify-content: start;
  margin-bottom: 1rem;
`;
export const InfoWrapper = styled.div`
  display: flex;
  background-color: black;
  opacity: 0.8;
  border: solid 0.2px;
  border-color: grey;
  border-radius: 5px;
  justify-content: space-between;
  padding: 0.5rem;
  margin-bottom: 1rem;
`;
export const YearWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const YearInfo = styled.div`
  display: flex;
  font-size: 1.2rem;
`;
export const YearContent = styled.div`
  display: flex;
  font-size: 1rem;
  justify-content: center;
  font-weight: 700;
  color: red;
`;
export const ReleasedWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ReleasedInfo = styled.div`
  display: flex;
  font-size: 1.2rem;
`;
export const ReleasedContent = styled.div`
  display: flex;
  font-size: 1rem;
  font-weight: 700;
  justify-content: center;
  color: red;
`;
export const RuntimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const RuntimeInfo = styled.div`
  display: flex;
  font-size: 1.2rem;
`;
export const RuntimeContent = styled.div`
  display: flex;
  font-size: 1rem;
  font-weight: 700;
  justify-content: center;
  color: red;
`;
export const BoxOfficeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const BoxOfficeInfo = styled.div`
  display: flex;
  font-size: 1.2rem;
`;
export const BoxOfficeContent = styled.div`
  display: flex;
  font-weight: 700;
  font-size: 1rem;
  color: red;
  justify-content: center;
`;
export const RatingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 2px white;
  border-radius: 3rem;
  background-color: black;
  padding: 0.8rem;
  font-size: 1.2rem;
  font-weight: 700;
  color: red;
`;

export const GenreWrapper = styled.div`
  display: flex;
  background-color: black;
  opacity: 0.8;
  border-bottom: solid 0.2px;
  border-color: grey;
  max-width: 100%;
  padding-top: 1rem;
  gap: 1rem;
`;
export const GenreInfo = styled.div`
  font-size: 1.2rem;
`;
export const GenreContent = styled.div`
  font-size: 1rem;
  color: grey;
`;
