import React from 'react';
import { Platform } from 'react-native';
import { useFormik } from 'formik';
// Components
import TouchableButton from '../../../components/TouchableButton';
import Input from '../../../components/Input';
import * as T from '../../../layout/typography';
import * as C from '../../../layout/containers';
import LinkingButton from '../../../components/LinkingButton';
// Types
import { IAuthStack } from '../../../routes/auth.routes';
import { RecoveryValues } from './types';
// Schema
import recoverySchema from './schema';
// Utils
import { HapticsFeedback } from '../../../utils';

interface Props {
  navigation: IAuthStack;
}

const initialValues: RecoveryValues = {
  email: '',
};

const Recovery = ({ navigation }: Props) => {
  const form = useFormik({
    initialValues,
    validationSchema: recoverySchema,
    onSubmit: (values) => {
      console.log('Submit values', values);
    },
    onReset: () => {},
  });

  const formValues = form.values;
  const formErrors = form.errors;
  const formTouches = form.touched;
  const { handleChange, handleBlur, handleSubmit } = form;

  return (
    <C.EndContentContainer>
      <C.FormContainer animation="slideInUp" delay={500}>
        <T.Heading textAlign="center">Recuperar senha</T.Heading>
        <T.Text textAlign="justify">
          Enviaremos-lhe um email contendo as instruções para recuperar a sua
          senha
        </T.Text>
        <Input
          placeholder="Digite seu email"
          label="Email"
          value={formValues.email}
          onChangeText={handleChange('email')}
          isInvalid={!!formErrors.email && !!formTouches.email}
          onBlur={handleBlur('email')}
          errorMessage={form.errors.email}
        />
        <TouchableButton text="Enviar" onPress={() => handleSubmit()} />
      </C.FormContainer>
    </C.EndContentContainer>
  );
};

export default Recovery;
