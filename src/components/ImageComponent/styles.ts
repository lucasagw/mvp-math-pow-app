import { ImageProps } from 'react-native';
import styled from 'styled-components/native';
// Types
import { sizes } from './../../types/themeTypes';

interface Props {
  width?: number;
  height?: number;
  mb?: sizes;
  ml?: sizes;
  mr?: sizes;
  mt?: sizes;
}

type CustomProps = ImageProps & Props;

export const ImageContainer = styled.Image<CustomProps>`
  width: ${({ width }) => (width ? `${width}px` : 'auto')};
  height: ${({ height }) => (height ? `${height}px` : 'auto')};
  ${(props) => {
    if (props.mb) {
      return `margin-bottom: ${props.theme['margin'][props.mb]};`;
    }
    if (props.ml) {
      return `margin-left: ${props.theme['margin'][props.ml]};`;
    }
    if (props.mr) {
      return `margin-right:  ${props.theme['margin'][props.mr]};`;
    }
    if (props.mt) {
      return `margin-top:  ${props.theme['margin'][props.mt]};`;
    }
  }}
`;
