import styled from "@emotion/styled";
import Rectangle from "../components/Images/batman.jpg";
import Batman from "../components/Images/[Originals]/batman.jpg";
import Joker from "../components/Images/joker.jpg";
export const Section = styled.section`
  display: flex;
  margin-top: 110px;
  background: url(${Rectangle});
  background-color: black;
  max-height: 100vh;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: auto;
`;
export const SectionInformation = styled.section`
  display: flex;
  position: relative;
  background: url(${Batman});
  background-color: black;
  height: 100vh;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: auto;
`;
export const SectionLogin = styled.section`
  display: flex;
  position: relative;
  background: url(${Joker});
  background-color: black;
  height: 100vh;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: auto;
`;
export const LogoPageWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 1rem;
  left: 1rem;
`;
