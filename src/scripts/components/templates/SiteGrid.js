import AbstractComponent from '../AbstractComponent'

const createGridTemplate = () => (
  `<main class="content" id="main"></main>`
);

export default class SiteGrid extends AbstractComponent {
  getTemplate () {
    return createGridTemplate();
  }
}
