import { ShoppingCart } from "phosphor-react";
import logo from "../../../public/assets/Logo.svg";
import {
  BtnContainer,
  Cart,
  CartNotification,
  HeaderContainer,
  NavBar,
} from "./style";
import { NavLink } from "react-router-dom";
import { useBuyContext } from "../../contexts/BuyContext";
import { GetLocalization } from "./components/GetLocalization";

export function Header() {
  const { totalProducts } = useBuyContext();
  const totalQuantity = totalProducts.reduce(
    (accumulator, currentItem) => accumulator + currentItem.quantity,
    0
  );

  return (
    <HeaderContainer>
      <NavBar>
        <NavLink to="/">
          <img src={logo} alt="Logo Coffe Delivery" />
        </NavLink>
        <BtnContainer>
          <GetLocalization />
          <NavLink to="/checkout">
            <Cart>
              {totalProducts.length !== 0 && (
                <CartNotification>
                  <span data-testid="spanNotification">{totalQuantity}</span>
                </CartNotification>
              )}
              <ShoppingCart weight="fill" size={22} />
            </Cart>
          </NavLink>
        </BtnContainer>
      </NavBar>
    </HeaderContainer>
  );
}
