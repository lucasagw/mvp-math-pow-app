import { Platform } from 'react-native';
import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const FaqCardWrapper = styled.TouchableOpacity`
  width: 100%;
  background-color: ${({ theme }) => theme.color.whiteAlt};
  min-height: 36px;
  border-radius: ${({ theme }) => theme.radius.small};
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

  padding: ${({ theme }) => theme.padding.small};
`;

export const FaqCardHeader = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const FaqCardBody = styled(Animatable.View)`
  width: 100%;
  word-wrap: break-word;
`;

export const FaqCardFooter = styled.View`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  flex-direction: row;
`;

export const FaqCardButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
