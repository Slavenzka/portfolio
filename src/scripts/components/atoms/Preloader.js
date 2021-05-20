import AbstractComponent from '../AbstractComponent'
import preloader from '../../../assets/images/preloader.png'

function createPreloaderTemplate (className) {
  return (
    `<div class="preloader ${className}">
      <img class="preloader__img" src="${preloader}" alt="Preloader" />
    </div>`
  )
}

export default class Preloader extends AbstractComponent {
  constructor (className) {
    super();
    this._extClassName = className;
  }

  getTemplate () {
    return createPreloaderTemplate(this._extClassName);
  }
}
