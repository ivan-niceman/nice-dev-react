import './OurServices.css';

export default function OurServices() {
  return (
    <section className="our__services" id="services">
        <h2 className="main__title">наши услуги</h2>
        <ul className="services__list">
          <li className="services__item">
            <h3 className="services__subtitle">разработка сайтов</h3>
            <h3 className="services__subtitle">любой сложности</h3>
          </li>
          <li className="services__item">
            <h3 className="services__subtitle">доработка</h3>
            <h3 className="services__subtitle">и обслуживание</h3>
            <h3 className="services__subtitle">существующих сайтов</h3>
          </li>
          <li className="services__item">
            <h3 className="services__subtitle">разработка логотипа,</h3>
            <h3 className="services__subtitle">фирменного стиля</h3>
          </li>
        </ul>
      </section>
  );
}
