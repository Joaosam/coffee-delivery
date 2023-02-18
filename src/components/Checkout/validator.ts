import * as yup from "yup";

const cepRegex = /^\d{5}-\d{3}$/;

export const schema = yup.object().shape({
  cep: yup
    .string()
    .required("Campo obrigatório")
    .matches(cepRegex, "CEP inválido"),
  street: yup.string().required("Campo obrigatório"),
  number: yup.number().required("Campo obrigatório"),
  neighborhood: yup.string().required("Campo obrigatório"),
  complement: yup.string(),
  city: yup.string().required("Campo obrigatório"),
  uf: yup.string().required("Campo obrigatório").max(2, "UF inválido"),
});
