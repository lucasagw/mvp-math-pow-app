import React, { useMemo } from 'react';
// Components
import { Animated, Easing } from 'react-native';
// Styles
import * as S from './styles';
// Types
import type { EasingFunction, TextInputProps } from 'react-native';

interface Props {
  label: string;
  isInvalid: boolean;
  errorMessage?: string;
}

type InputProps = Props & TextInputProps;

const Input = (props: InputProps) => {
  let opacity = new Animated.Value(0);

  const animate = (easing: EasingFunction) => {
    opacity.setValue(0);
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1200,
      easing,
      useNativeDriver: true,
    }).start();
  };
  const size = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 80],
  });

  const animatedStyles = [
    {
      opacity,
    },
  ];

  useMemo(() => {
    animate(Easing.bounce);
  }, [props.isInvalid]);

  return (
    <Animated.View style={animatedStyles}>
      <S.Container>
        <S.Label isInvalid={props.isInvalid}>{props.label}</S.Label>
        <S.TextInput {...props} />
        {props.isInvalid && props.errorMessage && (
          <S.ErrorText>{props.errorMessage}</S.ErrorText>
        )}
      </S.Container>
    </Animated.View>
  );
};

export default Input;
