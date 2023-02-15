import styled from "styled-components";

interface IconsProps {
  buy?: boolean;
  package?: boolean;
  track?: boolean;
  coffe?: boolean;
}

export const AboutSection = styled.section`
  display: flex;
  align-items: center;
  gap: 5.6rem;
  padding: 9.4rem 6.4rem;
  background: url("/src/assets/Background.svg");
`;

export const ContainerDescrition = styled.div`
  h1 {
    font-family: "Baloo 2", cursive;
    font-size: 4.8rem;
    font-weight: 800;
    line-height: 6.24rem;
    margin-bottom: 1.6rem;
  }

  h3 {
    font-size: 2.4rem;
    line-height: 2.6rem;
    font-weight: 400;
    margin-bottom: 6.6rem;
  }
`;

export const Icons = styled.div<IconsProps>`
  display: flex;
  border-radius: 50%;
  padding: 0.8rem;
  color: ${(props) => props.theme.white};
  background-color: ${(props) =>
    props.buy
      ? props.theme["yellow-dark"]
      : props.package
      ? props.theme["base-text"]
      : props.track
      ? props.theme.yellow
      : props.theme.purple};
`;

export const DetailsDescription = styled.div`
  display: grid;
  grid-template-areas:
    ".buy" ".package"
    ".track" ".coffe";
  gap: 2rem;

  .containerBuy,
  .containerPackage,
  .containerTrack,
  .containerCoffe {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }

  span {
    font-size: 1.6rem;
  }
`;

export const IlustrationCoffe = styled.div`
  img {
    width: 47.6rem;
  }
`;
