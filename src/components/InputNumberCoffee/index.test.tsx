import { screen, render, fireEvent } from "@testing-library/react";
import { InputNumberCoffe } from ".";
import { useBuyContext } from "../../contexts/BuyContext";

// Crie uma variável para armazenar o estado simulado
let mockTotalProducts = [
  {
    id: 1,
    name: "Café",
    price: 10,
    image: "https://www.imgcoffee.com",
    quantity: 1,
  },
];

const handleDecreasesCartProducts = jest.fn();
const handleAddProductToCart = jest.fn();
const handleRemoveCartProducts = jest.fn();

jest.mock("../../contexts/BuyContext");

describe("InputNumberCoffe", () => {
  beforeEach(() => {
    (useBuyContext as unknown as jest.Mock).mockImplementation(() => ({
      totalProducts: [
        {
          id: 1,
          name: "Café",
          price: 10,
          image: "https://www.imgcoffee.com",
          quantity: 1,
        },
      ],
      handleAddProductToCart,
      handleDecreasesCartProducts,
      handleRemoveCartProducts,
    }));
  });
  it("should render", async () => {
    render(
      <InputNumberCoffe
        id={1}
        image={"https://www.imgcoffee.com"}
        name={"Café"}
        price={10}
      />
    );

    expect(screen.getByRole("textbox")).toHaveValue("1");
  });

  it("should be able to add or remove the quantity", async () => {
    render(
      <InputNumberCoffe
        id={1}
        image={"https://www.imgcoffee.com"}
        name={"Café"}
        price={10}
      />
    );

    await fireEvent.click(screen.getByTestId("minus"));
    expect(handleDecreasesCartProducts).toHaveBeenCalled();

    await fireEvent.click(screen.getByTestId("plus"));
  });

  it("not should be able to remove the quantity", async () => {
    (useBuyContext as unknown as jest.Mock).mockImplementation(() => ({
      totalProducts: [
        {
          ...mockTotalProducts,
          quantity: 0,
        },
      ],
      handleAddProductToCart,
      handleDecreasesCartProducts,
      handleRemoveCartProducts,
    }));
    render(
      <InputNumberCoffe
        id={1}
        image={"https://www.imgcoffee.com"}
        name={"Café"}
        price={10}
      />
    );

    expect(handleRemoveCartProducts).toHaveBeenCalled();
    expect(handleDecreasesCartProducts).not.toHaveBeenCalled();
  });
});
