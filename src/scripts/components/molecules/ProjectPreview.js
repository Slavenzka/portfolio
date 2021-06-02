import AbstractComponent from '../AbstractComponent';

function createProjectPreviewTemplate (data, className, attributes) {
  const {id, name, preview, description, type, stack} = data;

  const stackItems = stack
    .map(item => (`
      <li class="preview__item">
        ${ item } 
      </li>
    `))
    .join(``)

  return (`
    <li class="preview ${className}" ${attributes ?? ''}>
        <button class="preview__button" data-project-preview="${id}">
          <img
            class="preview__img"
            src=${preview}
            alt=${name}
          />
        </button>
        <div class="preview__info">
         ${type && `<span class="preview__type">
            ${type}
          </span>`}
          <h3 class="preview__heading">
            ${name}
          </h3>
          <p class="preview__description">
            ${description}
          </p>
          <ul class="preview__list">
            ${ stackItems }
          </ul>      
        </div>
    </li>
  `);
}

class ProjectPreview extends AbstractComponent {
  constructor ({data, attributes, className}) {
    super();
    this._data = data;
    this._attributes = attributes;
    this._className = className;
  }

  getTemplate () {
    return createProjectPreviewTemplate(this._data, this._className, this._attributes);
  }
}

export default ProjectPreview
