import React from 'react';
// Styles
import * as T from '../../../layout/typography';
import * as S from './styles';
// Types
import { TouchableOpacityProps } from 'react-native';
// Utils
import { HapticsFeedback } from '../../../utils';

interface Props {
  text: string;
  color?: string;
}

type TouchableButtonProps = Props & TouchableOpacityProps;

const TouchableButton = (props: TouchableButtonProps) => {
  return (
    <S.TouchableOpacity
      {...props}
      onPress={async (event) => {
        if (!props.onPress) return null;
        await HapticsFeedback.handleImpactFeedback();
        props.onPress(event);
      }}
    >
      <T.Text variant="white">{props.text}</T.Text>
    </S.TouchableOpacity>
  );
};

export default TouchableButton;
