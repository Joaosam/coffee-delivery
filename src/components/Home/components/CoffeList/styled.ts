import styled from "styled-components";

interface ListFilterProps {
  active: boolean;
}

export const CoffeListContainer = styled.section`
  padding: 3.2rem 6.4rem;
`;

export const CoffeListHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  h1 {
    font-family: "Baloo 2", cursive;
    font-weight: 800;
    font-size: 3.2rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const TagsCoffe = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const WrapperList = styled.div`
  list-style: none;
`;

export const ListFilter = styled.li<ListFilterProps>`
  font-weight: 700;
  font-size: 1rem;
  line-height: 130%;
  color: ${(props) => (props.active ? props.theme.white : props.theme.yellow)};
  text-transform: uppercase;
  padding: 0.6rem 1.2rem;
  border: 1px solid ${(props) => props.theme.yellow};
  border-radius: 100px;
  background-color: ${(props) =>
    props.active ? props.theme["yellow-dark"] : props.theme.white};
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      !props.active && props.theme["yellow-light"]};
    border-color: ${(props) => !props.active && props.theme["yellow-light"]};
  }
`;

export const ListCoffeContainer = styled.div`
  display: flex;
  gap: 3.2rem;
  flex-wrap: wrap;
  margin-top: 3.4rem;
`;

export const WrapperListCoffe = styled.ul`
  list-style: none;

  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px 36px;
  padding: 2rem 2.4rem;

  .wrapperImg {
    display: flex;
    justify-content: center;
  }

  img {
    margin-top: -4rem;
  }

  li .wrapperTags {
    display: flex;
    justify-content: center;
    gap: 1.2rem;

    span {
      text-transform: uppercase;
      font-weight: 700;
      color: ${(props) => props.theme["yellow-dark"]};
      background-color: ${(props) => props.theme["yellow-light"]};
      padding: 0.4rem 0.8rem;
      border-radius: 100px;
      margin: 1.6rem 0 2rem 0;
    }
  }
`;

export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3.3rem;

  h3 {
    display: flex;
    justify-content: center;
    font-family: "Baloo 2", cursive;
    font-weight: 700;
    font-size: 2rem;
    margin-bottom: 0.8rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  .description {
    display: flex;
    justify-content: center;
    width: 21.6rem;
    text-align: center;
  }

  span {
    font-size: 1.4rem;
    color: ${(props) => props.theme["base-label"]};
  }
`;

export const BuyAddCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 1.4rem;
    color: ${(props) => props.theme["base-text"]};

    span {
      font-family: "Baloo 2", cursive;
      font-weight: 800;
      font-size: 2.4rem;
    }
  }
`;

export const InputCart = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const Cart = styled.div`
  display: flex;
  padding: 0.8rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme["purple-dark"]};
  color: ${(props) => props.theme.white};
  transition: 0.3s;

  &:hover {
    background-color: ${(props) => props.theme["purple"]};
    cursor: pointer;
  }
`;

export const NotFoundCoffe = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;

  h3 {
    font-weight: 800;
    font-size: 2.4rem;
  }
`;
