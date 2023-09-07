import { slidesData } from "./constants/Costants";
import { gameData } from "./constants/Costants";
import Carousel from "./Carousel";

const Game = () => {
  return (
    <section className="game" id="game">
      <div className="container">
        <div className="game__wrapper">
          <h2 className="title game__title">Ігри</h2>

          <Carousel items={slidesData} />
        </div>
        <div className="game__wrapper">
          <h2 className="title game__title">Купи товар і допоможи ЗСУ</h2>
          <Carousel items={gameData} />
        </div>
      </div>
    </section>
  );
};
export default Game;
