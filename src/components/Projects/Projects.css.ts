import { style } from "@vanilla-extract/css";
import { vars } from "~/src/styles/theme.css";

export const projectsStyles = {
  projects: style({
    margin: "0 0 112px",
  }),
  heading: style({
    textAlign: "center",
    margin: "0 0 96px",
  }),
  container: style({
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridGap: 72,
    margin: "0 auto",
  }),
  project: style({
    maxWidth: 600,
    height: 280,
    borderRadius: 20,
    overflow: "hidden",
    boxShadow: "-4px 8px 20px -6px rgba(0, 0, 0, 0.14)",
    cursor: "pointer",
  }),
  projectBg: style({
    height: "100%",
    padding: 20,
    background: "rgba(0, 0, 0, 0.2)",
    ":hover": {
      background: "rgba(0, 0, 0, 0.25)",
    },
  }),
  projectName: style({
    color: vars.color.light,
  }),
  // &__prj-name {
  //   margin: 0 0 36px;
  //   text-align: center;
  //   font-size: 3.6rem;
  // }
  projectImageContainer: style({
    width: "70%",
    margin: "0 auto 20px",
    borderRadius: 20,
    overflow: "hidden",
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
