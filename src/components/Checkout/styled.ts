import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  gap: 3.2rem;
  padding: 4rem 6.4rem;

  @media (max-width: 1024px) {
    padding-inline: 3rem;
    flex-direction: column;

    .myCustomToast {
      width: 10%;
    }
  }
`;

export const ContainerPayment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 60%;

  @media (max-width: 1024px) {
    width: 100%;
  }
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

  @media (max-width: 1024px) {
    padding: 2rem;
  }
`;

export const ContentPayment = styled.div`
  padding: 4rem;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 0.6rem;

  @media (max-width: 1024px) {
    padding: 2rem;
  }
`;

export const ContainerButtonPayment = styled.div`
  display: flex;
  gap: 1.2rem;
`;
