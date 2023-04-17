import { Heading } from "~/src/ui/Heading";
import { aboutStyles } from "./About.css";

export type Props = {
  name: string;
  image: {
    url: string;
    width: string;
    height: string;
  };
  jobTitle: string;
  description: string;
};

export const About = ({
  name,
  image: { url, width, height },
  jobTitle,
  description,
}: Props) => (
  <section className={aboutStyles.about}>
    <Heading as="h1" className={aboutStyles.author}>
      <img
        src={url}
        alt=""
        width={width}
        height={height}
        className={aboutStyles.authorPic}
      />
    </Heading>
    <div className={aboutStyles.info}>
      <h2 className={aboutStyles.infoName}>{name}</h2>
      <p className={aboutStyles.infoJob}>{jobTitle}</p>
      <p>{description}</p>
    </div>
  </section>
);
