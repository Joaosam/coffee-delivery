import { useForm } from "react-hook-form";
import { InputForm } from "../InputForm";
import { FormShipping } from "./styled";

export function AdressForm() {
  const { register, handleSubmit } = useForm();
  return (
    <FormShipping
      className="form"
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <InputForm
        placeholder="CEP"
        className="cepInput"
        type="text"
        name="cep"
      />
      <InputForm
        placeholder="Rua"
        className="streetInput"
        type="text"
        name="street"
      />
      <InputForm type="number" name="number" placeholder="Número" />
      <InputForm
        className="complementInput"
        type="text"
        name="complement"
        placeholder="Complemento"
      />
      <InputForm type="text" name="neighborhood" placeholder="Bairro" />
      <InputForm
        className="cityInput"
        type="text"
        name="city"
        placeholder="Cidade"
      />
      <InputForm className="ufInput" type="text" name="uf" placeholder="UF" />
    </FormShipping>
  );
}
