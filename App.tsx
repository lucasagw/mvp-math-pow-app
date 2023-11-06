import React from 'react';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
// Components
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
// Styles
import * as S from './src/layout/containers';
import theme from './src/theme/theme';
// Routes
import Routes from './src/routes';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <S.SafeViewContainer>
        <Routes />
        <ExpoStatusBar style="auto" />
      </S.SafeViewContainer>
    </ThemeProvider>
  );
};

export default App;
