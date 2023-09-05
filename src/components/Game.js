import Slider from "react-slick";
import { slidesData } from "./constants/Costants";

const Game = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <section className="game">
      <div className="container">
        <h2 className="title game__title">Ігри</h2>

        {/* <button className="game__btn"></button> */}
        <Slider {...settings} className="game__slider">
          {slidesData.map((slide) => (
            <div className="game__slider--wrapper">
              {" "}
              <div key={slide.id} className="game__slider--box">
                <a
                  href="https://goit.global/ua-ru/"
                  target="blank"
                  className="game__slider--link"
                >
                  <img src={slide.image} alt="" className="game__slider--img" />
                </a>
                <p className="game__slogan">{slide.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
export default Game;
