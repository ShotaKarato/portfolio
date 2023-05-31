export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NOTION_API_KEY: string;
      NOTION_BIO_DB_ID: string;
      NOTION_CAREER_DB_ID: string;
      NOTION_PROJECTS_DB_ID: string;
      PORT: number;
    }
  }
}
