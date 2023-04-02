import { useMemo } from "react";
import { CareerItem, Props as CareerItemProps } from "./CareerItem";

export const Career = () => {
  const careerList = useMemo<CareerItemProps[]>(
    () => [
      {
        period: "2012 - 2016",
        jobTitle: "明治大学 商学部商学科",
        img: "../image/education_logo01.png",
        alt: "Meiji University",
      },
      {
        period: "2017 - 2021",
        jobTitle: "楽天株式会社 Webデザイナー",
        img: "../image/work_logo01.png",
        alt: "Rakuten",
      },
      {
        period: "2021",
        jobTitle: "Code Chrysalis",
        description: "Full stack engineering with agile methodology",
        img: "../image/education_logo02.png",
        alt: "Code Chrysalis",
      },
    ],
    []
  );
  return (
    <section className="career">
      <h2 className="career__heading">Career</h2>
      <ul className="career__timeline">
        {careerList.map((props) => (
          <CareerItem key={props.jobTitle} {...props} />
        ))}
      </ul>
    </section>
  );
};
