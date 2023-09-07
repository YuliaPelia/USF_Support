import MilitaryWithFlag from "../resources/img/military_with_flag.png";
import Helicopter from "../resources/img/helicopter.png";
import Plane from "../resources/img/plane.png";
import Help from "../resources/img/help_us.png";

const Achievement = () => {
  return (
    <section className="achievement" id="achievement">
      <div className="container">
        <h2 data-aos="fade-up" className="title achievement__title">
          Наші досягнення
        </h2>
        <div className="achievement__wrapper">
          <div
            data-aos="fade-right"
            data-aos-offset="500"
            data-aos-duration="1000"
            className="achievement__wrapper--box"
          >
            <img
              className="achievement__img--military"
              src={MilitaryWithFlag}
              alt="Military with flag"
            />{" "}
            <p className="achievement__descr--partners descr">
              За допомогою наших партнерів ,волонтерів, і бажаючих назбирали 30
              млн на гуманітарну допомогу ЗСУ.
            </p>
            <img className="achievement__img--plane" src={Plane} alt="Plane" />
          </div>
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            className="achievement__wrapper--box"
          >
            <p className="achievement__descr--create descr">
              Спільно з нашими партнерами ми створили програму “We all peopl”
              який захопив Україну, Польщу, США, Німеччину, Чехію, Канаду,
              Туреччину, Італію та Великобританію
            </p>{" "}
            <img className="achievement__img--help" src={Help} alt="Help" />
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="500"
            data-aos-duration="1000"
            className="achievement__wrapper--box"
          >
            <img
              className="achievement__img--helicopter"
              src={Helicopter}
              alt="Helicopter"
            />{" "}
            <p className="achievement__descr--together descr">
              Спільно з нашими партнерами ми створили програму “We all peopl”
              який захопив Україну, Польщу, США, Німеччину, Чехію, Канаду,
              Туреччину, Італію та Великобританію
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Achievement;
