import React from 'react';
import { Platform } from 'react-native';
import { useFormik } from 'formik';
// Components
import * as T from '../../../layout/typography';
import * as C from '../../../layout/containers';
import {
  TouchableButton,
  ImageComponent,
  LinkingButton,
  Input,
} from '../../../common';
// Types
import { IAuthStack } from '../../../routes/auth.routes';
import { LoginValues } from './types';
// Schema
import loginSchema from './schema/loginSchema';
// Utils
import { HapticsFeedback } from '../../../utils';
// Assets
import { octopusCircle } from '../../../common/assets/images';
// Store
import { useAuthStore } from '../../../store/auth/auth.store';

interface Props {
  navigation: IAuthStack;
}

const initialValues: LoginValues = {
  email: '',
  password: '',
};

const Login = ({ navigation }: Props) => {
  const { isLoading, login } = useAuthStore();
  const form = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: ({ email, password }) => login(email, password),
    onReset: () => {},
  });

  const formValues = form.values;
  const formErrors = form.errors;
  const formTouches = form.touched;
  const { handleChange, handleBlur, handleSubmit } = form;

  return (
    <C.EndContentContainer
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <C.CenterContainerHorizontal>
        <ImageComponent
          source={octopusCircle}
          resizeMode="contain"
          width={150}
          height={150}
          mb="medium"
        />
      </C.CenterContainerHorizontal>

      <C.FormContainer animation="slideInUp" delay={500}>
        <T.Heading textAlign="center" variant="white">
          Faça login para continuar
        </T.Heading>
        <Input
          placeholder="Digite seu email"
          label="Email"
          value={formValues.email}
          onChangeText={handleChange('email')}
          isInvalid={!!formErrors.email && !!formTouches.email}
          onBlur={handleBlur('email')}
          errorMessage={form.errors.email}
        />
        <Input
          placeholder="Digite sua senha"
          label="Senha"
          secureTextEntry
          value={formValues.password}
          onChangeText={handleChange('password')}
          isInvalid={!!formErrors.password && !!formTouches.password}
          onBlur={handleBlur('password')}
          errorMessage={form.errors.password}
        />
        <LinkingButton
          text="Esqueceu a senha?"
          onPress={async () => {
            HapticsFeedback.handleImpactFeedback();
            navigation.navigate('recovery');
          }}
        />
        <TouchableButton
          disabled={isLoading}
          isLoading={isLoading}
          text="Logar"
          onPress={() => handleSubmit()}
        />
        <LinkingButton>
          <T.Text
            onPress={async () => {
              HapticsFeedback.handleImpactFeedback();
              navigation.navigate('register');
            }}
          >
            Não tem uma conta?{' '}
            <T.LinkText variant="primary">Cadastre-se</T.LinkText>
          </T.Text>
        </LinkingButton>
      </C.FormContainer>
    </C.EndContentContainer>
  );
};

export default Login;
