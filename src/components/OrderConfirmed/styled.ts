import styled from "styled-components";

interface DisplayContentDetailsProps {
  time?: boolean;
  payment?: boolean;
}

export const OrderConfirmedContainer = styled.div`
  padding: 8rem 6.4rem;

  @media (max-width: 1024px) {
    padding-inline: 2rem;
  }
`;

export const Title = styled.div`
  h2 {
    color: ${(props) => props.theme["yellow-dark"]};
    font-size: 3.2rem;
    font-weight: 800;
    font-family: "Baloo 2", cursive;
  }

  p {
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 2rem;
  }

  @media (max-width: 1024px) {
    h2 {
      font-size: 2.4rem;
    }
    p {
      font-size: 1.6rem;
      width: 80%;
    }
  }
`;

export const OrderConfirmedContent = styled.main`
  display: flex;
  gap: 10.2rem;
`;

export const OrderDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  border-radius: 6px 36px;
  width: 50%;
  margin-top: 4rem;
  padding: 4rem;
  position: relative;
  background-color: ${(props) => props.theme["background"]};

  &::after {
    content: "";
    position: absolute;
    inset: -1px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
    border-radius: 7px 37px;
    z-index: -1;
  }

  @media (max-width: 1024px) {
    width: 100%;
    padding: 2rem;
  }
`;

export const DisplayContentDetails = styled.div<DisplayContentDetailsProps>`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  font-size: 1.6rem;
  color: ${(props) => props.theme["base-text"]};

  svg {
    display: flex;
    border-radius: 50%;
    padding: 0.8rem;
    color: ${(props) => props.theme["white"]};
    background-color: ${(props) =>
      props.time
        ? props.theme["yellow"]
        : props.payment
        ? props.theme["yellow-dark"]
        : props.theme["purple"]};
  }
`;

export const ImgIllustration = styled.img`
  width: 49.2rem;

  @media (max-width: 1024px) {
    display: none;
  }

  @media (min-width: 1440px) {
    width: 70rem;
  }
`;
