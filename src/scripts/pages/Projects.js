import ProjectsController from '../controllers/Projects'
import provider from '../components/api/Provider'
import projectsModel from '../models/projectsModel'
import Preloader from '../components/atoms/Preloader'
import { render } from '../../utils/common'

export default class Projects {
  constructor (container) {
    this._container = container;
    this._provider = provider;
    this._model = projectsModel;
    this._preloader = new Preloader();
  }

  init () {
    render(this._container, this._preloader);
    this._provider.getProjects()
      .then(data => {
        const preloaderElement = this._preloader.getElement();
        preloaderElement.remove();
        this._preloader.removeElement();

        this._model.setProjects(data.list);
        const controller = new ProjectsController(this._container);
        controller.render();
      });

  }
}
