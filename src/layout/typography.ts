import { TextProps } from 'react-native';
import styled from 'styled-components/native';

interface CustomProps {
  variant?: 'white' | 'black';
}

type Props = TextProps & CustomProps;

export const Heading = styled.Text<Props>`
  font-size: ${({ theme }) => theme.font.big};
  color: ${({ theme }) => theme.color.black};
`;

export const Text = styled.Text<Props>`
  font-size: ${({ theme }) => theme.font.default};
  color: ${({ theme, variant }) =>
    (variant && theme.color[variant]) || theme.color.black};
`;
