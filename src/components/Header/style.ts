import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 2.4rem 6.4rem;
  width: 100%;
  background: ${(props) => props.theme["white"]};
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.8rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme["purple-light"]};
  color: ${(props) => props.theme["purple-dark"]};
  font-size: 1.4rem;
`;

export const Cart = styled.div`
  position: relative;
  padding: 0.8rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
`;

export const CartNotification = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 2rem;
  height: 2rem;
  right: -0.835rem;
  top: -0.8rem;
  border-radius: 50%;
  color: ${(props) => props.theme["white"]};
  background-color: ${(props) => props.theme["yellow-dark"]};
`;
