import HomeController from '../controllers/Home';
import Preloader from '../components/atoms/Preloader';
import provider from '../components/api/Provider';
import aboutModel from '../models/aboutModel';
import { render } from '../../utils/common';

export default class Home {
  constructor (container) {
    this._container = container;
    this._provider = provider;
    this._preloader = new Preloader(`preloaderPage`);
    this.model = aboutModel;
  }

  init () {
    render(this._container, this._preloader);

    this._provider.getAboutInfo()
      .then(data => {
        const preloaderElement = this._preloader.getElement();
        preloaderElement.remove();
        this._preloader.removeElement();

        this.model.setAboutData(data);

        this._controller = new HomeController(this._container, this.model);
        this._controller.render();
      })
  }
}
