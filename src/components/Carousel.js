import Slider from "react-slick";
const Carousel = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className="game__slider">
      {props.items.map((slide, index) => (
        <div
          key={slide.id}
          className="game__slider--wrapper"
          data-aos="flip-left"
          data-aos-duration="1000"
          data-aos-delay={index === 1 ? "300" : index === 2 ? "600" : ""}
        >
          <div className="game__slider--box">
            <a href={slide.link} target="blank" className="game__slider--link">
              <img src={slide.image} alt="" className="game__slider--img" />
            </a>
            <p className="game__slogan">{slide.description}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};
export default Carousel;
