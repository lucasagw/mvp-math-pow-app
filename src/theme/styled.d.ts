import 'styled-components/native';
import theme from './theme';

export type ITheme = typeof theme;

declare module 'styled-components/native' {
  export interface DefaultTheme extends ITheme {}
}
