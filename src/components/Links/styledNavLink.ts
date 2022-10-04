import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
export const NavLinkstyled = styled(NavLink)`
  font-size: 1.125rem;
  font-weight: 400;
  color: white;
  text-decoration: none;
  position: relative;
  :active {
    color: red;
  }
  :hover {
    color: red;
    transition: 0.3s;
  }
`;
