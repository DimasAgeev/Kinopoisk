import styled from "@emotion/styled";
export const ButtonWrapper = styled.button<{ width: string }>`
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 1rem 0;
  background-color: #7b61ff;
  border-radius: 0.625rem;
  border: none;
  color: white;
  width: ${(props) => {
    return props.width;
  }};
  &:disabled {
    background-color: grey;
  }
`;
