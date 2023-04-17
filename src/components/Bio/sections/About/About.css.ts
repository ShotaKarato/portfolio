import { style } from "@vanilla-extract/css";
import { vars } from "~/src/styles/theme.css";

export const aboutStyles = {
  about: style({
    margin: "0 0 112px",
    textAlign: "center",
  }),
  author: style({
    margin: "0 0 52px",
  }),
  authorPic: style({
    maxWidth: "100%",
    height: "auto",
  }),
  info: style({
    maxWidth: "900px",
    margin: "0 auto",
  }),
  infoName: style({
    fontSize: vars.font.size.large,
    margin: "0 0 12px",
  }),
  infoJob: style({
    margin: "0 0 52px",
  }),
};
