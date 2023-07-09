import { style } from "@vanilla-extract/css";
import { vars } from "~/src/styles/theme.css";

export const overlayStyle = {
  overlay: style({
    display: "none",
  }),
  overlayOpen: style({
    position: "fixed",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    background: "rgba(0, 0, 0, 0.2)",
  }),
  container: style({
    width: "90%",
    height: "90vh",
    padding: "40px",
    backgroundColor: vars.color.light,
    borderRadius: vars.border.radius.medium,
    overflow: "scroll",
    "@media": {
      "screen and (max-width: 767px)": {
        padding: "16px",
      },
    },
  }),
  btnContainer: style({
    display: "flex",
    justifyContent: "flex-end",
    margin: "0 0 24px",
    "@media": {
      "screen and (max-width: 767px)": {
        margin: "0 0 12px",
      },
    },
  }),
  closeBtn: style({
    border: "none",
    background: "none",
    cursor: "pointer",
  }),
};
