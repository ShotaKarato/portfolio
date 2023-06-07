import { Client } from "@notionhq/client";
import { getAbout } from "./getAbout";
import { getCareer } from "./getCareer";

export const getContent = async () => {
  const notion = new Client({
    auth: process.env.NOTION_API_KEY,
  });

  const [about, career] = await Promise.all([
    getAbout(notion),
    getCareer(notion),
  ]);

  return {
    about,
    career,
  };
};
