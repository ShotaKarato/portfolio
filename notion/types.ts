import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

type MatchType<T, K> = T extends { type: K } ? T : never;
type ExtractValueType<T> = T extends Record<string, infer P> ? P : never;

export type NotionProjectData = {
  project_title: MatchType<
    ExtractValueType<PageObjectResponse["properties"]>,
    "rich_text"
  >;
  description: MatchType<
    ExtractValueType<PageObjectResponse["properties"]>,
    "rich_text"
  >;
  image: MatchType<ExtractValueType<PageObjectResponse["properties"]>, "files">;
  github: MatchType<ExtractValueType<PageObjectResponse["properties"]>, "url">;
  url: MatchType<ExtractValueType<PageObjectResponse["properties"]>, "url">;
};

export type NotionCareerData = {
  job_title: MatchType<
    ExtractValueType<PageObjectResponse["properties"]>,
    "rich_text"
  >;
  description: MatchType<
    ExtractValueType<PageObjectResponse["properties"]>,
    "rich_text"
  >;
  period: MatchType<ExtractValueType<PageObjectResponse["properties"]>, "date">;
  image: MatchType<ExtractValueType<PageObjectResponse["properties"]>, "files">;
  alt: MatchType<
    ExtractValueType<PageObjectResponse["properties"]>,
    "rich_text"
  >;
};

export type NotionAboutData = {
  name: MatchType<
    ExtractValueType<PageObjectResponse["properties"]>,
    "rich_text"
  >;
  image: MatchType<ExtractValueType<PageObjectResponse["properties"]>, "files">;
  job_title: MatchType<
    ExtractValueType<PageObjectResponse["properties"]>,
    "rich_text"
  >;
  description: MatchType<
    ExtractValueType<PageObjectResponse["properties"]>,
    "rich_text"
  >;
};
