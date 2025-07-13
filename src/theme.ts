'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Manrope',
  },
  cssVariables: true,
  breakpoints: {
    values: {
      xs: 0,
      sm: 430,
      md: 481,
      lg: 825,
      xl: 1280,
    },
  },
});

export default theme;
