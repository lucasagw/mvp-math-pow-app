import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

const STATUS_BAR_HEIGHT = StatusBar.currentHeight || 0;

export const SafeViewContainer = styled.SafeAreaView`
  flex: 1;
  margin-top: ${STATUS_BAR_HEIGHT}px;
`;

export const FullScreen = styled.View`
  width: 100%;
  padding: ${({ theme }) => theme.padding.medium};
  background: ${({ theme }) => theme.color.white};
  flex: 1;
  height: 100%;
`;
