import React from "react";

export default function Career() {
  return (
    <section className="career">
      {/* <h2 className="career__heading">Education &amp; Work</h2> */}
      <h2 className="career__heading">Career</h2>
      <ul className="career__timeline">
        <li className="career__item">
          <figure className="career__item-logo">
            <img
              src="../image/education_logo01.png"
              alt="Meiji University"
              className="career__item-logo-img"
            />
          </figure>
          <div className="career__info">
            <span className="career__period">2012 - 2016</span>
            <p className="career__institute">
              B.A. in Commerce at Meiji University
            </p>
          </div>
        </li>
        <li className="career__item"></li>
        <li className="career__item"></li>
        <li className="career__item">
          <figure className="career__item-logo">
            <img
              src="../image/work_logo01.png"
              alt="Rakuten"
              className="career__item-logo-img"
            />
          </figure>
          <div className="career__info">
            <span className="career__period">2017 - 2021</span>
            <p className="career__role">Web Designer, Rakuten</p>
          </div>
        </li>
        <li className="career__item">
          <figure className="career__item-logo">
            <img
              src="../image/education_logo02.png"
              alt="Code Chrysalis"
              className="career__item-logo-img"
            />
          </figure>
          <div className="career__info">
            <span className="career__period">2021</span>
            <p className="career__institute">Code Chrysalis</p>
            <p className="career__desc">
              Full stack engineering with agile methodology
            </p>
          </div>
        </li>
        <li className="career__item"></li>
      </ul>
    </section>
  );
}
