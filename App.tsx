import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
// Components
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { ActivityIndicator } from 'react-native';
import { RootSiblingParent } from 'react-native-root-siblings';
// Styles
import * as S from './src/layout/containers';
import theme from './src/theme/theme';
// Routes
import Routes from './src/routes';
// Fonts
import { useFonts } from 'expo-font';
import { Righteous_400Regular } from '@expo-google-fonts/righteous';
import {
  Inter_400Regular,
  Inter_300Light,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from '@expo-google-fonts/inter';
// Store
import { useAuthStore } from './src/store/auth/auth.store';

const App = () => {
  const { loadUser } = useAuthStore();

  useEffect(() => {
    loadUser();
  }, []);

  let [fontsLoaded] = useFonts({
    Righteous_400Regular,
    Inter_400Regular,
    Inter_300Light,
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator color={theme.color.primary} />;
  }

  return (
    <ThemeProvider theme={theme}>
      <RootSiblingParent>
        <S.SafeViewContainer>
          <Routes />
          <ExpoStatusBar style="auto" />
        </S.SafeViewContainer>
      </RootSiblingParent>
    </ThemeProvider>
  );
};

export default App;
