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
      sm: 361,
      md: 431,
      lg: 481,
      xl: 819,
    },
  },
});

export default theme;
