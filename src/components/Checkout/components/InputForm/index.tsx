import { InputHTMLAttributes } from "react";
import { InputStyledContainer } from "./styled";

type InputFormProps = InputHTMLAttributes<HTMLInputElement>;

export function InputForm({ ...props }: InputFormProps) {
  return <InputStyledContainer {...props} />;
}
