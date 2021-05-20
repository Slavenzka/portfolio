class AboutModel {
  constructor () {
    this._data = {};
  }

  setAboutData (data) {
    this._data = Object.assign({}, data);
  }

  getAboutData () {
    return this._data;
  }
}

const aboutModel = new AboutModel();
export default aboutModel;
