import { InputTag, InputWrapper } from "./styledInput";
import { InputType } from "./typesInput";
export function Input({ label, type, placeholder, ...otherProps }: InputType) {
  return (
    <InputWrapper>
      <label> {label} </label>
      <InputTag
        type={type}
        placeholder={placeholder}
        {...otherProps}
      ></InputTag>
    </InputWrapper>
  );
}
