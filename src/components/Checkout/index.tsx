import {
  CheckoutContainer,
  ContainerButtonPayment,
  ContainerForm,
  ContainerPayment,
  ContentForm,
  ContentPayment,
} from "./styled";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { AdressForm } from "./components/AdressForm";
import { SectionTitle } from "./components/SectionTitle";
import { ButtonOfPayment } from "./components/ButtonOfPayment";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { toast } from "react-toastify";
import { FormProvider } from "react-hook-form";
import { useForm } from "react-hook-form";
import { schema } from "./validator";
import { yupResolver } from "@hookform/resolvers/yup";

export interface InputsType {
  cep: string;
  street: string;
  number: number;
  complement: string;
  city: string;
  uf: string;
}

export function Checkout() {
  const formAdress = useForm<InputsType>({ resolver: yupResolver(schema) });
  const { handleSubmit, reset } = formAdress;

  const dataButtonOfPayment = {
    credit: {
      icon: <CreditCard size={16} color="#8047F8" />,
      text: "Cartão de crédito",
      id: 1,
    },
    debit: {
      icon: <Bank size={16} color="#8047F8" />,
      text: "Cartão de débito",
      id: 2,
    },
    money: {
      icon: <Money size={16} color="#8047F8" />,
      text: "Dinheiro",
      id: 3,
    },
  };

  function onSubmit(data: InputsType) {
    console.log(data);
    setTimeout(() => {
      toast.success("Pedido confirmado", {
        style: { fontSize: "1.6rem" },
        theme: "light",
        autoClose: 1500,
      });
      reset();
    }, 300);
  }

  return (
    <FormProvider {...formAdress}>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <CheckoutContainer>
          <ContainerPayment>
            <ContainerForm>
              <h2>Complete seu pedido</h2>
              <ContentForm>
                <SectionTitle
                  icon={<MapPinLine size={22} color="#c47f17" />}
                  title="Endereço de Entrega"
                  subTitle="Informe seu endereço de entrega"
                />
                <AdressForm />
              </ContentForm>
            </ContainerForm>
            <ContentPayment>
              <SectionTitle
                icon={<CurrencyDollar size={22} color="#8047F8" />}
                title="Pagamento"
                subTitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
              />
              <ContainerButtonPayment>
                {Object.entries(dataButtonOfPayment).map(([key, item]) => (
                  <ButtonOfPayment
                    key={item.id}
                    icon={item.icon}
                    text={item.text}
                    id={item.id}
                  />
                ))}
              </ContainerButtonPayment>
            </ContentPayment>
          </ContainerPayment>
          <SelectedCoffees />
        </CheckoutContainer>
      </form>
    </FormProvider>
  );
}
