import { screen, render, fireEvent } from "@testing-library/react";
import { CoffeList } from ".";
import { MemoryRouter } from "react-router-dom";
import { useBuyContext } from "../../../../contexts/BuyContext";

jest.mock("../../../../contexts/BuyContext");

describe("CoffeList component", () => {
  beforeEach(() => {
    (useBuyContext as jest.Mock).mockImplementation(() => ({
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
        {
          id: 2,
          name: "Irlandês",
          description:
            "Bebida a base de café, uísque irlandês, açúcar e chantilly",
          tags: [
            {
              id: 5,
              name: "Especial",
            },
          ],
          price: 18.9,
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

  it("should be able render", async () => {
    render(
      <MemoryRouter>
        <CoffeList />
      </MemoryRouter>
    );

    expect(screen.getByText("Expresso Tradicional")).toBeInTheDocument();
    expect(screen.getByText("9,90")).toBeInTheDocument();
    expect(screen.getByText("Irlandês")).toBeInTheDocument();
    expect(screen.getByText("18,90")).toBeInTheDocument();
    expect(
      screen.getByText(
        "O tradicional café feito com água quente e grãos moídos"
      )
    ).toBeInTheDocument();

    await fireEvent.click(screen.getByTestId("wrapperList-1"));
    await fireEvent.click(screen.getByTestId("wrapperList-2"));

    expect(
      screen.getByText(
        "Não foi encontrado nenhum café através dos filtros informados!"
      )
    ).toBeInTheDocument();
  });

  it("should be able filter coffees", async () => {
    render(
      <MemoryRouter>
        <CoffeList />
      </MemoryRouter>
    );

    await fireEvent.click(screen.getByTestId("wrapperList-1"));
    expect(screen.getByText("Expresso Tradicional")).toBeInTheDocument();
    expect(screen.getByText("9,90")).toBeInTheDocument();
    expect(screen.queryByText("Irlandês")).not.toBeInTheDocument();
    expect(screen.queryByText("18,90")).not.toBeInTheDocument();
  });
});
