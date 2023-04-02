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
    fontWeight: 500,
    fontSize: vars.fontSize.base,
  }),
  headerNavSns: style({
    listStyle: "none",
    display: "flex",
    padding: "16px",
  }),
  headerNavSnsItem: style({
    margin: "0 12px 0 0",
    fontSize: 0,
  }),
  headerNavSnsLink: style({
    display: "inline-block",
  }),
  headerNavSnsIcon: style({
    maxWidth: "100%",
    height: "auto",
  }),
};
