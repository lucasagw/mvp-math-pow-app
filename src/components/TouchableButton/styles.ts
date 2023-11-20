import styled from 'styled-components/native';
// Types
import { TouchableOpacityProps } from 'react-native';

export const TouchableOpacity = styled.TouchableOpacity<TouchableOpacityProps>`
  background: ${({ theme }) => theme.color.tertiary};
  padding: ${({ theme }) => theme.padding.small};
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radius.small};
  opacity: ${(props) => (props.disabled ? 0.6 : 1.0)};
`;
