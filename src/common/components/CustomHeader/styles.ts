import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const HeaderWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.whiteAlt};
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.color.primary};
  width: 100%;
  min-height: 64px;
  display: flex;
  padding: ${({ theme }) => `${theme.padding.small} ${theme.padding.medium}`};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 0 0 40px 40px;
  ${Platform.select({
    ios: `
      shadow-color: #000;
      shadow-offset: 0px 4px;
      shadow-opacity: 0.1;
    `,
    android: `
      elevation: 1;
    `,
  })}
`;

export const HeaderAvatar = styled.View`
  height: 42px;
  width: 42px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 21px;
`;

export const HeaderInfo = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  gap: ${({ theme }) => theme.margin.small};
`;
