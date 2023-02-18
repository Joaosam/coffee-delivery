import { forwardRef, InputHTMLAttributes } from "react";
import { InputStyledContainer, WrapperInputForm } from "./styled";

type InputFormProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

export const InputForm = forwardRef<HTMLInputElement, InputFormProps>(
  ({ error, ...props }, ref) => (
    <WrapperInputForm>
      <InputStyledContainer error={!!error} ref={ref} {...props} />
      {error && <p>{error}</p>}
    </WrapperInputForm>
  )
);
