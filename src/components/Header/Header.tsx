import { InputSearch } from "../Input/searchInput";
import { HederLink } from "../Links/Link";
import { HederNavLink } from "../Links/NavLinks";
import Logo from "../Images/Logo.svg";
import {
  HeaderContainer,
  HeaderLogoWrapper,
  HeaderNavLinkWrapper,
  HeaderSearchWrapper,
  HeaderUserWrapper,
  HeaderWrapper,
} from "./styledHeader";
export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLogoWrapper>
          <HederLink title="" to={"/"}>
            <img src={Logo} alt="Logo" />
          </HederLink>
        </HeaderLogoWrapper>
        <HeaderNavLinkWrapper>
          <HederNavLink title="Home" to={"/"}></HederNavLink>
          <HederNavLink title="Sign In" to={"/sign_in"}></HederNavLink>
          <HederNavLink title="Sign Up" to={"/sign_up"}></HederNavLink>
          {/* <HederNavLink
            title="Favorites"
            to={"/activate/:uid/:token"}
          ></HederNavLink> */}
        </HeaderNavLinkWrapper>
        <HeaderSearchWrapper>
          <InputSearch label="" type="text" placeholder="Поиск по сайту" />
        </HeaderSearchWrapper>
        <HeaderUserWrapper></HeaderUserWrapper>
      </HeaderContainer>
    </HeaderWrapper>
  );
};
