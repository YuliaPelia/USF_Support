import React from "react";

import { servicesImg } from "./Costants";

const About = () => {
  const ImgWrapper = ({ img, name }) => {
    return (
      <li
        className="about__item"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <img className="about__picture" src={img} alt={name} />
        <span className="about__name descr">{name}</span>
      </li>
    );
  };
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="title about__title" data-aos="zoom-out-down">
          Про нас <br /> Ukraine Support Fondation
        </h2>
        <p className="about__descr descr">
          Фонд» - громадська організація , заснована У 2022 році командою
          волонтерів.. Цiлi фонду назбирати максимальну суму на допомогу ЗСУ за
          мінімальний строк.
        </p>
        <p className="about__descr descr">
          Фонд» - громадська організація , заснована У 2022 році командою
          волонтерів.. Цiлi фонду назбирати максимальну суму на допомогу ЗСУ за
          мінімальний строк.
        </p>
        <div className="about__fond">
          <ul className="about__list">
            {servicesImg.map((icon) => (
              <ImgWrapper key={icon.id} {...icon} />
            ))}
          </ul>
          <h3 className="title about__subtitle">ЗАСНОВНИКИ ФОНДУ</h3>
        </div>
      </div>
    </section>
  );
};
export default About;
