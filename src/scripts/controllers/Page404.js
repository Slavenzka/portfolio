import Page404 from '../components/molecules/Page404'
import { render } from '../../utils/common'

export default class Page404Controller {
  constructor (container) {
    this._container = container;
  }

  render () {
    const page404 = new Page404();
    render(this._container, page404);
  }
}
