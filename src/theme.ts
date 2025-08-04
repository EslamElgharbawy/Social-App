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
      sm: 371,
      md: 429,
      lg: 479,
      xl: 819,
    },
  },
});

export default theme;
