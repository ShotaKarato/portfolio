import { createTheme } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  fontSize: {
    small: "14px",
    base: "16px",
    medium: "24px",
    large: "36px",
  },
  color: {
    primary: "#ded7c6",
    light: "#ffffff",
    dark: "#000000",
  },
});
