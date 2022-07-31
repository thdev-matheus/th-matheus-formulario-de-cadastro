import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required("O campo Nome é obrigatório")
    .matches(/^[a-záàâãéèêíïóôõöúçñ' ]+$/gi, "Digite um nome válido")
    .min(3, "Mínimo de 3 letras")
    .max(18, "Máximo de 18 letras"),

  email: yup
    .string()
    .required("O campo E-mail é obrigatório")
    .email("digite um e-mail válido"),

  password: yup
    .string()
    .required("O campo senha é Obrigatório")
    .matches(/[A-Z]/, "Ao menos 1 letra maiúscula")
    .matches(/([a-z])/, "Ao menos 1 letra minúscula")
    .matches(/(\d)/, "Ao menos 1 número")
    .matches(/(\W)/, "Ao menos 1 caracter especial")
    .matches(/.{8,}/, "Ao menos 8 dígitos"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Senhas diferentes"),
});
