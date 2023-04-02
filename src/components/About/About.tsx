import { useMemo } from "react";

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
    <section className="about">
      <h1 className="author">
        <img
          src={about.img}
          alt={about.alt}
          width={about.width}
          height={about.height}
          className="author__pic"
        />
      </h1>
      <div className="about__info">
        <h2 className="about__info-name">{about.name}</h2>
        <p className="about__info-occ">{about.jobTitle}</p>
        <p className="about__info-self">{about.bio}</p>
      </div>
    </section>
  );
};
