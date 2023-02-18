import { ConfirmationOrderContainer, Text } from "./styled";

interface ConfirmationOrderProps {
  totalPriceCoffee: number;
}

export function ConfirmationOrder({
  totalPriceCoffee,
}: ConfirmationOrderProps) {
  const totalPrice = totalPriceCoffee + 3.5;
  return (
    <ConfirmationOrderContainer>
      <div>
        <Text size="s">Total de itens</Text>
        <Text size="m">
          R$ {totalPriceCoffee.toFixed(2).toString().replace(".", ",")}
        </Text>
      </div>
      <div>
        <Text size="s">Entrega</Text>
        <Text size="m">R$ 3,50</Text>
      </div>
      <div>
        <Text size="l" weight="700">
          Total
        </Text>
        <Text size="l" weight="700">
          R$ {totalPrice.toFixed(2).toString().replace(".", ",")}
        </Text>
      </div>
    </ConfirmationOrderContainer>
  );
}
