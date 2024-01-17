import React from 'react';
import { useFormik } from 'formik';
// Components
import {
  ImageComponent,
  Input,
  LinkingButton,
  TouchableButton,
} from '../../../common';
import * as T from '../../../layout/typography';
import * as C from '../../../layout/containers';
// Types
import { RegisterValues } from './types';
import { IAuthStack } from '../../../routes/auth.routes';
// Schema
import registerSchema from './schema/registerSchema';
// Utils
import { HapticsFeedback } from '../../../utils';
// Images
import { octopusCircle } from '../../../common/assets/images';
import { useAuthStore } from '../../../store/auth/auth.store';

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
  const { isLoading, register } = useAuthStore();
  const form = useFormik({
    initialValues,
    onSubmit: ({ email, password }) => register(email, password),
    validationSchema: registerSchema,
  });
  const formValues = form.values;
  const formErrors = form.errors;
  const formTouches = form.touched;
  const { handleChange, handleBlur, handleSubmit } = form;

  return (
    <C.EndContentContainer>
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
          secureTextEntry
          value={formValues.password}
          isInvalid={!!formErrors.password && !!formTouches.password}
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          errorMessage={formErrors.password}
        />
        <Input
          placeholder="Digite sua senha"
          secureTextEntry
          label="Confirme a senha"
          value={formValues.confirmPassword}
          isInvalid={
            !!formErrors.confirmPassword && !!formTouches.confirmPassword
          }
          onChangeText={handleChange('confirmPassword')}
          onBlur={handleBlur('confirmPassword')}
          errorMessage={formErrors.confirmPassword}
        />
        <TouchableButton
          text="Cadastre-se"
          isLoading={isLoading}
          disabled={isLoading}
          onPress={() => handleSubmit()}
        />

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
