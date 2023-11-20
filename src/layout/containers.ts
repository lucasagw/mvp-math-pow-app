import styled from 'styled-components/native';
import { KeyboardAvoidingView, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Platform } from 'react-native';

const STATUS_BAR_HEIGHT = StatusBar.currentHeight || 0;

export const SafeViewContainer = styled.SafeAreaView`
  flex: 1;
  margin-top: ${STATUS_BAR_HEIGHT}px;
  background-color: ${({ theme }) => theme.color.whiteAlt};
`;

export const FullScreen = styled.View`
  width: 100%;
  padding: ${({ theme }) => theme.padding.medium};
  background: ${({ theme }) => theme.color.whiteAlt};
  flex: 1;
  height: 100%;
  padding-bottom: 82px;
`;

export const FormContainer = styled(Animatable.View)`
  flex: 0.9;
  height: 100%;
  background-color: ${({ theme }) => theme.color.primary};
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

export const ScrollContainer = styled.ScrollView`
  flex: 1;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.color.whiteAlt};
`;

export const EndContentContainer = styled(KeyboardAvoidingView)`
  flex: 1;
  height: 100%;
  width: 100%;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.color.whiteAlt};
`;

export const CenterContainerHorizontal = styled.View`
  width: '100%';
  align-items: center;
  justify-content: center;
`;

export const ListWrapper = styled.FlatList`
  flex: 1;
  padding: ${({ theme }) => theme.padding.extraSmall};
  background-color: ${({ theme }) => theme.color.white};
`;

export const AnimatedView = styled(Animatable.View)`
  width: 100%;
  flex: 1;
`;
