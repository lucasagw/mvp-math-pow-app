import { TextInputProps } from 'react-native';
import styled from 'styled-components/native';

interface ErrorProps {
  isInvalid?: boolean;
}

interface Props {
  label: string;
  isInvalid?: boolean;
}

type InputProps = TextInputProps & Props;

export const TextInput = styled.TextInput<InputProps>`
  width: 100%;
  background: ${({ theme }) => theme.color.white};
  padding: ${({ theme }) => theme.padding.small};
  border-radius: ${({ theme }) => theme.radius.small};
  border: 1px solid
    ${({ theme, isInvalid }) =>
      isInvalid ? theme.color.red : theme.color.black};
`;

export const Label = styled.Text<ErrorProps>`
  font-size: ${({ theme }) => theme.font.default};
  font-weight: 700;
  color: ${({ theme, isInvalid }) =>
    isInvalid ? theme.color.red : theme.color.black};
  margin-bottom: ${({ theme }) => theme.margin.small};
`;

export const ErrorText = styled.Text`
  font-size: ${({ theme }) => theme.font.default};
  font-weight: 400;
  color: ${({ theme }) => theme.color.red};
`;

export const Container = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.margin.medium};
`;
