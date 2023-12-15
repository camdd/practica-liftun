import "./Footer.css";
import Greentech from "../../assets/Greentech.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <nav className="navbar container">
          <ul className="navbar__item">
            <li className="navbar__item">
              <Link className="navbar__link" to="/">
                INICIO
              </Link>
            </li>
            <li className="navbar__item">
              <Link className="navbar__link" to="/">
                SOBRE NOSOTROS
              </Link>
            </li>
            <li className="navbar__item">
              <Link className="navbar__link" to="/">
                CONTACTO
              </Link>
            </li>
          </ul>
        </nav>
        <div className="footer-sec-column">
          <div className="greentech-logo">
            <img src={Greentech} />
          </div>
          <p className="footer__copy">
            2023 - Camila D&apos;Ambrosio for Liftun
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
