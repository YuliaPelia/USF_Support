import Military from "../../resources/img/military.png";
const Info = () => {
  return (
    <section className="info">
      <div className="container">
        <img className="info__picture" src={Military} alt="military" />
        <article className="info__box">
          <h2 className="title info__title">Інформація про збір</h2>
          <p className="descr info__descr" data-aos="fade-left">
            Зараз наша велика і дружна команда намагається назбирати на
            байрактари,адже українська армія їх так потребує.Потрібно назбирати
            50 млн долларів.За допомогою нашої команди ми вже назбирали половину
            тож приєднуйся й допоможи армії виграти.
          </p>
          <button className="btn info__btn" data-aos="fade-up-left">
            Підтримати
          </button>
        </article>
      </div>
    </section>
  );
};

export default Info;
