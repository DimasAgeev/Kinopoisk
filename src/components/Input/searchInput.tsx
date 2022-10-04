import { InputSearchWrapper, InputSearchTag } from "./styledSearchInput";
import { InputType } from "./typesInput";
export function InputSearch({
  label,
  type,
  placeholder,
  ...otherProps
}: InputType) {
  return (
    <InputSearchWrapper>
      <label> {label} </label>
      <InputSearchTag
        type={type}
        placeholder={placeholder}
        {...otherProps}
      ></InputSearchTag>
    </InputSearchWrapper>
  );
}
