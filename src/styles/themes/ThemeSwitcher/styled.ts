import styled from "styled-components";

export const ThemeSwitcherContainer = styled.div`
  position: absolute;
  top: 5%;
  right: 20%;
  z-index: 1000;
  color: ${(props) => props.theme["base-text"]};
  cursor: pointer;

  @media (max-width: 1024px) {
    position: absolute;
    top: 15%;
    right: 3rem;
    z-index: 10;
  }

  @media (min-width: 1440px) {
    top: 3.25%;
    right: 25rem;
  }
`;
