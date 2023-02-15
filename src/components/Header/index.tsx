import { MapPin, ShoppingCart } from "phosphor-react";
import logo from "../../assets/Logo.svg";
import {
  BtnContainer,
  Cart,
  CartNotification,
  HeaderContainer,
  Location,
  NavBar,
} from "./style";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { BuyContext } from "../../contexts/BuyContext";

export function Header() {
  const { totalProducts } = useContext(BuyContext);
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
          <Location>
            <MapPin weight="fill" size={22} />
            <span>São Paulo, SP</span>
          </Location>
          <NavLink to="/checkout">
            <Cart>
              {totalProducts.length !== 0 && (
                <CartNotification>
                  <span>{totalQuantity}</span>
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
