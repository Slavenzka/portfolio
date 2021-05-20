import Profile from '../components/molecules/Profile'
import { render } from '../../utils/common'

export default class AboutController {
  constructor (container) {
    this._container = container;
  }

  render () {
    const profile = new Profile();
    render(this._container, profile);
  }
}
