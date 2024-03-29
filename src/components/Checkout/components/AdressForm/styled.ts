import styled from "styled-components";

export const AdressFormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 40% 40% 16%;
  column-gap: 1.2rem;
  row-gap: 1.6rem;

  .cepInput {
    grid-column: span 1;
  }
  .streetInput {
    grid-column: span 3;
  }
  .complementInput {
    grid-column: span 2;
  }
`;
