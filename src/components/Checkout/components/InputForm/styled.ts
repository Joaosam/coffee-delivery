import styled from "styled-components";

export const InputStyledContainer = styled.input`
  padding: 1.2rem;
  background-color: ${(props) => props.theme["base-input"]};
  border: 1px solid ${(props) => props.theme["base-button"]};
  border-radius: 4px;
  color: ${(props) => props.theme["base-label"]};
  outline: none;
  transition: 0.3s;

  :focus {
    border: 1px solid ${(props) => props.theme["yellow-dark"]};
  }

  ::placeholder {
    color: ${(props) => props.theme["base-label"]};
  }
`;
