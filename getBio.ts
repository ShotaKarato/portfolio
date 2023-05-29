import { Client } from "@notionhq/client";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export const getBio = async () => {
  const notion = new Client({
    auth: import.meta.env.VITE_NOTION_API_KEY,
  });
  console.log(import.meta.env.VITE_NOTION_API_KEY);
  const response = await notion.databases.query({
    database_id: import.meta.env.VITE_NOTION_BIO_DB_ID,
  });

  const id = response.results[0].id;
  const properties = (
    (await notion.pages.retrieve({ page_id: id })) as PageObjectResponse
  ).properties;
  const bio: any = {};

  for (const key in properties) {
    switch (properties[key].type) {
      case "rich_text":
        bio[key] = properties[key].rich_text[0].plain_text;
        break;
      case "files":
        bio[key] = {
          url: properties[key].files[0].file.url,
          width: 400,
          height: 400,
        };
        break;
    }
  }

  return bio;
};
