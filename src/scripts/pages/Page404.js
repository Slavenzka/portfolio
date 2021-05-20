import Page404Controller from '../controllers/Page404'

export default class Page404 {
  constructor (container) {
    this._container = container;
  }

  init () {
    this._controller = new Page404Controller(this._container);
    this._controller.render();
  }
}
