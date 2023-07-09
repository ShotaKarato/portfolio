export type Project = {
  readonly title: string;
  readonly description: string;
  readonly image: {
    readonly url: string;
    readonly width: number;
    readonly height: number;
  };
  readonly imageSmall: {
    readonly url: string;
    readonly width: number;
    readonly height: number;
  };
  readonly alt: string;
  readonly github: string;
  readonly url: string;
  readonly techStack: readonly {
    readonly [key: string]: string;
  }[];
};
