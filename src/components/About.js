import React, { useContext } from "react";
import { LangContext } from "../App";

export default function About() {
  const {
    state: { lang },
  } = useContext(LangContext);
  return lang === "en" ? (
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
  ) : (
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
          楽天株式会社に入社後、同社銀行部門のWebデザインチームにて約2年半程Webデザイナーとして勤務をしてきました。
          <br />
          2021年8月末に楽天を退職し、都内の学校にてReactやNodeを使ったフルスタックのアプリケーション開発を学び、現在はReact・Typescript・GraphQLなどを使ったアプリ開発を行なっています。
        </p>
      </div>
    </section>
  );
}
