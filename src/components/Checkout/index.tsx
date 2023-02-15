import { useContext } from "react";
import { BuyContext } from "../../contexts/BuyContext";
import {
  CheckoutContainer,
  ContainerButtonPayment,
  ContainerForm,
  ContainerPayment,
  ContentForm,
  ContentPayment,
} from "./styled";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { AdressForm } from "./components/AdressForm";
import { SectionTitle } from "./components/SectionTitle";
import { ButtonOfPayment } from "./components/ButtonOfPayment";

export function Checkout() {
  const { totalProducts } = useContext(BuyContext);

  return (
    <CheckoutContainer>
      <ContainerPayment>
        <ContainerForm>
          <h2>Complete seu pedido</h2>
          <ContentForm>
            <SectionTitle
              icon={<MapPinLine size={22} color="#c47f17" />}
              title="Endereço de Entrega"
              subTitle="Informe seu endereço de entrega"
            />
            <AdressForm />
          </ContentForm>
        </ContainerForm>
        <ContentPayment>
          <SectionTitle
            icon={<CurrencyDollar size={22} color="#8047F8" />}
            title="Pagamento"
            subTitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          />
          <ContainerButtonPayment>
            <ButtonOfPayment
              icon={<CreditCard size={16} color="#8047F8" />}
              text="Cartão de crédito"
            />
            <ButtonOfPayment
              icon={<Bank size={16} color="#8047F8" />}
              text="Cartão de débito"
            />
            <ButtonOfPayment
              icon={<Money size={16} color="#8047F8" />}
              text="Dinheiro"
            />
          </ContainerButtonPayment>
        </ContentPayment>
      </ContainerPayment>
      <h2 className="ola">OLÀ</h2>
    </CheckoutContainer>
  );
}
