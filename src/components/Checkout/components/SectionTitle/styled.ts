import styled from "styled-components";

export const SectionTitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  margin-bottom: 3.2rem;

  .contentHeader {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

    h3 {
      font-size: 1.6rem;
      font-weight: 400;
      color: ${(props) => props.theme["base-subtitle"]};
    }
    p {
      font-size: 1.4rem;
      color: ${(props) => props.theme["base-text"]};
    }
  }
`;
