import { Project } from "../components/Projects/types";

import projectEatable from "~/src/assets/project_eatable.png";
import projectYokohamakoen from "~/src/assets/project_yokohama-koen.png";
import projectSweed from "~/src/assets/project_sweed.png";
import projectLottery from "~/src/assets/project_lottery01.png";
import techReact from "~/src/assets/tech_react.png";
import techBootstrap from "~/src/assets/tech_bootstrap.png";
import techCss from "~/src/assets/tech_css.png";
import techExpress from "~/src/assets/tech_express.png";
import techHtml from "~/src/assets/tech_html.png";
import techJs from "~/src/assets/tech_js.png";
import techKnex from "~/src/assets/tech_knex.png";
import techNode from "~/src/assets/tech_node.png";
import techRedux from "~/src/assets/tech_redux.png";
import techRouter from "~/src/assets/tech_router.png";
import techSass from "~/src/assets/tech_sass.png";

export const projects: Project[] = [
  {
    id: 1,
    title: "Eatable",
    description:
      "Save money and the earth with Eatable. Eatable is a platform to sell and buy food that is close to its expiration date.",
    image: projectEatable,
    github: "https://github.com/eatable-jp/eatable",
    url: "",
    techStack: [
      { React: techReact },
      { "React Router": techRouter },
      { "Redux Toolkit": techRedux },
      { "Node.js": techNode },
      { "Express.js": techExpress },
      { "Knex.js": techKnex },
      { Bootstrap: techBootstrap },
    ],
  },
  {
    id: 2,
    title: "Yokohama-Koen Judicial Scrivener Office Website",
    description:
      "A brand new website for Yokohama-Koen Judicial Scrivener Office. For this website, React and React Router are used to achieve the smooth transition among pages.",
    image: projectYokohamakoen,
    github: "https://github.com/ShotaKarato/yokohama-koen",
    url: "https://yokohama-koen.netlify.app",
    techStack: [
      { React: techReact },
      { "React Router": techRouter },
      { "Redux Toolkit": techRedux },
      { Sass: techSass },
    ],
  },
  {
    id: 3,
    title: "Cafe & Bar Sweed Website",
    description:
      "A simple single page website for Cafe & Bar Sweed. The design was created with the intention of giving a warm and welcoming feeling to visiters.",
    image: projectSweed,
    github: "https://github.com/ShotaKarato/sweed",
    url: "https://www.sweed.jp",
    techStack: [
      { JavaScript: techJs },
      { HTML: techHtml },
      { CSS: techCss },
      { Sass: techSass },
    ],
  },
  {
    id: 4,
    title: "Rakuten Bank - Big Winner's Voice page",
    description:
      "Confetti on the background and vivid color schemes to bring the celebratory atmosphere. Here in this page, we share the voices of those lucky lottery winners.",
    image: projectLottery,
    github: "",
    url: "https://www.rakuten-bank.co.jp/toto/data/enquete.html",
    techStack: [{ JavaScript: techJs }, { HTML: techHtml }, { CSS: techCss }],
  },
];
