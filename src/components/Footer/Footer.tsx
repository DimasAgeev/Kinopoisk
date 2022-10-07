import { ReactComponent as Facebook } from "../Images/Facebook.svg";
import { ReactComponent as Insta } from "../Images/Insta.svg";
import { ReactComponent as Vk } from "../Images/Vk.svg";
import Logo from "../Images/Logo.svg";
import { HederNavLink } from "../Links/NavLinks";
import {
  FooterAboutAs,
  FooterContainer,
  FooterLogo,
  FooterMedia,
  FooterMenu,
  FooterMenuWrapper,
  FooterProtection,
  FooterSocialMediaWrapper,
  FooterWrapper,
  FooterСonfidential,
} from "./styledFooter";
import { HederLink } from "../Links/Link";

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterMenuWrapper>
          <FooterLogo>
            <HederLink title="" to={"/"}>
              <img src={Logo} alt="Logo" />
            </HederLink>
          </FooterLogo>
          <FooterMenu>
            <HederNavLink title="Home" to={"/"}></HederNavLink>
            <HederNavLink title="Favorites" to={"/favorites"}></HederNavLink>
            <HederNavLink title="Sign In" to={"/sign_in"}></HederNavLink>
            <HederNavLink title="Sign Up" to={"sign_up"}></HederNavLink>
          </FooterMenu>
          <FooterAboutAs>
            <HederNavLink title="About Us" to={"/sign_in"}></HederNavLink>
            <p>
              Зная всё о кино, хочется поделиться этим с другими. Делитесь
              фильмами, трейлерами, персонами и новостями в социальных сетях,
              присваивайте рейтинги фильмам и обсуждайте их с друзьями и
              подписчиками!
            </p>
            <p>
              Интересные фильмы, ближайшие кинотеатры и любимых актеров можно
              добавлять в «Избранное». Система покажет все связанные с ними
              новости и новые трейлеры, подскажет, когда можно купить билет в
              кино на интересующую премьеру. Присоединяйтесь!
            </p>
          </FooterAboutAs>
        </FooterMenuWrapper>
        <FooterSocialMediaWrapper>
          <FooterProtection>
            <p>© Все права защищены MovieDB.by 2022</p>
          </FooterProtection>
          <FooterMedia>
            <a href="https://Facebook.com">
              <Facebook />
            </a>
            <a href="https://Instagram.com">
              <Insta />
            </a>
            <a href="https://Vk.com">
              <Vk />
            </a>
          </FooterMedia>
          <FooterСonfidential>
            <HederLink
              title="Политика конфиндециальности"
              to={"Confedential"}
            ></HederLink>
          </FooterСonfidential>
        </FooterSocialMediaWrapper>
      </FooterContainer>
    </FooterWrapper>
  );
};
