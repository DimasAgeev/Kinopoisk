import {
  FormWrapper,
  LoginWrapper,
  Text,
} from "./styledLoginAndRegistrationPage";
import { LogoPageWrapper, SectionInformation } from "../Pages/styledSection";
import { Container } from "../Pages/styledContainer";
import { Btn } from "../components/Button/Btn";
import { Input } from "../components/Input/Input";
import { HederLink } from "../components/Links/Link";
import Logo from "../components/Images/Logo.svg";
import { useState } from "react";
import { registerUser } from "../Api/authorization";

export function RegistrationPage(): JSX.Element {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
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
            <Text>Sign up</Text>
            <Input
              value={formData.username}
              onChange={({ currentTarget }) => {
                setFormData((prevState) => ({
                  ...prevState,
                  username: currentTarget.value,
                }));
              }}
              label="Name"
              type="text"
              placeholder="Your name"
            />
            <Input
              value={formData.email}
              onChange={({ currentTarget }) => {
                setFormData((prevState) => ({
                  ...prevState,
                  email: currentTarget.value,
                }));
              }}
              label="Email"
              type="email"
              placeholder="You email"
            />
            <Input
              value={formData.password}
              onChange={({ currentTarget }) => {
                setFormData((prevState) => ({
                  ...prevState,
                  password: currentTarget.value,
                }));
              }}
              label="Password"
              type="password"
              placeholder="Password"
            />
            <Input
              value={formData.confirmPassword}
              onChange={({ currentTarget }) => {
                setFormData((prevState) => ({
                  ...prevState,
                  confirmPassword: currentTarget.value,
                }));
              }}
              label="Confirm password"
              type="password"
              placeholder="Confirm password"
            />
            <Btn
              onClick={() =>
                registerUser({
                  username: formData.username,
                  email: formData.email,
                  password: formData.password,
                })
              }
              title="Sign up"
            ></Btn>
            <HederLink
              title="Already have an account? Sign in"
              to={"/sign_in"}
            ></HederLink>
          </FormWrapper>
        </LoginWrapper>
      </Container>
    </SectionInformation>
  );
}
