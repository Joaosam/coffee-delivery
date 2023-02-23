import { forwardRef, InputHTMLAttributes } from "react";
import { InputStyledContainer } from "./styled";

type InputFormProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

export const InputForm = forwardRef<HTMLInputElement, InputFormProps>(
  ({ error, ...props }, ref) => (
    <InputStyledContainer error={!!error} ref={ref} {...props} />
  )
);
