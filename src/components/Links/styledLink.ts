import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
export const Linkstyled = styled(NavLink)`
  font-size: 18px;
  font-weight: 400;
  color: green;
  text-decoration: none;
  position: relative;
  :hover {
    color: red;
    transition: 0.3s;
  }
`;
