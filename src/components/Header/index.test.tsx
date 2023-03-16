import { render, screen } from "@testing-library/react";
import { Header } from ".";
import { MemoryRouter } from "react-router-dom";
import { useBuyContext } from "../../contexts/BuyContext";
import axios from "axios";

jest.mock("../../contexts/BuyContext");

describe("Header component", () => {
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
      setLoading: jest.fn(),
    }));
  });
  afterEach(() => {
    axios.CancelToken.source().cancel();
  });

  it("should be able render notifications", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByTestId("spanNotification")).toBeInTheDocument();
  });

  it("should be able render without notifications", () => {
    (useBuyContext as unknown as jest.Mock).mockImplementation(() => ({
      totalProducts: [],
      setLoading: jest.fn(),
    }));
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.queryByTestId("spanNotification")).not.toBeInTheDocument();
  });
});
