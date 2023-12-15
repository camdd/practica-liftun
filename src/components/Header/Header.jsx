import "./Header.css";
import Greentech from "../../assets/Greentech.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <nav className="navbar container">
          <ul className="navbar__menu">
            <li className="navbar__item with-submenu">
              <div className="greentech-icon">
                <Link className=" with-icon" to="/">
                  <img src={Greentech} alt="" />
                </Link>
              </div>
            </li>
            <li className="navbar__item with-submenu">
              <Link className="navbar__link with-icon" to="/create-action">
                Crea tu acción sostenible
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
