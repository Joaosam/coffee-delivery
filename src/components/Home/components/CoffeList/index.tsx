import {
  BuyAddCart,
  Cart,
  CoffeListContainer,
  CoffeListHead,
  ContainerDescription,
  InputCart,
  ListCoffeContainer,
  ListFilter,
  NotFoundCoffe,
  TagsCoffe,
  Title,
  WrapperList,
  WrapperListCoffe,
} from "./styled";
import { CircleWavyWarning, ShoppingCart } from "phosphor-react";

import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { BuyContext } from "../../../../contexts/BuyContext";
import { InputNumberCoffe } from "../../../InputNumberCoffee";

export function CoffeList() {
  const { data } = useContext(BuyContext);
  const [activeFilter, setActiveFilter] = useState([] as number[]);
  const [dataList, setDataList] = useState(data);

  const wrapperList = [
    { id: 1, name: "Tradicional" },
    { id: 2, name: "Gelado" },
    { id: 3, name: "Com leite" },
    { id: 4, name: "Alcoólico" },
    { id: 5, name: "Especial" },
  ];

  useEffect(() => {
    const listFiltered = data.filter((coffee) => {
      if (activeFilter.length > 0) {
        return activeFilter.reduce((acc, tag) => {
          return (
            acc &&
            coffee.tags.filter((currentTag) => currentTag.id === tag).length > 0
          );
        }, true);
      }
      return coffee;
    });
    setDataList(listFiltered);
  }, [activeFilter]);

  function handleListFiltered(idList: number) {
    if (activeFilter.includes(idList)) {
      const filtered = activeFilter.filter((tag) => tag !== idList);
      setActiveFilter(filtered);
    } else {
      setActiveFilter([...activeFilter, idList]);
    }
  }

  return (
    <CoffeListContainer>
      <CoffeListHead>
        <Title>
          <h1>Nossos cafés</h1>
        </Title>
        <TagsCoffe>
          {wrapperList.map((tag) => (
            <WrapperList
              key={tag.id}
              onClick={() => handleListFiltered(tag.id)}
            >
              <ListFilter active={activeFilter.includes(tag.id)}>
                {tag.name}
              </ListFilter>
            </WrapperList>
          ))}
        </TagsCoffe>
      </CoffeListHead>
      <ListCoffeContainer>
        {dataList.length > 0 ? (
          dataList.map((coffee) => (
            <WrapperListCoffe key={coffee.id}>
              <li>
                <div className="wrapperImg">
                  <img
                    src={`./assets/${coffee.image}`}
                    alt={`Ilustração do ${coffee.name}`}
                  />
                </div>
                <div className="wrapperTags">
                  {coffee.tags.map((tag) => (
                    <span key={tag.id}>{tag.name}</span>
                  ))}
                </div>
                <ContainerDescription>
                  <h3>{coffee.name}</h3>
                  <div className="description">
                    <span>{coffee.description}</span>
                  </div>
                </ContainerDescription>
                <BuyAddCart>
                  <div className="price">
                    <span>
                      R${" "}
                      <span>
                        {coffee.price.toFixed(2).toString().replace(".", ",")}
                      </span>
                    </span>
                  </div>
                  <InputCart>
                    <InputNumberCoffe
                      id={coffee.id}
                      name={coffee.name}
                      image={coffee.image}
                      price={coffee.price}
                    />
                    <NavLink to="/checkout">
                      <Cart>
                        <ShoppingCart weight="fill" size={14} />
                      </Cart>
                    </NavLink>
                  </InputCart>
                </BuyAddCart>
              </li>
            </WrapperListCoffe>
          ))
        ) : (
          <NotFoundCoffe>
            <CircleWavyWarning color="#c47f17" weight="fill" size={38} />
            <h3>
              Não foi encontrado nenhum café através dos filtros informados!
            </h3>
          </NotFoundCoffe>
        )}
      </ListCoffeContainer>
    </CoffeListContainer>
  );
}
