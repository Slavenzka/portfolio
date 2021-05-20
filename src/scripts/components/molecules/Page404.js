import AbstractComponent from '../../components/AbstractComponent'

export default class Page404 extends AbstractComponent {
  getTemplate () {
    return `<div>Page not found</div>`;
  }
}
