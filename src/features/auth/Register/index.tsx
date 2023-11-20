import React from 'react';
// Components
import TouchableButton from '../../../components/TouchableButton';
import Input from '../../../components/Input';
import * as S from '../../../layout/containers';
import * as T from '../../../layout/typography';

const Register = () => {
  return (
    <S.FullScreen>
      <T.Heading>Cadastre-se para continuar</T.Heading>
      <Input placeholder="Digite seu email" label="Email" />
      <Input placeholder="Digite sua senha" label="Senha" />
      <TouchableButton text="Cadastre-se" />
    </S.FullScreen>
  );
};

export default Register;
