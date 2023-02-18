import styled from "styled-components";

interface TextProps {
  size: "s" | "m" | "l";
  weight?: string;
}

export const ConfirmationOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.35rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const Text = styled.span<TextProps>`
  font-size: ${(props) =>
    props.size === "s" ? "1.4rem" : props.size === "m" ? "1.6rem" : "2rem"};
  font-weight: ${(props) => props.weight && "700"};
  color: ${(props) =>
    props.weight ? props.theme["base-subtitle"] : props.theme["base-text"]};
`;
