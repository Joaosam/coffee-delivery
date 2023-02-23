import { Trash } from "phosphor-react";
import { Fragment, useContext, useEffect, useState } from "react";
import { BuyContext } from "../../../../../../contexts/BuyContext";
import { InputNumberCoffe } from "../../../../../InputNumberCoffee";
import { ConfirmationOrder } from "../ConfirmationOrder";
import {
  CoffeesContainer,
  DescribeCoffees,
  EmptyCart,
  InputsContainer,
  TotalValuesCurrentCoffee,
} from "./styled";

export function Coffees() {
  const { totalProducts, handleRemoveCartProductsFromCheckout } =
    useContext(BuyContext);
  const [totalPriceCoffee, setTotalPriceCoffee] = useState(0);
  const isEmptyCart = totalProducts.length === 0;
  const totalPriceCurrentCoffee = totalProducts.reduce(
    (acc, product) => {
      acc[product.id] = product.price * product.quantity;
      return acc;
    },
    [0]
  );

  useEffect(() => {
    setTotalPriceCoffee(
      totalProducts.reduce((acc, product) => {
        return acc + product.price * product.quantity;
      }, 0)
    );
  }, [totalProducts]);

  return (
    <Fragment>
      {isEmptyCart ? (
        <EmptyCart>
          <h2>Carrinho vazio!</h2>
          <a href="/">Clique aqui para ver nosso catálogo de cafés!</a>
        </EmptyCart>
      ) : (
        totalProducts
          .sort((a, b) => a.id - b.id)
          .map((product) => (
            <CoffeesContainer key={product.id}>
              <img src={`../src/assets/${product.image}`} alt="Café" />
              <DescribeCoffees>
                <span>{product.name}</span>
                <InputsContainer>
                  <InputNumberCoffe
                    id={product.id}
                    name={product.name}
                    image={product.image}
                    price={product.price}
                  />
                  <div
                    className="removeButton"
                    onClick={() =>
                      handleRemoveCartProductsFromCheckout(product.id)
                    }
                  >
                    <Trash size={16} color="#8047f8" />
                    <span>Remover</span>
                  </div>
                </InputsContainer>
              </DescribeCoffees>
              <TotalValuesCurrentCoffee>
                <span>
                  R${" "}
                  {totalPriceCurrentCoffee[product.id]
                    .toFixed(2)
                    .toString()
                    .replace(".", ",")}
                </span>
              </TotalValuesCurrentCoffee>
            </CoffeesContainer>
          ))
      )}
      <ConfirmationOrder totalPriceCoffee={totalPriceCoffee} />
    </Fragment>
  );
}
