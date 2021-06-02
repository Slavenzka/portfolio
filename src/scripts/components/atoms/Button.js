import AbstractComponent from '../AbstractComponent'

function createButtonTemplate (className = ``, attributes = ``, children = ``) {
  return (`
    <button
      class="button ${className}"
      type="button"
      ${attributes}
    >
      ${children}
    </button>
  `);
}

class Button extends AbstractComponent {
  constructor ({className, attributes, children}) {
    super();
    this._className = className;
    this._attributes = attributes;
    this._children = children;
  }

  getTemplate () {
    return createButtonTemplate(this._className, this._attributes, this._children);
  }
}

export default Button
