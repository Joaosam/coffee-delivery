import styled from "styled-components";

interface DisplayContentDetailsProps {
  time?: boolean;
  payment?: boolean;
}

export const OrderConfirmedContainer = styled.div`
  padding: 8rem 6.4rem;
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
`;
