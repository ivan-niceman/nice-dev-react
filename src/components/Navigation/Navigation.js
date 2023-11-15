import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../../images/logo/logo.png";
import "./Navigation.css";

export default function Navigation() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg p-0 header__nav">
        <HashLink smooth className="navbar-brand p-0 header__logo" to="/">
          <img src={logo} alt="логотип" />
        </HashLink>
        <ul className="navbar-nav me-auto mb-lg-0 navbar-nav-scroll header__menu">
          <li className="nav-item menu__item">
            <HashLink
              smooth
              className="nav-link active header__menu-text"
              aria-current="page"
              to="#about"
            >
              о нас
            </HashLink>
          </li>
          <li className="nav-item menu__item">
            <HashLink
              smooth
              className="nav-link active header__menu-text"
              aria-current="page"
              to="#services"
            >
              услуги
            </HashLink>
          </li>
          <li className="nav-item menu__item">
            <HashLink
              smooth
              className="nav-link active header__menu-text"
              aria-current="page"
              to="#price"
            >
              цены
            </HashLink>
          </li>
          <li className="nav-item menu__item">
            <HashLink
              smooth
              className="nav-link active header__menu-text"
              aria-current="page"
              to="#portfolio"
            >
              портфолио
            </HashLink>
          </li>
        </ul>
        <ul className="contacts__list">
          <li className="contacts__item">
            <Link
              to="https://telegram.im/@NataChoco"
              className="contacts__link"
              target="_blank"
            ></Link>
          </li>
          <li className="contacts__item">
            <Link
              to="https://wa.me/+79775784438"
              className="contacts__link"
              target="_blank"
            ></Link>
          </li>
          <li className="contacts__item">
            <Link
              to="mailto:nice-dev@list.ru"
              className="contacts__link"
              target="_blank"
            ></Link>
          </li>
        </ul>
      </nav>

      <nav className="mobile__nav">
        <HashLink smooth className="navbar-brand p-0 header__logo" to="/">
          <img src={logo} alt="логотип" width="130" height="50" />
        </HashLink>
        <div className="container-fluid burger__menu">
          <button
            className="navbar-toggler menu__burger_button"
            type="button"
            onClick={toggleMobileMenu}
          >
            <span className="burger"></span>
          </button>
        </div>
        <div
          className={`mobile__menu ${
            isMobileMenuOpen ? "mobile__menu_visible" : ""
          }`}
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close"
              onClick={closeMobileMenu}
            >
              <span></span>
              <span></span>
            </button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav flex-grow-1 mobile__list">
              <li className="nav-item mobile__item">
                <HashLink
                  smooth
                  className="nav-link mobile__link"
                  aria-current="page"
                  to="#about"
                >
                  о нас
                </HashLink>
              </li>
              <li className="nav-item mobile__item">
                <HashLink
                  smooth
                  className="nav-link mobile__link"
                  to="#services"
                >
                  услуги
                </HashLink>
              </li>
              <li className="nav-item mobile__item">
                <HashLink smooth className="nav-link mobile__link" to="#price">
                  цены
                </HashLink>
              </li>
              <li className="nav-item mobile__item">
                <HashLink
                  smooth
                  className="nav-link mobile__link"
                  to="#portfolio"
                >
                  портфолио
                </HashLink>
              </li>
            </ul>
          </div>
          <ul className="contacts__list mobile-contacts__list">
            <li className="contacts__item">
              <Link
                to="https://telegram.im/@NataChoco"
                className="contacts__link"
                target="_blank"
              ></Link>
            </li>
            <li className="contacts__item">
              <Link
                to="https://wa.me/+79775784438"
                className="contacts__link"
                target="_blank"
              ></Link>
            </li>
            <li className="contacts__item">
              <Link
                to="mailto:nice-dev@list.ru"
                className="contacts__link"
                target="_blank"
              ></Link>
            </li>
          </ul>
        </div>
        <div
          className={`mobile__menu-section ${
            isMobileMenuOpen ? "mobile__menu_visible" : ""
          }`}
          onClick={closeMobileMenu}
        />
      </nav>
    </>
  );
}
