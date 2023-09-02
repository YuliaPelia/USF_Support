import { NavLink } from "react-router-dom";
const AppHeader = () => {
  return (
    <header className="header">
      <div className="container">
        {" "}
        <nav className="header__navigation">
          <ul className="header__menu">
            <li className="header__item">
              <NavLink to="#" className="header__link">
                Ігри
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink to="#" className="header__link">
                Новини
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink to="#" className="header__link">
                Про нас
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink to="#" className="header__link">
                Допомога армії
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink to="#" className="header__link">
                Підтримати
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink to="#" className="header__link">
                {" "}
                Гаряча лінія
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default AppHeader;
