import { getNodeFromTemplate } from '../../utils/common'

const HIDDEN_CLASS = `visually-hidden`;

class AbstractComponent {
  constructor () {
    if (new.target === AbstractComponent) {
      throw new Error(`Failed to instantiate abstract component!`);
    }

    this._element = null;
  }

  getTemplate() {
    throw new Error(`Failed on attempt to call abstract method!`);
  }

  getElement() {
    if (!this._element) {
      this._element = getNodeFromTemplate(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }

  show() {
    if (this._element) {
      this._element.classList.remove(HIDDEN_CLASS);
    }
  }

  hide() {
    if (this._element) {
      this._element.classList.add(HIDDEN_CLASS);
    }
  }
}

export default AbstractComponent;
