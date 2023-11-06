import React from 'react';
// Components
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
// Styles
import * as S from './src/layout/containers';

const App = () => {
  return (
    <S.SafeViewContainer>
      <Text>Open up App.tsx to start working on your app!</Text>
      <ExpoStatusBar style="auto" />
    </S.SafeViewContainer>
  );
};

export default App;
