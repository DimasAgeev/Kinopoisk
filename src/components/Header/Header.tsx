import { InputSearch } from "../Input/searchInput";
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
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../Redux/store";
import { searchAction } from "../../Redux/Search/search.slice";
export const Header = () => {
  const dispatch = useAppDispatch();
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    const idTimer = setTimeout(
      () => dispatch(searchAction.setMovieName(inputText || "day")),
      1000
    );
    return () => {
      clearTimeout(idTimer);
    };
  }, [inputText]);

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLogoWrapper>
          <HederNavLink title="" to={"/"}>
            <img src={Logo} alt="Logo" />
          </HederNavLink>
        </HeaderLogoWrapper>
        <HeaderNavLinkWrapper>
          <HederNavLink title="Home" to={"/"}></HederNavLink>
          <HederNavLink title="Favorites" to={"/favorites"}></HederNavLink>
          <HederNavLink title="Sign In" to={"/sign_in"}></HederNavLink>
          <HederNavLink title="Sign Up" to={"/sign_up"}></HederNavLink>
        </HeaderNavLinkWrapper>
        <HeaderSearchWrapper>
          <InputSearch
            label=""
            value={inputText}
            type="text"
            placeholder="Поиск"
            onChange={(e) => setInputText(e.target.value)}
          />
        </HeaderSearchWrapper>
        <HeaderUserWrapper></HeaderUserWrapper>
      </HeaderContainer>
    </HeaderWrapper>
  );
};
