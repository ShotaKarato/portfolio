import { Client } from "@notionhq/client";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

type Bio = {
  name: string;
  image: {
    url: string;
    width: string;
    height: string;
  };
  jobTitle: string;
  description: string;
};

export const getAbout = async (notion: Client): Promise<Bio> => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_BIO_DB_ID,
  });

  const id = response.results[0].id;

  const properties = (
    (await notion.pages.retrieve({ page_id: id })) as PageObjectResponse
  ).properties;

  return {
    name: properties.name.rich_text[0].plain_text,
    image: {
      url: properties.image.files[0].file.url,
      width: "400",
      height: "400",
    },
    jobTitle: properties.job_title.rich_text[0].plain_text,
    description: properties.description.rich_text[0].plain_text,
  };
};
