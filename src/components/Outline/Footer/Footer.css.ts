import { style } from "@vanilla-extract/css";
import { vars } from "~/src/styles/theme.css";

export const footerStyles = {
  footer: style({
    padding: "12px 0",
    textAlign: "center",
    "@media": {
      "screen and (max-width: 767px)": {
        fontSize: vars.font.size.small,
        background: vars.color.primary,
      },
    },
  }),
};
