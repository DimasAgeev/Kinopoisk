import styled from "@emotion/styled";
export const MAX_CONTENT_WIDTH = 1300;
export const HEADER_HEIGHT = 120;

export const PageContainer = styled.main`
  min-height: 100vh;
  display: flex;
  padding-top: ${HEADER_HEIGHT}px;
  width: 100%;
  margin: auto;
  background-color: black;
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 4.5rem 15px;
  max-width: calc(${MAX_CONTENT_WIDTH}px + 80px);
  margin: auto;
  min-height: 100%;
  width: 100%;
`;
