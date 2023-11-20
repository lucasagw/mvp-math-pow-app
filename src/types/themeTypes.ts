import theme from '../theme/theme';

export type sizes =
  | 'extraSmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'extraLarge'
  | '';

export const colors = typeof theme.color;
