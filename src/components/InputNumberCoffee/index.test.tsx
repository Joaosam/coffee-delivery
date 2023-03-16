import { screen, render } from "@testing-library/react";
import { InputNumberCoffe } from ".";
import { useBuyContext } from "../../contexts/BuyContext";

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
      handleAddProductToCart: jest.fn(),
      handleDecreasesCartProducts: jest.fn(),
      handleRemoveCartProducts: jest.fn(),
    }));
  });
  it("should render", () => {
    render(
      <InputNumberCoffe
        id={1}
        image={"https://www.imgcoffee.com"}
        name={"Café"}
        price={10}
      />
    );
  });
});
