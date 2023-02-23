import * as yup from "yup";

export const schema = yup.object().shape({
  cep: yup.string().required(),
  street: yup.string().required(),
  number: yup
    .number()
    .min(1, "O número deve ser maior que 0!")
    .required("Número é um campo obrigatório!")
    .typeError("Preencha o campo número corretamente!"),
  neighborhood: yup.string().required(),
  complement: yup.string(),
  city: yup.string().required(),
  uf: yup.string().required(),
  methodPayment: yup.string().required("Selecione um método de pagamento!"),
});
