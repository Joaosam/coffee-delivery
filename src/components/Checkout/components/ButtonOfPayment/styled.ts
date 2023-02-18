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
  user-select: none;

  span {
    font-size: 1.2rem;
    text-transform: uppercase;
    color: ${(props) => props.theme["base-text"]};
  }

  &:hover {
    background-color: ${(props) => props.theme["purple-light"]};
    cursor: pointer;
  }
`;

export const MethodPaymentContainer = styled.div`
  flex: 1;

  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label > div {
    background-color: ${(props) => props.theme["purple-light"]};
    border-color: ${(props) => props.theme["purple"]};

    &:hover {
      background-color: ${(props) => props.theme["purple-light"]};
      cursor: pointer;
    }
  }
`;
