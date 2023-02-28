import styled from "styled-components";

export const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.8rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme["purple-light"]};
  color: ${(props) => props.theme["purple"]};
  font-size: 1.4rem;
  cursor: default;
`;
