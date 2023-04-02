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
  margin: 0,
  fontSize: "2rem",
});
