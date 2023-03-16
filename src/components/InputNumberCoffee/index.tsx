import { Minus, Plus } from "phosphor-react";
import { useEffect, useState } from "react";
import { useBuyContext } from "../../contexts/BuyContext";

import { Wrapper } from "./styled";

interface InputNumberCoffeeProps {
  id: number;
  name: string;
  image: string;
  price: number;
}

export function InputNumberCoffe({
  id,
  name,
  image,
  price,
}: InputNumberCoffeeProps) {
  const {
    totalProducts,
    handleAddProductToCart,
    handleDecreasesCartProducts,
    handleRemoveCartProducts,
  } = useBuyContext();
  const [quantityCoffee, setQuantityCoffee] = useState(0);

  useEffect(() => {
    totalProducts.filter((item) => {
      if (item.id === id) {
        setQuantityCoffee(item.quantity);
      }
      if (item.quantity <= 0 || totalProducts.length === 0) {
        setQuantityCoffee((item.quantity = 0));
      }
      if (totalProducts.some((item) => item.quantity === 0)) {
        handleRemoveCartProducts(item.id);
      }
    });
  }, [totalProducts]);

  return (
    <Wrapper>
      <Minus
        size={14}
        className="minus"
        onClick={() => handleDecreasesCartProducts(id)}
      />
      <input
        type="text"
        value={quantityCoffee}
        onChange={(e) => e.target.value}
      />
      <Plus
        onClick={() => handleAddProductToCart(id, name, image, price)}
        size={14}
        className="plus"
      />
    </Wrapper>
  );
}
