import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ActivateUser } from "../Api/activation";
import { HederLink } from "../components/Links/Link";
import { Container } from "./styledContainer";
import { Text } from "./styledLoginAndRegistrationPage";
import { SectionInformation } from "./styledSection";
export function ActivationAccount(): JSX.Element {
  const { uid, token } = useParams<{ uid: string; token: string }>();
  const [isActivated, setIsActivated] = useState<boolean>(false);

  useEffect(() => {
    if (uid && token) {
      ActivateUser({ uid: uid, token: token }).then((response) => {
        setIsActivated(true);
        console.log(response.data);
      });
    }
  }, [uid, token]);
  return (
    <SectionInformation>
      <Container>
        {isActivated ? (
          <>
            <Text>Accoun is successfully activated</Text>
            <HederLink title="Sign in!" to={"/activate"}></HederLink>
          </>
        ) : (
          <>
            <Text>The account is not activated</Text>
            <HederLink title="Home" to={"/"}></HederLink>
          </>
        )}
      </Container>
    </SectionInformation>
  );
}
