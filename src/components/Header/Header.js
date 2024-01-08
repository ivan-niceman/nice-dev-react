import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <span className="header__section-white"></span>
      <span className="header__section-yellow"></span>
      <Navigation />
      <section className="header__titles">
        <h1 className="header__title-left">
          СОБИРАЕМ И ЗАПУСКАЕМ
          <span className="header__title-left-color"> ПРОДАЮЩИЕ </span>
          САЙТЫ турфирм
        </h1>
        <h2 className="header__title-right">
          создаем
          <span className="header__title-right-color"> успешный </span> и
          узнаваемый бренд
        </h2>
      </section>

      <section className="header__bottom">
        <span className="header__image"></span>
        <section className="header__section-form">
          <h2 className="header__form-title">бесплатная консультация</h2>
          <form id="form-header" className="header__form">
            <input
              type="text"
              name="name"
              className="form-contacts"
              placeholder="Имя"
              required
            />
            <input
              type="email"
              name="email"
              className="form-contacts"
              placeholder="Эл. почта"
              required
            />
            <textarea
              name="message"
              id="message"
              className="send-text"
              placeholder="Ваши пожелания?"
              required
            ></textarea>
            <div className="header__form-submit">
              <button type="submit" className="form-btn">
                Отправить
              </button>
              <p className="header__form-paragraph">
                Отправляя сообщение вы соглашаетесь на&nbsp;
                <Link to="/privacy" className="privacy">
                  обработку персональных данных
                </Link>
              </p>
            </div>
          </form>
        </section>
      </section>
    </header>
  );
}
