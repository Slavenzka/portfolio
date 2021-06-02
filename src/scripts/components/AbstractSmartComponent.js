import AbstractComponent from './AbstractComponent'

class AbstractSmartComponent extends AbstractComponent {
  recoverListeners() {
    throw new Error(`Failed to call abstract method!`);
  }

  rerender() {
    const oldElement = this.getElement();
    const parent = oldElement.parentElement;

    this.removeElement();

    const newElement = this.getElement();
    parent.replaceChild(newElement, oldElement);
    this.recoverListeners();
  }
}

export default AbstractSmartComponent
