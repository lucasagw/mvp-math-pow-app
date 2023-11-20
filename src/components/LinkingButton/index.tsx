import React, { PropsWithChildren } from 'react';
// Styles
import * as T from '../../layout/typography';
import * as S from './styles';
// Types
import { TouchableOpacityProps } from 'react-native';
// Utils
import { HapticsFeedback } from '../../utils';

interface Props {
  text?: string;
}

type TouchableButtonProps = Props & TouchableOpacityProps & PropsWithChildren;

const LinkingButton = (props: TouchableButtonProps) => {
  return (
    <S.TouchableOpacity {...props}>
      {props.children ? props.children : <T.LinkText>{props.text}</T.LinkText>}
    </S.TouchableOpacity>
  );
};

export default LinkingButton;
