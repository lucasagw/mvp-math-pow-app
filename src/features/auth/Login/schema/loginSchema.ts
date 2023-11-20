import * as yup from 'yup';

const loginSchema = yup.object({
  email: yup
    .string()
    .required('email é obrigatório')
    .email('este email é inválido!')
    .trim(),
  password: yup.string().required('senha é obrigatória').trim(),
});

export default loginSchema;
