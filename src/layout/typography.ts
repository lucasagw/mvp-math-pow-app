import { TextProps } from 'react-native';
import styled from 'styled-components/native';

interface CustomProps {
  variant?: 'white' | 'black' | 'primary' | 'secondary' | 'tertiary';
}

type Props = TextProps & CustomProps;

export const Heading = styled.Text<Props>`
  font-size: ${({ theme }) => theme.font.big};
  color: ${({ theme, variant }) =>
    (variant && theme.color[variant]) || theme.color.black};
  margin-bottom: ${({ theme }) => theme.margin.medium};
  font-family: 'Righteous_400Regular';
`;

export const Text = styled.Text<Props>`
  font-size: ${({ theme }) => theme.font.default};
  color: ${({ theme, variant }) =>
    (variant && theme.color[variant]) || theme.color.black};
  font-family: 'Inter_400Regular';
`;

export const TextBold = styled.Text<Props>`
  font-size: ${({ theme }) => theme.font.default};
  color: ${({ theme, variant }) =>
    (variant && theme.color[variant]) || theme.color.black};
  font-family: 'Inter_700Bold';
`;

export const LinkText = styled.Text<Props>`
  font-size: ${({ theme }) => theme.font.default};
  text-decoration: underline;
  color: ${({ theme, variant }) =>
    (variant && theme.color[variant]) || theme.color.black};
  font-family: 'Inter_400Regular';
`;
