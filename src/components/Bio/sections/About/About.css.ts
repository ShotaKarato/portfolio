import { style } from "@vanilla-extract/css";
import { vars } from "~/src/styles/theme.css";

export const aboutStyles = {
  about: style({
    margin: "0 0 112px",
    textAlign: "center",
    "@media": {
      "screen and (max-width: 767px)": {
        margin: "0 0 72px",
        padding: "0 12px",
      },
    },
  }),
  author: style({
    margin: "0 0 52px",
    "@media": {
      "screen and (max-width: 767px)": {
        margin: "0 0 24px",
      },
    },
  }),
  authorPic: style({
    maxWidth: "100%",
    height: "auto",
    "@media": {
      "screen and (max-width: 767px)": {
        maxWidth: "70%",
        height: "auto",
      },
    },
  }),
  info: style({
    maxWidth: "900px",
    margin: "0 auto",
  }),
  infoName: style({
    fontSize: vars.font.size.large,
    margin: "0 0 12px",
    "@media": {
      "screen and (max-width: 767px)": {
        margin: "0 0 36px",
      },
    },
  }),
  infoJob: style({
    margin: "0 0 52px",
  }),
};
