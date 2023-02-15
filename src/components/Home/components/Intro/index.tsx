import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import imageHome from "../../../../assets/Imagem.svg";
import {
  AboutSection,
  ContainerDescrition,
  DetailsDescription,
  Icons,
  IlustrationCoffe,
} from "./style";

export function Intro() {
  return (
    <AboutSection>
      <ContainerDescrition>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <h3>
          Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
          hora
        </h3>
        <DetailsDescription>
          <div className="containerBuy">
            <Icons buy>
              <ShoppingCart size={16} className="icon" weight="fill" />
            </Icons>
            <span>Compra simples e segura</span>
          </div>
          <div className="containerPackage">
            <Icons package>
              <Package size={16} className="icon" weight="fill" />
            </Icons>
            <span>Embalagem mantém o café intacto</span>
          </div>
          <div className="containerTrack">
            <Icons track>
              <Timer size={16} className="icon" weight="fill" />
            </Icons>
            <span>Entrega rápida e rastreada</span>
          </div>
          <div className="containerCoffe">
            <Icons coffe>
              <Coffee size={16} className="icon" weight="fill" />
            </Icons>
            <span>O café chega fresquinho até você</span>
          </div>
        </DetailsDescription>
      </ContainerDescrition>
      <IlustrationCoffe>
        <img
          src={imageHome}
          alt="Copo de café com graõs de café e fundo amarelo"
        />
      </IlustrationCoffe>
    </AboutSection>
  );
}
