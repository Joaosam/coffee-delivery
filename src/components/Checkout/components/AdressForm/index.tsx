import axios from "axios";
import { Controller, useFormContext } from "react-hook-form";

import { InputForm } from "../InputForm";
import { InputMask } from "../InputMask";
import { AdressFormContainer } from "./styled";

interface ErrorType {
  [key: string]: {
    message: string;
  };
}

export function AdressForm() {
  const { register, formState, watch, control, setValue } = useFormContext();

  const currentCep = watch("cep");
  const regexCep = /^[0-9]{5}-[0-9]{3}$/;
  const isValidCep = regexCep.test(currentCep);

  if (isValidCep) {
    axios
      .get(`https://viacep.com.br/ws/${currentCep}/json/`)
      .then((response) => {
        setValue("street", response.data.logradouro);
        setValue("neighborhood", response.data.bairro);
        setValue("city", response.data.localidade);
        setValue("uf", response.data.uf);
      });
  }

  const { errors } = formState as { errors: ErrorType };

  return (
    <AdressFormContainer>
      <InputMask
        error={errors.cep?.message}
        placeholder="CEP*"
        className="cepInput"
        type="text"
        autoComplete="off"
        {...register("cep")}
      />
      <Controller
        name="street"
        control={control}
        defaultValue={""}
        render={({ field }) => (
          <InputForm
            error={errors.street?.message}
            placeholder="Rua"
            className="streetInput"
            type="text"
            disabled
            {...field}
          />
        )}
      />
      <InputForm
        error={errors.number?.message}
        type="text"
        placeholder="Número*"
        autoComplete="off"
        {...register("number", { valueAsNumber: true })}
      />
      <InputForm
        className="complementInput"
        type="text"
        placeholder="Complemento"
        autoComplete="off"
        {...register("complement")}
      />
      <Controller
        name="neighborhood"
        control={control}
        defaultValue={""}
        render={({ field }) => (
          <InputForm
            error={errors.neighborhood?.message}
            type="text"
            placeholder="Bairro"
            disabled
            {...field}
          />
        )}
      />
      <Controller
        name="city"
        control={control}
        defaultValue={""}
        render={({ field }) => (
          <InputForm
            error={errors.city?.message}
            className="cityInput"
            type="text"
            placeholder="Cidade"
            disabled
            {...field}
          />
        )}
      />
      <Controller
        name="uf"
        control={control}
        defaultValue={""}
        render={({ field }) => (
          <InputForm
            error={errors.uf?.message}
            className="ufInput"
            type="text"
            placeholder="UF"
            disabled
            {...field}
          />
        )}
      />
    </AdressFormContainer>
  );
}
