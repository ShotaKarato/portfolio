import { Client } from "@notionhq/client";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export type Projects = {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly github: string;
  readonly url: string;
  readonly techStack: readonly {
    readonly [key: string]: string;
  }[];
}[];

export const getProjects = async (notion: Client): Promise<Projects> => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_PROJECTS_DB_ID,
  });

  const pageIds = response.results.map((result) => result.id);

  const pages = await Promise.all([
    ...pageIds.map(
      async (page_id) =>
        ((await notion.pages.retrieve({ page_id })) as PageObjectResponse)
          .properties
    ),
  ]);

  return pages.map((page) => ({
    id: page.id.unique_id.number,
    title: page.project_title.rich_text[0].plain_text,
    description: page.description.rich_text[0].plain_text,
    image: page.image.files[0].file.url,
    github: page.github.url ?? "",
    url: page.url.url ?? "",
    techStack: [
      {
        test: "test",
      },
    ],
  }));
};