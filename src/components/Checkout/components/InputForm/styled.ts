import styled from "styled-components";

export interface InputStyledContainerProps {
  error?: boolean;
}

export const InputStyledContainer = styled.input<InputStyledContainerProps>`
  padding: 1.2rem;
  background-color: ${(props) => props.theme["base-input"]};
  border: 1px solid
    ${(props) => {
      return props.error ? props.theme["red"] : props.theme["base-button"];
    }};
  border-radius: 4px;
  color: ${(props) => props.theme["base-text"]};
  outline: none;
  transition: 0.3s;

  :focus {
    border: 1px solid
      ${(props) => {
        return props.error ? props.theme["red"] : props.theme["yellow-dark"];
      }};
  }

  ::placeholder {
    color: ${(props) => props.theme["base-label"]};
  }

  &:disabled {
    cursor: not-allowed;
  }

  @media (max-width: 1024px) {
    font-size: 1.6rem;
  }
`;
