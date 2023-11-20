import * as yup from 'yup';

const registerSchema = yup.object({
  photo: yup.string().nullable().trim(),
  email: yup
    .string()
    .required('email é obrigatório')
    .email('este email é inválido!')
    .trim(),
  password: yup.string().required('senha é obrigatória').trim(),
  confirmPassword: yup
    .string()
    .required('é necessário informa a senha')
    .trim()
    .test('password-match', 'as senhas não são iguais', function (value) {
      return this.parent.password === value;
    }),
});

export default registerSchema;
