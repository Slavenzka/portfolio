import AbstractComponent from '../../components/AbstractComponent'

const createProfileTemplate = ({
  city,
  description,
  social,
}) => {
  const {email, linkedin, telegram} = social

  return (
    `<section class="section about">
      <h1 class="about__heading">Иван <span class="about__surname">Романов</span></h1>
      <address class="about__address">
        <span class="about__city">
          ${city}
        </span>
        <a
          href="mailto: ${email}"
          class="about__email"
        >
          ${email}
        </a>
      </address>
      <div class="about__wyziwig">
        ${description}
      </div>
      <ul class="about__list">
        <li class="about__item">
          <a href="tg://resolve?domain=<${telegram}>" class="about__link">
            Мои контакты в Telegram
            <svg class="about__icon" width="3rem" viewBox="0 0 24 24">
              <use xlink:href="#icon-telegram"></use>
            </svg>
          </a>
        </li>
        <li class="about__item">
          <a href="${linkedin}" class="about__link">
            Мои контакты в Linkedin
            <svg class="about__icon" width="3rem" height="3rem" viewBox="0 0 512 512">
              <use xlink:href="#icon-linkedin"></use>
            </svg>
          </a>
        </li>
      </ul>
    </section>`
  )
}

export default class Profile extends AbstractComponent {
  constructor (data) {
    super();
    this._data = data;
  }

  getTemplate () {
    console.log(this._data);
    return createProfileTemplate(this._data);
  }
}
