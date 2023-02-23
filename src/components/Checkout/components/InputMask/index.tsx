import { forwardRef, InputHTMLAttributes, useCallback } from "react";
import { InputStyledContainer } from "../InputForm/styled";

type InputMaskProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

export const InputMask = forwardRef(function (
  props: InputMaskProps,
  ref: React.Ref<HTMLInputElement>
) {
  const { error, ...rest } = props;

  const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    e.currentTarget.maxLength = 9;
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{5})(\d)/, "$1-$2");
    e.currentTarget.value = value;
  }, []);

  return (
    <InputStyledContainer
      error={!!error}
      ref={ref}
      onKeyUp={handleKeyUp}
      {...rest}
    />
  );
});
