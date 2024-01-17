import React from 'react';
// Components
import { ActivityIndicator } from 'react-native';
// Styles
import * as T from '../../../layout/typography';
import * as S from './styles';
// Types
import { TouchableOpacityProps } from 'react-native';
// Utils
import { HapticsFeedback } from '../../../utils';
import theme from '../../../theme/theme';

interface Props {
  text: string;
  color?: string;
  isLoading?: boolean;
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
      {props.isLoading ? (
        <ActivityIndicator color={theme.color.white} />
      ) : (
        <T.Text variant="white">{props.text}</T.Text>
      )}
    </S.TouchableOpacity>
  );
};

export default TouchableButton;
