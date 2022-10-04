import { JsxElement } from "typescript";
import { ButtonWrapper } from "./styledButton";
import { Buttons } from "./typesButton";
export function Btn({ title, width = "100%", ...otherProps }: Buttons) {
  return (
    <ButtonWrapper width={width} {...otherProps}>
      {title}
    </ButtonWrapper>
  );
}
