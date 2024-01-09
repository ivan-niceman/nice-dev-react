import "./Popup.css";
import React, { useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

export default function Popup({ isOpen, onClose }) {
  const closePopup = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    const handleOverlayClick = (event) => {
      if (isOpen && event.target.classList.contains("popup_opened")) {
        closePopup();
      }
    };

    const handleEscKey = (event) => {
      if (isOpen && (event.key === "Escape" || event.key === "Esc")) {
        closePopup();
      }
    };

    document.addEventListener("click", handleOverlayClick);
    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("click", handleOverlayClick);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [closePopup, isOpen]);

  return (
    <section className={`popup${isOpen ? " popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          aria-label="закрыть"
          type="button"
          className="popup__button-close"
          onClick={closePopup}
        />
        <h2 className="popup__title">Оставьте заявку</h2>
        <form method="POST" className="popup__form" id="form-popup">
          <label className="popup__form-label">
            <input
              type="text"
              name="name"
              placeholder="Введите ваше имя"
              className="popup__input"
              id="name-image-input"
              required
            />
          </label>
          <label className="popup__form-label">
            <input
              type="email"
              name="email"
              placeholder="Введите электронную почту"
              className="popup__input"
              id="image-link-input"
              required
            />
          </label>
          <label className="popup__form-label">
            <textarea
              name="message"
              placeholder="Какой у вас вопрос?"
              className="popup__input popup__textarea"
              required
            ></textarea>
          </label>
          <button
            type="submit"
            aria-label="отправить"
            className="popup__button popup__button-save popup__button-create"
          >
            Отправить
          </button>
          <p className="popup__form-paragraph">
            Отправляя сообщение вы соглашаетесь на&nbsp;
            <Link to="/privacy" className="privacy-popup">
              обработку персональных данных
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}
