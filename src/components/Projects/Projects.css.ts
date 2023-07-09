import { createVar, style } from "@vanilla-extract/css";
import { vars } from "~/src/styles/theme.css";

export const bgImageStyle = {
  bgImage: createVar(),
  bgSize: createVar(),
  bgImagePosition: createVar(),
  bgImageRepeat: createVar(),
};

export const projectsStyles = {
  projects: style({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "0 12px 112px",
    "@media": {
      "screen and (max-width: 767px)": {
        margin: "0 0 72px",
        padding: "0 12px",
      },
    },
  }),
  heading: style({
    textAlign: "center",
    margin: "0 0 96px",
    "@media": {
      "screen and (max-width: 767px)": {
        margin: "0 0 60px",
      },
    },
  }),
  container: style({
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridGap: 72,
    margin: "0 auto",
    "@media": {
      "screen and (max-width: 767px)": {
        display: "grid",
        gridTemplateColumns: "1fr",
        gridGap: "36px",
      },
    },
  }),
  project: style({
    maxWidth: 600,
    height: 280,
    borderRadius: 20,
    overflow: "hidden",
    boxShadow: "-4px 8px 20px -6px rgba(0, 0, 0, 0.14)",
    cursor: "pointer",
    backgroundImage: bgImageStyle.bgImage,
    backgroundSize: bgImageStyle.bgSize,
    backgroundPosition: bgImageStyle.bgImagePosition,
    backgroundRepeat: bgImageStyle.bgImageRepeat,
    "@media": {
      "screen and (max-width: 767px)": {
        height: "200px",
        borderRadius: "12px",
      },
    },
  }),
  projectCardBg: style({
    height: "100%",
    padding: 20,
    background: "rgba(0, 0, 0, 0.2)",
    ":hover": {
      background: "rgba(0, 0, 0, 0.25)",
    },
  }),
  projectCardTitle: style({
    color: vars.color.light,
  }),
  projectName: style({
    margin: "0 0 36px",
    textAlign: "center",
    fontSize: vars.font.size.large,
    "@media": {
      "screen and (max-width: 767px)": {
        fontSize: vars.font.size.medium,
      },
    },
  }),
  projectImageContainer: style({
    width: "70%",
    margin: "0 auto 20px",
    borderRadius: 20,
    overflow: "hidden",
    "@media": {
      "screen and (max-width: 767px)": {
        display: "flex",
        justifyContent: "center",
        width: "100%",
      },
    },
  }),
  projectImage: style({
    maxWidth: "100%",
    height: "auto",
  }),
  projectDescription: style({
    margin: "0 0 20px",
  }),
  projectTechsHeading: style({
    margin: "0 0 12px",
  }),
  projectTechs: style({
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    margin: "0 0 36px",
  }),
  projectTechIcon: style({
    margin: "0 24px 24px 0",
    width: "auto",
    maxHeight: 50,
    ":last-child": {
      margin: "0 0 24px",
    },
  }),
};
