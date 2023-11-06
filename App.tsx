import React from 'react';
// Components
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
// Styles
import * as S from './src/layout/containers';
import theme from './src/theme/theme';
import Home from './src/screens/Home';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <S.SafeViewContainer>
        <Home />
        <ExpoStatusBar style="auto" />
      </S.SafeViewContainer>
    </ThemeProvider>
  );
};

export default App;
