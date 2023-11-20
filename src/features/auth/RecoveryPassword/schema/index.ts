import * as yup from 'yup';

const recoverySchema = yup.object({
  email: yup
    .string()
    .required('email é obrigatório')
    .email('este email é inválido!')
    .trim(),
});

export default recoverySchema;
