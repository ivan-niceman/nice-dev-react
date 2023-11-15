import "./Footer.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
  function getCurrentYear() {
    return new Date().getFullYear();
  }

  return (
    <footer className="footer">
      <div className="footer__nav">
        <HashLink smooth to="/" className="footer__logo" />
        <ul className="footer__list-menu">
          <li className="footer__item-menu">
            <HashLink smooth className="nav-link footer__link-menu" to="#about">
              о нас
            </HashLink>
          </li>
          <li className="footer__item-menu">
            <HashLink smooth className="nav-link footer__link-menu" to="#services">
              услуги
            </HashLink>
          </li>
          <li className="footer__item-menu">
            <HashLink smooth className="nav-link footer__link-menu" to="#price">
              цены
            </HashLink>
          </li>
          <li className="footer__item-menu">
            <HashLink smooth className="nav-link footer__link-menu" to="#portfolio">
              портфолио
            </HashLink>
          </li>
        </ul>
        <ul className="contacts__list">
          <li className="contacts__item">
            <Link to="https://telegram.im/@NataChoco" className="contacts__link" target="_blank" rel="noreferrer" />
          </li>
          <li className="contacts__item">
            <Link to="https://wa.me/+79775784438" className="contacts__link" target="_blank" />
          </li>
          <li className="contacts__item">
            <Link to="mailto:nice-dev@list.ru" className="contacts__link" target="_blank" />
          </li>
        </ul>
      </div>
      <HashLink smooth to="/" className="nice-dev">
        © Nice Dev Web-Studio 2020 - {getCurrentYear()}
      </HashLink>
    </footer>
  );
}
