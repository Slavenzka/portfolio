import Profile from '../components/molecules/Profile'
import { render } from '../../utils/common'

export default class HomeController {
  constructor (container, model) {
    this._container = container;
    this._model = model;
  }

  // p5.js wrecks mobile browsers performance
  _renderAnimatedBackground () {
    if (!window.matchMedia(`(max-width: 1260px)`).matches) {
      window.VANTA.TOPOLOGY({
        el: ".about",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00
      });
    }
  }

  render () {
    const data = this._model.getAboutData();

    const profile = new Profile(data);
    render(this._container, profile);
    this._renderAnimatedBackground();
  }
}
