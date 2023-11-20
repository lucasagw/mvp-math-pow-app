import React from 'react';
// Components
import TouchableButton from '../../../components/TouchableButton';
import Input from '../../../components/Input';
import * as C from '../../../layout/containers';
import * as T from '../../../layout/typography';
import * as S from './styles';
import LinkingButton from '../../../components/LinkingButton';
// Types
import { IAuthStack } from '../../../routes/auth.routes';
import { HapticsFeedback } from '../../../utils';

interface Props {
  navigation: IAuthStack;
}

const Login = ({ navigation }: Props) => {
  return (
    <S.ContentContainer>
      <S.FormContainer>
        <T.Heading>Faça login para continuar</T.Heading>
        <Input placeholder="Digite seu email" label="Email" />
        <Input placeholder="Digite sua senha" label="Senha" />
        <LinkingButton text="Esqueceu a senha?" />
        <TouchableButton text="Logar" />
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
      </S.FormContainer>
    </S.ContentContainer>
  );
};

export default Login;
