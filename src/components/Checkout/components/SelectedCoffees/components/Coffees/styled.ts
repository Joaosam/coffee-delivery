import styled from "styled-components";

export const CoffeesContainer = styled.div`
  width: 36.8rem;
  display: flex;
  align-items: center;
  position: relative;
  border-bottom: 1px solid ${(props) => props.theme["base-button"]};
  padding-bottom: 2.4rem;

  img {
    width: 6.4rem;
  }

  @media (max-width: 1024px) {
    width: 100%;

    img {
      width: 4.8rem;
    }
  }

  @media (min-width: 1440px) {
    width: 100%;
  }
`;

export const DescribeCoffees = styled.div`
  margin-left: 2rem;
  span:first-child {
    font-size: 1.6rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-top: 0.8rem;

  .removeButton {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0rem 0.8rem;
    background-color: ${(props) => props.theme["base-button"]};
    border-radius: 6px;
    transition: 0.3s;

    span {
      color: ${(props) => props.theme["base-text"]};
      font-size: 1.2rem;
      text-transform: uppercase;
    }

    :hover {
      background-color: ${(props) => props.theme["base-hover"]};
      cursor: pointer;
    }
  }
`;

export const TotalValuesCurrentCoffee = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  span {
    color: ${(props) => props.theme["base-text"]};
    font-weight: 700;
    font-size: 1.6rem;
  }
`;

export const EmptyCart = styled.div`
  width: 36.8rem;
  height: 8.4rem;
  display: grid;
  place-items: center;
  border: 1px solid ${(props) => props.theme["yellow-dark"]};
  border-radius: 6px;
  width: 100%;

  a {
    font-size: 1.4rem;
  }
`;
