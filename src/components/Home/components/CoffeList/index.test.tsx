import { screen, render } from "@testing-library/react";
import { CoffeList } from ".";
import { MemoryRouter } from "react-router-dom";
import { useBuyContext } from "../../../../contexts/BuyContext";

jest.mock("../../../../contexts/BuyContext");

describe("CoffeList component", () => {
  beforeEach(() => {
    (useBuyContext as unknown as jest.Mock).mockImplementation(() => ({
      data: [
        {
          id: 1,
          name: "Expresso Tradicional",
          description:
            "O tradicional café feito com água quente e grãos moídos",
          tags: [
            {
              id: 1,
              name: "Tradicional",
            },
          ],
          price: 9.9,
          image: "https://www.imgcoffee.com",
        },
      ],
      totalProducts: [
        {
          id: 1,
          name: "Expresso Tradicional",
          price: 10,
          image: "https://www.imgcoffee.com",
          quantity: 1,
        },
      ],
    }));
  });

  it("should be able render", () => {
    render(
      <MemoryRouter>
        <CoffeList />
      </MemoryRouter>
    );

    expect(screen.getByText("Expresso Tradicional")).toBeInTheDocument();
    expect(screen.getByText("9,90")).toBeInTheDocument();
    expect(
      screen.getByText(
        "O tradicional café feito com água quente e grãos moídos"
      )
    ).toBeInTheDocument();
  });
});
