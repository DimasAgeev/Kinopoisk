import styled from "@emotion/styled";
export const PostsContainer = styled.div`
  display: flex;
  max-width: 100%;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  color: white;
  overflow: auto;
`;
export const PostContentContainer = styled.div`
  position: relative;
  width: 14rem;
`;
export const PostImage = styled.img`
  max-height: 23.8125rem;
  width: 100%;
  margin: auto;
  border-radius: 0.5rem;
  object-fit: cover;
  position: relative;
`;
export const PostContentText = styled.p`
  font-size: 1rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 100%;
`;
export const PostFooter = styled.div`
  display: flex;
  font-size: 0.9rem;
  justify-content: start;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  max-width: 100%;
  color: red;
`;
