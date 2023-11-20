import React from 'react';
// Components
import * as S from './styles';
import { ImageResizeMode, ImageSourcePropType, Dimensions } from 'react-native';
// Types
import { sizes } from '../../types';

interface Props {
  resizeMode: ImageResizeMode;
  source: ImageSourcePropType;
  width: number;
  height: number;
  mb?: sizes;
  ml?: sizes;
  mr?: sizes;
  mt?: sizes;
}

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const ImageComponent = ({
  resizeMode,
  source,
  width = screenWidth / 2,
  height = screenHeight / 2,
  mb,
  ml,
  mr,
  mt,
}: Props) => {
  return (
    <S.ImageContainer
      resizeMode={resizeMode}
      source={source}
      width={width}
      height={height}
      mb={mb}
      ml={ml}
      mr={mr}
      mt={mt}
    />
  );
};

export default ImageComponent;
