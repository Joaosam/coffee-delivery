import { ButtonOfPaymentContainer } from "./styled";

interface ButtonOfPaymentProps {
  icon: React.ReactNode;
  text: string;
}

export function ButtonOfPayment({ icon, text }: ButtonOfPaymentProps) {
  return (
    <ButtonOfPaymentContainer>
      {icon}
      <span>{text}</span>
    </ButtonOfPaymentContainer>
  );
}
