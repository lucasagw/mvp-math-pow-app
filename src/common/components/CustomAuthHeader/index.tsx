import React from 'react';
// Components
import * as C from './styles';
// Icons
import { Ionicons } from '@expo/vector-icons';
// Theme
import theme from '../../../theme/theme';
// Types
import { StackHeaderProps } from '@react-navigation/stack';

type Props = StackHeaderProps;

const CustomAuthHeader = ({ navigation }: Props) => {
  const canGoBack = navigation.canGoBack();
  const handleGoBack = () => {
    if (!canGoBack) return;
    navigation.goBack();
  };
  return (
    <C.AuthHeaderWrapper>
      <C.AuthHeader>
        {canGoBack && (
          <C.AuthHeaderButton onPress={handleGoBack}>
            <Ionicons name="arrow-back" color={theme.color.primary} size={20} />
          </C.AuthHeaderButton>
        )}
      </C.AuthHeader>
    </C.AuthHeaderWrapper>
  );
};

export default CustomAuthHeader;
