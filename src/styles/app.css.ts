import { globalStyle } from "@vanilla-extract/css";

globalStyle("*", {
  boxSizing: "border-box",
  padding: 0,
  margin: 0,
});

globalStyle("html", {
  fontFamily: ["Rubik", "sans-serif"],
});

globalStyle("body", {
  maxWidth: 1366,
  margin: "0 auto",
  padding: "40px 10px 0",
  fontSize: "20px",
  "@media": {
    "screen and (max-width: 767px)": {
      padding: "16px 10px 0",
    },
  },
});
