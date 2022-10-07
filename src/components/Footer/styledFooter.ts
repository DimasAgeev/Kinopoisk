import styled from "@emotion/styled";
import { MAX_CONTENT_WIDTH } from "../../layouts/styledMainLayouts";
export const FooterWrapper = styled.footer`
  display: flex;
  background-color: black;
  opacity: 0.96;
  border-bottom: solid 0.5px grey;
  position: relative;
`;
export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: calc(${MAX_CONTENT_WIDTH}px + 80px);
  padding: 0 15px;
  gap: 1.6875rem;
  justify-content: space-between;
  color: white;
  align-items: center;
  margin: auto;
  min-height: 100%;
  width: 100%;
`;
export const FooterMenuWrapper = styled.div`
  display: flex;
  padding: 1rem 0;
  width: 100%;
  justify-content: space-between;
  gap: 3rem;
  ::after {
    content: "";
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 0.5px;
    opacity: 0.2;
    background-color: grey;
  }
`;
export const FooterSocialMediaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  width: 100%;
  position: relative;
  ::after {
    content: "";
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 0.5px;
    opacity: 0.2;
    background-color: grey;
  }
`;
export const FooterLogo = styled.div`
  display: flex;
  padding-right: 0.9375rem;
`;
export const FooterMenu = styled.div`
  display: flex;
  justify-content: start;
  gap: 1rem;
  flex-direction: column;
  position: relative;
  ::after {
    content: "";
    position: absolute;
    top: 0%;
    left: -80%;
    width: 0.5px;
    height: 100%;
    opacity: 0.2;
    background-color: grey;
  }
  ::before {
    content: "";
    position: absolute;
    top: 0%;
    right: -80%;
    width: 0.5px;
    height: 100%;
    opacity: 0.2;
    background-color: grey;
  }
`;
export const FooterAboutAs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 1rem;
  max-width: 60%;
  font-size: 16px;
  font-weight: 400;
  padding-left: 0.9375rem;
`;
export const FooterProtection = styled.div`
  align-items: center;
  padding-right: 1rem;
`;
export const FooterMedia = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  svg:hover {
    fill: red;
  }
`;
export const FooterСonfidential = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1rem;
`;
