import AbstractComponent from '../AbstractComponent'
import preloader from '../../../assets/images/preloader.png'

function createPreloaderTemplate (className, preloader) {
  return (
    `<div class="preloader ${className}">
      <svg class="preloader__img" viewBox="0 0 100 125">
        <use xlink:href="#icon-preloader"></use>
      </svg>
    </div>`
  )
}

export default class Preloader extends AbstractComponent {
  constructor (className) {
    super();
    this._extClassName = className;
    this._preloader = preloader;
    console.log(preloader);
  }

  getTemplate () {
    return createPreloaderTemplate(this._extClassName, this._preloader);
  }
}
