import { render, screen } from "@testing-library/react";
import { GetLocalization } from ".";
import { useBuyContext } from "../../../../contexts/BuyContext";
import { BounceLoader } from "react-spinners";

jest.mock("../../../../contexts/BuyContext");
jest.mock("react-spinners", () => ({
  BounceLoader: jest.fn(),
}));

describe("GetLocalization component", () => {
  beforeEach(() => {
    (useBuyContext as unknown as jest.Mock).mockImplementation(() => ({
      loading: false,
      setCurrentIP: jest.fn(),
      setLoading: jest.fn(),
      ipCity: "São Paulo",
      ipRegion: "BR",
    }));
  });

  it("should render without error with loading false", () => {
    render(<GetLocalization />);
    expect(screen.getByText("São Paulo, BR")).toBeInTheDocument();
  });

  it("should render without error with loading true", () => {
    (useBuyContext as unknown as jest.Mock).mockImplementation(() => ({
      loading: true,
      setLoading: jest.fn(),
      setCurrentIP: jest.fn(),
    }));

    render(<GetLocalization />);
    expect(BounceLoader).toHaveBeenCalled();
  });
});
