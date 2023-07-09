import { style } from "@vanilla-extract/css";
import { vars } from "~/src/styles/theme.css";

export const headerStyles = {
  header: style({
    margin: "0 0 70px",
  }),
  nav: style({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }),
  navLang: style({
    listStyle: "none",
    display: "flex",
    padding: "16px 72px",
    backgroundColor: vars.color.primary,
    borderRadius: "200px",
  }),
  navLangLink: style({
    cursor: "pointer",
    color: vars.color.light,
    fontSize: vars.font.size.base,
    fontWeight: vars.font.weight.medium,
    ":first-child": {
      margin: "0 12px 0 0",
    },
  }),
  navSns: style({
    listStyle: "none",
    display: "flex",
  }),
  navSnsItem: style({
    margin: "0",
    fontSize: 0,
    ":first-child": {
      margin: "0 12px 0 0",
    },
  }),
  navSnsLink: style({
    display: "inline-block",
  }),
  navSnsIcon: style({
    maxWidth: "100%",
    height: "auto",
    ":hover": {
      fill: vars.color.primary,
    },
  }),
};
