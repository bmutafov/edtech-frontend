import materialUITheme from '../config/materialUITheme';

interface ThemeSpacing {
  $1: 1;
  $2: 2;
  $3: 3;
  $4: 4;
  $5: 5;
  $6: 6;
  $7: 7;
  $8: 8;
  $9: 9;
  $10: 10;
}

const spacing: ThemeSpacing = {
  $1: 1,
  $2: 2,
  $4: 4,
  $3: 3,
  $5: 5,
  $6: 6,
  $7: 7,
  $8: 8,
  $9: 9,
  $10: 10,
};

export const theme = {
  spacing,
  colors: materialUITheme.palette,
};
