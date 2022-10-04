import styled from "@emotion/styled";
import {
  HEADER_HEIGHT,
  MAX_CONTENT_WIDTH,
} from "../../layouts/styledMainLayouts";

export const HeaderWrapper = styled.header`
  display: flex;
  background-color: black;
  height: ${HEADER_HEIGHT}px;
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  ::after {
    content: "";
    position: absolute;
    bottom: 0%;
    left: 0%;
    width: 100vw;
    height: 0.5px;
    opacity: 0.2;
    background-color: grey;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  max-width: calc(${MAX_CONTENT_WIDTH}px + 80px);
  padding: 0 15px;
  gap: 3rem;
  justify-content: space-between;
  color: white;
  align-items: center;
  margin: auto;
  min-height: 100%;
  width: 100%;
`;
export const HeaderLogoWrapper = styled.div`
  align-items: center;
`;
export const HeaderNavLinkWrapper = styled.div`
  display: flex;
  gap: 1.6875rem;
  align-items: center;
`;
export const HeaderSearchWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;
export const HeaderUserWrapper = styled.div`
  align-items: center;
`;
