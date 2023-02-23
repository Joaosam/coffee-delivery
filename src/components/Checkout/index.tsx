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
  Warning,
} from "phosphor-react";
import { AdressForm } from "./components/AdressForm";
import { SectionTitle } from "./components/SectionTitle";
import { ButtonOfPayment } from "./components/ButtonOfPayment";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { toast, ToastOptions } from "react-toastify";
import { FormProvider } from "react-hook-form";
import { useForm } from "react-hook-form";
import { schema } from "./validator";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect } from "react";
import { BuyContext } from "../../contexts/BuyContext";
import { useNavigate } from "react-router-dom";

export interface InputsType {
  cep: string;
  street: string;
  number: number;
  complement: string;
  city: string;
  uf: string;
  methodPayment: string;
}

export function Checkout() {
  const formAdress = useForm<InputsType>({ resolver: yupResolver(schema) });
  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = formAdress;
  const { totalProducts, setTotalProducts } = useContext(BuyContext);
  const isMethodPaymentError = errors?.methodPayment?.message;
  const isCepError = errors?.cep;
  const isNumberError = errors?.number;
  const navigate = useNavigate();

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

  const toastOptions: ToastOptions = {
    style: { fontSize: "1.4rem" },
    theme: "light",
    autoClose: 2000,
  };
  const toastOptionsWarning: ToastOptions = {
    style: { fontSize: "1.4rem" },
    progressStyle: { background: "#c47f17" },
    icon: <Warning weight="fill" size={22} color="#c47f17" />,
    autoClose: 2000,
  };

  useEffect(() => {
    if (isCepError && isNumberError) {
      toast.error("Preencha os campos obrigatórios!", toastOptions);
    } else if (!isCepError && isNumberError) {
      toast.error(errors.number?.message, toastOptions);
    } else if (isMethodPaymentError) {
      toast.warning(errors.methodPayment?.message, toastOptionsWarning);
    }
  }, [errors]);

  function onSubmit(data: InputsType) {
    setTimeout(() => {
      toast.success("Pedido finalizado com sucesso!", toastOptions);
    }, 100);

    reset();
    setTotalProducts(totalProducts.filter((state) => state.id !== state.id));
    navigate("/orderConfirmed", {
      state: {
        data,
      },
    });
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
