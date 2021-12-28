import React from "react";

export default function About() {
  return (
    <section className="about">
      <h1 className="author">
        <img
          src="../image/profile_pic.png"
          alt="Shota Karato"
          width="400"
          height="400"
          className="author__pic"
        />
      </h1>
      <div className="about__info">
        <h2 className="about__info-name">Shota Karato</h2>
        <p className="about__info-occ">Full Stack Software Engineer</p>
        <p className="about__info-self">
          Through the experience of working as a web designer, I started growing
          interest in programming.
          <br />
          In 2021, I enrolled in a full stack engineering course to pursue my
          passion in web development and became a full-stack software engineer.
        </p>
      </div>
    </section>
  );
}
