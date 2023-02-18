import { ButtonOfPaymentContainer, MethodPaymentContainer } from "./styled";

interface ButtonOfPaymentProps {
  icon: React.ReactNode;
  text: string;
  id: number;
}

export function ButtonOfPayment({ text, icon, id }: ButtonOfPaymentProps) {
  return (
    <MethodPaymentContainer>
      <input type="radio" id={id.toString()} name="methodPayment" />
      <label htmlFor={id.toString()}>
        <ButtonOfPaymentContainer>
          {icon}
          <span>{text}</span>
        </ButtonOfPaymentContainer>
      </label>
    </MethodPaymentContainer>
  );
}
