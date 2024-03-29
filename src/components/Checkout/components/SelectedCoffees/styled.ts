import styled from "styled-components";

export const SelectedCoffeesContainer = styled.section`
  width: 40%;
  @media (max-width: 1024px) {
    width: 100%;
  }

  .containerCoffees {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    padding: 4rem;
    background-color: ${(props) => props.theme["base-card"]};
    border-radius: 6px 44px;

    @media (max-width: 1024px) {
      padding: 2rem;
    }
  }
  h2 {
    font-size: 1.8rem;
    font-family: "Baloo 2", cursive;
    color: ${(props) => props.theme["base-subtitle"]};
    margin-bottom: 1.5rem;
  }
`;

export const ConfirmOrderBtn = styled.button`
  width: 100%;
  padding: 1.2rem 0.8rem;
  background-color: ${(props) => props.theme["yellow"]};
  color: ${(props) => props.theme["white"]};
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 700;
  border-radius: 6px;
  outline: none;
  border: none;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme["yellow-dark"]};
  }
`;
