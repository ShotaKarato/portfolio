import { useMemo } from "react";
import { Heading } from "../../ui/Heading";
import { aboutStyles } from "./About.css";

export const About = () => {
  const about = useMemo(
    () => ({
      img: "../image/profile_pic.png",
      alt: "Shota Karato",
      width: "400",
      height: "400",
      name: "Shota Karato",
      jobTitle: "Full Stack Software Engineer",
      bio: "Through the experience of working as a web designer, I started growing interest in programming. In 2021, I enrolled in a full stack engineering course to pursue my passion in web development and became a full-stack software engineer.",
    }),
    []
  );

  return (
    <section className={aboutStyles.about}>
      <Heading as="h1" className={aboutStyles.author}>
        <img
          src={about.img}
          alt={about.alt}
          width={about.width}
          height={about.height}
          className={aboutStyles.authorPic}
        />
      </Heading>
      <div className={aboutStyles.info}>
        <h2 className={aboutStyles.infoName}>{about.name}</h2>
        <p className={aboutStyles.infoJob}>{about.jobTitle}</p>
        <p>{about.bio}</p>
      </div>
    </section>
  );
};
