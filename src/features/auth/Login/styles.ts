import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const ContentContainer = styled.View`
  flex: 1;
  height: 100%;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.color.primary};
`;

export const FormContainer = styled.View`
  flex: 0.8;
  background-color: ${({ theme }) => theme.color.whiteAlt};
  padding: ${({ theme }) => theme.padding.large};
  border-radius: ${({ theme }) => theme.radius.extraLarge}
    ${({ theme }) => theme.radius.extraLarge} 0 0;
  ${Platform.select({
    ios: `
      shadow-color: #000;
      shadow-offset: 0px 4px;
      shadow-opacity: 0.1;
    `,
    android: `
      elevation: 2;
    `,
  })}
`;
