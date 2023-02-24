import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useLocation } from "react-router-dom";
import illustration from "../../../../assets/illustration.svg";
import {
  DisplayContentDetails,
  ImgIllustration,
  OrderConfirmedContainer,
  OrderConfirmedContent,
  OrderDetails,
  Title,
} from "./styled";

export function OrderConfirmed() {
  const { state } = useLocation();
  const { data } = state;

  return (
    <OrderConfirmedContainer>
      <Title>
        <h2>Uhul! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </Title>
      <OrderConfirmedContent>
        <OrderDetails>
          <DisplayContentDetails>
            <MapPin size={32} weight="fill" />
            <div className="details">
              <p>
                Entrega em{" "}
                <b>
                  {data.street}, {data.number}
                  {data.complement && <b> - {data.complement}</b>}
                </b>
              </p>
              <p>
                {data.neighborhood} - {data.city}, {data.uf}
              </p>
            </div>
          </DisplayContentDetails>
          <DisplayContentDetails time>
            <Timer size={32} weight="fill" />
            <div className="details">
              <p>Previsão de entrega</p>
              <b>20 min - 30 min</b>
            </div>
          </DisplayContentDetails>
          <DisplayContentDetails payment>
            <CurrencyDollar size={32} weight="fill" />
            <div className="details">
              <p>Pagamento na entrega</p>
              <b>{data.methodPayment}</b>
            </div>
          </DisplayContentDetails>
        </OrderDetails>
        <ImgIllustration
          src={illustration}
          alt="Ilustratção de um homem em uma moto simulando um entrega"
        />
      </OrderConfirmedContent>
    </OrderConfirmedContainer>
  );
}
