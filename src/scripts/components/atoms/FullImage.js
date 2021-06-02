import AbstractComponent from '../AbstractComponent'

function createImageTemplate (encodedImage, title) {
  return (`
    <img
      class="fullImage"
      src="${encodedImage}"
      alt="${title}"
    />
  `)
}

class FullImage extends AbstractComponent {
  constructor (base64String, name) {
    super();
    this._imageString = base64String;
    this._name = name;
  }

  getTemplate () {
    return createImageTemplate(this._imageString, this._name);
  }
}

export default FullImage
