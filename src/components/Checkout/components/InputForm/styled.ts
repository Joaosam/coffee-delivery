import styled from "styled-components";

interface InputStyledContainerProps {
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
`;

export const WrapperInputForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  color: ${(props) => props.theme["red"]};
`;
