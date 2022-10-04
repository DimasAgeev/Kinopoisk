import axios from "axios";
import {
  ErrorWrapper,
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

import { useEffect, useState } from "react";
import { getTokens, LocalStorage } from "../Api/getTokens";
import { useNavigate } from "react-router-dom";
import { AppRoute } from "../components/Enums/roter";
export const authAxiosInstance = axios.create();
export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("Емейл не может быть пустым");
  const [passwordError, setPasswordError] = useState(
    "Пароль не может быть пустым"
  );
  const navigate = useNavigate();
  const [formValid, setFormValid] = useState(false);
  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);
  const emailHandler = (e: any) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLocaleLowerCase())) {
      setEmailError(`Некорректный емейл`);
    } else {
      setEmailError(``);
    }
  };
  const passwordHandler = (e: any) => {
    setPassword(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 20) {
      setPasswordError("Пароль должен быть длиннее 3 и меньше 20 символов");
      if (!e.target.value) {
        setPasswordError("Пароль не может быть пустым");
      }
    } else {
      setPasswordError("");
    }
  };

  const blurHandler = (e: any) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };
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
            <Text>Sign in</Text>
            {emailDirty && emailError && (
              <ErrorWrapper>{emailError}</ErrorWrapper>
            )}
            <Input
              onChange={(e) => emailHandler(e)}
              onBlur={(e) => blurHandler(e)}
              value={email}
              name="email"
              label="Email"
              type="email"
              placeholder="Your email"
            />
            {passwordDirty && passwordError && (
              <ErrorWrapper>{passwordError}</ErrorWrapper>
            )}
            <Input
              onChange={(e) => passwordHandler(e)}
              onBlur={(e) => blurHandler(e)}
              value={password}
              name="password"
              label="Password"
              type="password"
              placeholder="Password"
            />
            <HederLink
              title="Forgot your passvord?"
              to={"/resetPassword"}
            ></HederLink>
            <Btn
              disabled={!formValid}
              title="Sign in"
              onClick={() =>
                getTokens({ email: email, password: password }).then(() => {
                  authAxiosInstance.interceptors.request.use(
                    (requestConfigArgs) => {
                      const requestConfig = requestConfigArgs;
                      const accessToken = localStorage.getItem(
                        LocalStorage.AccessToken
                      );
                      requestConfig.headers = requestConfig.headers || {};

                      if (accessToken) {
                        requestConfig.headers.Authorization = `Bearer ${accessToken}`;
                      }
                      return requestConfig;
                    }
                  );
                  authAxiosInstance
                    .get(`https://studapi.teachmeskills.by//auth/users/me/`)
                    .then((response) => {
                      navigate(AppRoute.Main);
                      console.log(response.data);
                    });
                })
              }
            ></Btn>
            <HederLink
              title="Don't have an account? Sign up"
              to={"/sign_up"}
            ></HederLink>
          </FormWrapper>
        </LoginWrapper>
      </Container>
    </SectionInformation>
  );
};
