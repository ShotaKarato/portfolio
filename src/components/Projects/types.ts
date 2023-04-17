export type Project = {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly github: string;
  readonly url: string;
  readonly techStack: readonly {
    readonly [key: string]: string;
  }[];
};
