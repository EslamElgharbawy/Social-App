"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Manrope",
  },
  cssVariables: true,
  breakpoints: {
    values: {
      xs: 0,
      sm: 429,
      md: 479,
      lg: 819,
      xl: 900,
    },
  },
});

export default theme;
