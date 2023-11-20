import { TextProps } from 'react-native';
import styled from 'styled-components/native';

interface CustomProps {
  variant?: 'white' | 'black' | 'primary' | 'secondary' | 'tertiary';
  textAlign?: 'center' | 'left' | 'right' | 'justify';
}

type Props = TextProps & CustomProps;

export const Heading = styled.Text<Props>`
  font-size: ${({ theme }) => theme.font.big};
  color: ${({ theme, variant }) =>
    (variant && theme.color[variant]) || theme.color.white};
  margin-bottom: ${({ theme }) => theme.margin.medium};
  font-family: 'Righteous_400Regular';
  text-align: ${(props) => props.textAlign || 'left'};
`;

export const Text = styled.Text<Props>`
  font-size: ${({ theme }) => theme.font.small};
  color: ${({ theme, variant }) =>
    (variant && theme.color[variant]) || theme.color.white};
  font-family: 'Inter_400Regular';
  text-align: ${(props) => props.textAlign || 'left'};
`;

export const TextBold = styled.Text<Props>`
  font-size: ${({ theme }) => theme.font.default};
  color: ${({ theme, variant }) =>
    (variant && theme.color[variant]) || theme.color.white};
  font-family: 'Inter_700Bold';
  text-align: ${(props) => props.textAlign || 'left'};
`;

export const LinkText = styled.Text<Props>`
  font-size: ${({ theme }) => theme.font.small};
  text-decoration: underline;
  color: ${({ theme, variant }) =>
    (variant && theme.color[variant]) || theme.color.white};
  font-family: 'Inter_400Regular';
  text-align: ${(props) => props.textAlign || 'left'};
`;
