import apiFirebase from '../api/index'

class Provider {
  constructor (apiComponent) {
    this._api = apiComponent;
  }

  getProjects () {
    return this._api.getProjects();
  }

  getAboutInfo () {
    return this._api.getAboutInfo();
  }
}

const provider = new Provider(apiFirebase);
export default provider;
