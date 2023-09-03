// import { NavLink } from "react-router-dom";
import React from "react";

const AppHeader = () => {
  const scrollToSection = (anchorId) => {
    const targetElement = document.getElementById(anchorId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 72, // Наприклад, відніміть висоту хедера
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="header">
      <div className="container">
        {" "}
        <nav className="header__navigation">
          <ul className="header__menu">
            <li className="header__item">
              <button href="/" className="header__link">
                Ігри
              </button>
            </li>
            <li className="header__item">
              <button href="/" className="header__link">
                Новини
              </button>
            </li>
            <li className="header__item">
              <button
                className="header__link"
                onClick={() => scrollToSection("about")}
              >
                Про нас
              </button>
            </li>
            <li className="header__item">
              <button className="header__link">Допомога армії</button>
            </li>
            <li className="header__item">
              <button href="/" className="header__link">
                Підтримати
              </button>
            </li>
            <li className="header__item">
              <button href="/" className="header__link">
                Гаряча лінія
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default AppHeader;
