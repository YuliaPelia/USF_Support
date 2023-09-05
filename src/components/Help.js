import MilitaryHelp from "../resources/img/military_help.png";
import HumanitarianHelp from "../resources/img/humanitarian_help.png";

const Help = () => {
  return (
    <section className="help" id="help">
      <div className="container">
        <h2 className="title help__title" data-aos="zoom-in">
          Підтримай армію
        </h2>
        <ul className="help__menu">
          <li className="help__box" data-aos="zoom-out">
            <img className="help__img" src={MilitaryHelp} alt="military help" />
            <p className="help__caption">Військова допомога</p>
          </li>
          <li className="help__box" data-aos="zoom-out">
            <img
              className="help__img"
              src={HumanitarianHelp}
              alt="humanitarian help"
            />
            <p className="help__caption">Гуманітарна допомога</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Help;
