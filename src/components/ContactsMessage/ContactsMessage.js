import "./ContactsMessage.css";
import ok from "../../images/logo/good.svg";

export default function ContactsMessage() {
  return (
    <div className="contacts__block">
      <div className="contacts__massage">
        <img src={ok} alt="Сообщение" />
        <h3 className="contacts__info">Ваша заявка принята!</h3>
      </div>
    </div>
  );
}
