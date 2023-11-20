import React from 'react';
import { useFormik } from 'formik';
// Components
import { Input, LinkingButton, TouchableButton } from '../../../common';
import * as T from '../../../layout/typography';
import * as C from '../../../layout/containers';
// Types
import { RegisterValues } from './types';
import { IAuthStack } from '../../../routes/auth.routes';
// Schema
import registerSchema from './schema/registerSchema';
// Utils
import { HapticsFeedback } from '../../../utils';

const initialValues: RegisterValues = {
  photo: '',
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

interface Props {
  navigation: IAuthStack;
}

const Register = ({ navigation }: Props) => {
  const form = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log('Submit values', values);
    },
    onReset: () => {},
    validationSchema: registerSchema,
  });
  const formValues = form.values;
  const formErrors = form.errors;
  const formTouches = form.touched;
  const { handleChange, handleBlur, handleSubmit } = form;

  return (
    <C.EndContentContainer>
      <C.FormContainer animation="slideInUp" delay={500}>
        <T.Heading textAlign="center">Cadastre-se para continuar</T.Heading>
        <Input
          placeholder="Digite seu email"
          label="Email"
          value={formValues.email}
          isInvalid={!!formErrors.email && !!formTouches.email}
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          errorMessage={formErrors.email}
        />
        <Input
          placeholder="Digite sua senha"
          label="Senha"
          value={formValues.password}
          isInvalid={!!formErrors.password && !!formTouches.password}
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          errorMessage={formErrors.password}
        />
        <Input
          placeholder="Digite sua senha"
          label="Confirme a senha"
          value={formValues.confirmPassword}
          isInvalid={
            !!formErrors.confirmPassword && !!formTouches.confirmPassword
          }
          onChangeText={handleChange('confirmPassword')}
          onBlur={handleBlur('confirmPassword')}
          errorMessage={formErrors.confirmPassword}
        />
        <TouchableButton text="Cadastre-se" onPress={() => handleSubmit()} />

        <LinkingButton>
          <T.Text
            onPress={async () => {
              HapticsFeedback.handleImpactFeedback();
              navigation.navigate('login');
            }}
          >
            Já tem uma conta? <T.LinkText variant="primary">Login</T.LinkText>
          </T.Text>
        </LinkingButton>
      </C.FormContainer>
    </C.EndContentContainer>
  );
};

export default Register;
