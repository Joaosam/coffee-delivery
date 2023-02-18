import { Coffees } from "./components/Coffees";
import { ConfirmOrderBtn, SelectedCoffeesContainer } from "./styled";

export function SelectedCoffees() {
  return (
    <SelectedCoffeesContainer>
      <h2>Cafés selecionados</h2>
      <div className="containerCoffees">
        <Coffees />
        <ConfirmOrderBtn type="submit">
          <span>Confirmar pedido</span>
        </ConfirmOrderBtn>
      </div>
    </SelectedCoffeesContainer>
  );
}
