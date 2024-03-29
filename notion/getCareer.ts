import { Client } from "@notionhq/client";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { formatPeriod } from "./utils/formatPeriod";
import { NotionCareerData } from "./types";

type Career = {
  readonly id: number;
  readonly period: string;
  readonly jobTitle: string;
  readonly description?: string;
  readonly image: string;
  readonly alt: string;
}[];

export const getCareer = async (notion: Client): Promise<Career> => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_CAREER_DB_ID,
  });
  const pageIds = response.results.map((result) => result.id);
  const pages = (await Promise.all([
    ...pageIds.map(
      async (page_id) =>
        ((await notion.pages.retrieve({ page_id })) as PageObjectResponse)
          .properties
    ),
  ])) as NotionCareerData[];

  return pages
    .map((page) => ({
      id: page.id.number!,
      jobTitle: page.job_title.rich_text[0].plain_text,
      description: page.description.rich_text[0]?.plain_text ?? "",
      period: formatPeriod(page.period.date!),
      image: page.image.files[0].file.url,
      alt: page.alt.rich_text[0].plain_text,
    }))
    .sort((first, second) => first.id - second.id);
};
