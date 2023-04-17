import { style } from "@vanilla-extract/css";
import { vars } from "~/src/styles/theme.css";

export const careerStyles = {
  career: style({
    margin: "0 0 112px",
  }),
  heading: style({
    textAlign: "center",
    margin: "0 0 72px",
  }),
  item: style({
    position: "relative",
    display: "flex",
    justifyContent: "flex-start",
    padding: "24px 0 24px 36px",
    selectors: {
      "&:nth-child(even)": {
        justifyContent: "flex-end",
      },
    },
  }),
  itemWrapper: style({
    width: "50%",
    display: "flex",
  }),
  logoImg: style({
    width: 60,
  }),
  logo: style({
    margin: "0 24px 0 0",
  }),
  job: style({
    fontSize: vars.font.size.medium,
    fontWeight: vars.font.weight.medium,
  }),
  desc: style({
    fontSize: vars.font.size.base,
  }),
};

// &__timeline {
//   position: relative;
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   list-style: none;
// }
// &__timeline::after {
//   position: absolute;
//   content: "";
//   top: 50%;
//   left: 50%;
//   transform: translateY(-50%);
//   width: 3px;
//   height: 250px;
//   background: #ded7c6;
// }
// &__item {
//   position: relative;
//   display: flex;
//   justify-content: flex-start;
//   padding: 24px 0 24px 36px;
// }
// &__item:nth-child(odd)::after {
//   position: absolute;
//   content: "";
//   width: 30px;
//   height: 30px;
//   top: 50%;
//   right: -16px;
//   transform: translateY(-50%);
//   background: #ded7c6;
//   border-radius: 100%;
// }
