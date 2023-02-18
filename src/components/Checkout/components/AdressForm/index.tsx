import { useFormContext } from "react-hook-form";
import { InputForm } from "../InputForm";
import { AdressFormContainer } from "./styled";

interface ErrorType {
  [key: string]: {
    message: string;
  };
}

export function AdressForm() {
  const { register, formState } = useFormContext();

  const { errors } = formState as { errors: ErrorType };
  return (
    <AdressFormContainer>
      <InputForm
        error={errors.cep?.message}
        placeholder="CEP*"
        className="cepInput"
        type="text"
        {...register("cep")}
      />
      <InputForm
        error={errors.street?.message}
        placeholder="Rua*"
        className="streetInput"
        type="text"
        {...register("street")}
      />
      <InputForm
        error={errors.street?.message}
        type="text"
        placeholder="Número*"
        {...register("number", { valueAsNumber: true })}
      />
      <InputForm
        className="complementInput"
        type="text"
        placeholder="Complemento"
        {...register("complement")}
      />
      <InputForm
        error={errors.neighborhood?.message}
        type="text"
        placeholder="Bairro*"
        {...register("neighborhood")}
      />
      <InputForm
        error={errors.city?.message}
        className="cityInput"
        type="text"
        placeholder="Cidade*"
        {...register("city")}
      />
      <InputForm
        error={errors.uf?.message}
        className="ufInput"
        type="text"
        placeholder="UF*"
        {...register("uf")}
      />
    </AdressFormContainer>
  );
}
