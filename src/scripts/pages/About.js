import AboutController from '../controllers/About'

export default class About {
  constructor (container) {
    this._container = container;
  }

  init () {
    this._controller = new AboutController(this._container);
    this._controller.render();
  }
}
