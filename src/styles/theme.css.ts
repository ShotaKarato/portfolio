import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  font: {
    size: {
      small: "14px",
      base: "16px",
      medium: "24px",
      large: "36px",
    },
    weight: {
      medium: "500",
      bold: "700",
    },
  },
  color: {
    primary: "#ded7c6",
    light: "#ffffff",
    dark: "#000000",
  },
});
