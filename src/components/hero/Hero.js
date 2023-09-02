// Ваш код

import "animate.css/animate.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="overlay">
        <div className="container">
          <h1 className="title hero__title">Ukraine Support</h1>
          <h2 className="title hero__subtitle">Fondation</h2>
          <p className="descr hero__descr">
            Фонд» - громадська організація , заснована У 2022 році командою
            волонтерів.. Цiлi фонду назбирати максимальну суму на допомогу ЗСУ
            за мінімальний строк.
          </p>
          <button className="btn hero__btn" data-aos="fade-up">
            Підтримати
          </button>
          <div className="hero__start">
            <span className="hero__text">Get started</span>
            <i className="fa-solid fa-chevron-down fa-beat hero__icon"></i>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
