import styled from "styled-components";

export const ButtonOfPaymentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.2rem;
  padding: 1.6rem;
  background-color: ${(props) => props.theme["base-button"]};
  border-radius: 0.6rem;
  border: 1px solid transparent;
  transition: 0.3s;
  flex: 1;

  span {
    font-size: 1.2rem;
    text-transform: uppercase;
    color: ${(props) => props.theme["base-text"]};
  }

  :hover {
    cursor: pointer;
    background-color: ${(props) => props.theme["base-hover"]};
  }

  :active {
    background-color: ${(props) => props.theme["purple-light"]};
    border: 1px solid ${(props) => props.theme["purple"]};
  }
`;
