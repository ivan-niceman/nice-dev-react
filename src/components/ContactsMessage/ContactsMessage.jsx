import "./ContactsMessage.css";
import ok from "../../images/logo/good.svg";

export default function ContactsMessage() {
  return (
    <div className="contacts-block">
      <div className="contacts-massage">
        <img src={ok} alt="Сообщение" />
        <h3 className="contacts-info">Ваша заявка принята!</h3>
      </div>
    </div>
  );
}
