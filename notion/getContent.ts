import { Client } from "@notionhq/client";
import { getAbout } from "./getAbout";
import { getCareer } from "./getCareer";
import { getProjects } from "./getProjects";

export const getContent = async () => {
  const notion = new Client({
    auth: process.env.NOTION_API_KEY,
  });

  const [about, career, projects] = await Promise.all([
    getAbout(notion),
    getCareer(notion),
    getProjects(notion),
  ]);

  return {
    about,
    career,
    projects,
  };
};
