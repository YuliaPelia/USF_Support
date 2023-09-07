const Fond = () => {
  return (
    <section className="fond" id="fond">
      <div className="container">
        <h2
          data-aos="fade-up"
          data-aos-duration="3000"
          className="title fond__title"
        >
          Реквізити з фонду
        </h2>

        <div
          data-aos="zoom-out"
          data-aos-duration="1000"
          className="fond__details"
        >
          <div className="fond__details--box">
            <span className="fond__details--data">Сompany Name</span>
            <span className="fond__details--answer">ГО ФОНД USF</span>
          </div>
          <div className="fond__details--box">
            <span className="fond__details--data">IBAN Code</span>
            <span className="fond__details--answer">
              UA313052990000026002036802057
            </span>
          </div>
          <div className="fond__details--box">
            <span className="fond__details--data">Name of the bank</span>
            <span className="fond__details--answer">
              JSC CB "PRIVATBANK", 1D HRUSHEVSKOHO STR., KYIV, 01001, UKRAINE
            </span>
          </div>
          <div className="fond__details--box">
            <span className="fond__details--data">Bank SWIFT Code</span>
            <span className="fond__details--answer">PBANUA2X</span>
          </div>
          <div className="fond__details--box">
            <span className="fond__details--data">Company address</span>
            <span className="fond__details--answer">
              Ukraine, 01033, Kyiv, Saksaganskogo str, 27B, office 43
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Fond;
