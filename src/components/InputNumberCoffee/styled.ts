import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  background-color: ${(props) => props.theme["base-button"]};
  border-radius: 6px;
  padding: 0.8rem;
  max-width: 7.2rem;

  input {
    color: ${(props) => props.theme["base-text"]};
    text-align: center;
    border: none;
    background-color: transparent;
    outline: none;
    width: 2rem;
  }

  .minus,
  .plus {
    color: ${(props) => props.theme.purple};
    transition: 0.3s;

    &:hover {
      color: ${(props) => props.theme["purple-dark"]};
      cursor: pointer;
    }
  }
`;
