import './Price.css';

export default function Price() {
  return (
    <section className="our__price" id="price">
        <h2 className="main__title">сколько стоит?</h2>
        <ul className="price__list">
          <li className="price__item">
            <p className="price__works">фирменный стиль, логотип</p>
            <div className="price__block">
              <p className="price__coast">1-5к</p>
              <p className="price__working-time">до 1 месяца</p>
            </div>
            <p className="price__about-works">
              Индивидуальная разработка вашего фирменного стиля, логотипа и
              торгового знака. Сделаем ваш бизнес запоминающимся и современным.
              Подготовим все необходимые гайдлайны для регистрации торговой
              марки.
            </p>
          </li>
          <li className="price__item">
            <p className="price__works">индивидуальный дизайн сайта</p>
            <div className="price__block">
              <p className="price__coast">4-15к</p>
              <p className="price__working-time">до 2 месяцев</p>
            </div>
            <p className="price__about-works">
              Наш дизайнер создаст для вас современный и продающий визуал сайта,
              либо переработает дизайн старого сайта. Дизайнер хорошо
              разбирается в интернет-маркетинге, поэтому создаст максимально
              коммерческий дизайн, согласовывая с вашими пожеланиями и
              эстетикой.
            </p>
          </li>
          <li className="price__item">
            <p className="price__works">обслуживание сайта</p>
            <div className="price__block">
              <p className="price__coast">от 3к</p>
              <p className="price__working-time">срок не определен</p>
            </div>
            <p className="price__about-works">
              Мы можем обслуживать ваш действующий сайт или созданный нами,
              исправлять ошибки или добавлять функционал. Стоимость каждой
              задачи индивидуальна.
            </p>
          </li>
          <li className="price__item">
            <p className="price__works">посадочная страница</p>
            <div className="price__block">
              <p className="price__coast">8-15к</p>
              <p className="price__working-time">до 1 месяца</p>
            </div>
            <p className="price__about-works">
              Продаете конкретный товар или услугу? Тогда лучшим решением для
              вашего бизнеса будет - посадочная страница. Отличный способ
              продавать и рекламироваться, всегда дает хорошую конверсию.
            </p>
          </li>
          <li className="price__item">
            <p className="price__works">многостраничный сайт</p>
            <div className="price__block">
              <p className="price__coast">15-45к</p>
              <p className="price__working-time">до 6 месяцев</p>
            </div>
            <p className="price__about-works">
              Если ваш бизнес предполагает продажу широкого спектра товаров или
              услуг, то вам необходим многостраничный сайт. Мы разрабатываем
              такие сайты, анализируя оптимальный путь пользователя, простоту
              навигации и мотивацию к покупке.
            </p>
          </li>
        </ul>
      </section>
  );
}
