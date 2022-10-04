import {
  FormWrapper,
  LoginWrapper,
  Text,
} from "./styledLoginAndRegistrationPage";
import { LogoPageWrapper, SectionInformation } from "./styledSection";
import { Container } from "./styledContainer";
import { Btn } from "../components/Button/Btn";
import { Input } from "../components/Input/Input";
import { HederLink } from "../components/Links/Link";
import Logo from "../components/Images/Logo.svg";
export const ResetPasswor = () => {
  return (
    <SectionInformation>
      <Container>
        <LogoPageWrapper>
          <HederLink title="" to={"/"}>
            <img src={Logo} alt="Logo" />
          </HederLink>
        </LogoPageWrapper>
        <LoginWrapper>
          <FormWrapper>
            <Text>Resset password</Text>
            <Input label="Email" type="email" placeholder="You email" />
            <Btn title="Reset"></Btn>
          </FormWrapper>
        </LoginWrapper>
      </Container>
    </SectionInformation>
  );
};
