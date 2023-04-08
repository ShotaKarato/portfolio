import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const headerStyles = {
  header: style({
    margin: "0 0 70px",
  }),
  headerNav: style({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }),
  headerNavLang: style({
    listStyle: "none",
    display: "flex",
    padding: "16px 72px",
    backgroundColor: vars.color.primary,
    borderRadius: "200px",
  }),
  headerNavLangLink: style({
    cursor: "pointer",
    color: vars.color.light,
    fontSize: vars.font.size.base,
    fontWeight: vars.font.weight.medium,
    ":first-child": {
      margin: "0 12px 0 0",
    },
  }),
  headerNavSns: style({
    listStyle: "none",
    display: "flex",
    padding: "16px",
  }),
  headerNavSnsItem: style({
    margin: "0",
    fontSize: 0,
    ":first-child": {
      margin: "0 12px 0 0",
    },
  }),
  headerNavSnsLink: style({
    display: "inline-block",
  }),
  headerNavSnsIcon: style({
    maxWidth: "100%",
    height: "auto",
    ":hover": {
      fill: vars.color.primary,
    },
  }),
};
