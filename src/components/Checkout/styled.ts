import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  gap: 3.2rem;
  padding: 4rem 6.4rem;

  .ola {
    width: 44.8rem;
    background-color: red;
  }
`;

export const ContainerPayment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const ContainerForm = styled.div`
  h2 {
    font-size: 1.8rem;
    font-family: "Baloo 2", cursive;
    color: ${(props) => props.theme["base-subtitle"]};
    margin-bottom: 1.5rem;
  }
`;

export const ContentForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 4rem;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 0.6rem;
`;

export const ContentPayment = styled.div`
  padding: 4rem;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 0.6rem;
`;

export const ContainerButtonPayment = styled.div`
  display: flex;
  gap: 1.2rem;
`;

export const HeaderPayment = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  margin-bottom: 3.2rem;

  .contentHeader {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

    h3 {
      font-size: 1.6rem;
      font-weight: 400;
      color: ${(props) => props.theme["base-subtitle"]};
    }
    p {
      font-size: 1.4rem;
      color: ${(props) => props.theme["base-text"]};
    }
  }
`;
