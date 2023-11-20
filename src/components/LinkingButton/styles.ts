import styled from 'styled-components/native';
// Types
import { TouchableOpacityProps } from 'react-native';

export const TouchableOpacity = styled.TouchableOpacity<TouchableOpacityProps>`
  background: transparent;
  margin-bottom: ${({ theme }) => theme.margin.small};
  padding: ${({ theme }) => theme.padding.small} 0px;
  width: fit-content;
  border-radius: ${({ theme }) => theme.radius.small};
  opacity: ${(props) => (props.disabled ? 0.6 : 1.0)};
`;
