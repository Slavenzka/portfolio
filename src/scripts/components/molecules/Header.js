import AbstractSmartComponent from '../AbstractSmartComponent'
import Link from '../atoms/Link'
import { handleClickLink } from '../../../utils/common'

const createLinkMarkup = ({url, label, className}) => {
  const link = new Link({url, label, className})

  return link.getTemplate();
}

const createHeaderTemplate = (routes, location) => {
  const createRouteItems = () => Object.entries(routes)
    .map(([path, config]) => {
      return (
        `<li class="header__item">
          ${ createLinkMarkup({
            url: routes[path].url,
            label: config.label,
            className: `header__link ${location === routes[path].url ? `header__link--active` : ``}`
          })}
          </li>`
      )
    })
    .join(``)

  return (
    `<header class="header">
      <button
        class="header__burger"
        data-burger
        type="button"
      >
        Бургер для управления мобильным меню
      </button>
      <nav class="header__container">
        <ul class="header__list" data-nav>
          ${ createRouteItems() }
        </ul>
      </nav>
    </header>`
  )
}

class Header extends AbstractSmartComponent {
  constructor (routes) {
    super();
    this._location = window.location.pathname;
    this._routes = routes;
    this._handleClickBurger = this._handleClickBurger.bind(this);
  }

  _watchPopState () {
    window.addEventListener('popstate', () => {
      this.rerender();
    })
  }

  _applyRouterLinkHandlers () {
    const routerLinks = document.querySelectorAll('[data-router-link]');
    [...routerLinks].forEach(node => {
      node.addEventListener('click', evt => {
        evt.preventDefault();
        const route = evt.target.dataset.routerLink
        this._location = route;

        handleClickLink(route);
      })
    })
  }

  _handleClickBurger (evt) {
    evt.preventDefault();
    evt.stopPropagation();

    const header = this.getElement();
    const list = header.querySelector(`[data-nav]`);
    list.classList.toggle(`header__list--active`);
    console.log(`Click`);
  }

  _applyBurgerClickHandler () {
    const header = this.getElement();
    const burger = header.querySelector(`[data-burger]`);
    burger.addEventListener(`click`, this._handleClickBurger)
  }

  recoverListeners () {
    this._watchPopState();
    this._applyRouterLinkHandlers();
    this._applyBurgerClickHandler();
  }

  getTemplate () {
    return createHeaderTemplate(this._routes, this._location);
  }
}

export default Header
