import { ButtonOfPaymentContainer, MethodPaymentContainer } from "./styled";
import { useFormContext } from "react-hook-form";
import { toast } from "react-toastify";

interface ButtonOfPaymentProps {
  icon: React.ReactNode;
  text: string;
  id: number;
}

export function ButtonOfPayment({ text, icon, id }: ButtonOfPaymentProps) {
  const { register } = useFormContext();

  return (
    <MethodPaymentContainer>
      <input
        type="radio"
        id={id.toString()}
        value={text}
        {...register("methodPayment")}
      />
      <label htmlFor={id.toString()}>
        <ButtonOfPaymentContainer>
          {icon}
          <span>{text}</span>
        </ButtonOfPaymentContainer>
      </label>
    </MethodPaymentContainer>
  );
}
