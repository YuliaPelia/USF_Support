const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <h2 className="title footer__title">Разом до перемоги!</h2>
        <ul
          data-aos="fade-up-left"
          data-aos-duration="1000"
          className="footer__social"
        >
          <li className="footer__item">
            <a href="instagram.com" className="footer__link">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li className="footer__item">
            <a href="facebook.com" className="footer__link">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
          </li>
          <li className="footer__item">
            <a href="twitter.com" className="footer__link">
              <i class="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li className="footer__item">
            <a href="pinterest.com" className="footer__link">
              <i class="fa-brands fa-pinterest-p"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
