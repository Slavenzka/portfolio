import ProjectsList from '../components/molecules/ProjectsList';
import { render } from '../../utils/common';
import projectsModel from '../models/projectsModel';
import ModalController from './Modal'
import FullImage from '../components/atoms/FullImage'

export default class ProjectsController {
  constructor (container) {
    this._container = container;
    this._model = projectsModel;
    this._handleClickPreview = this._handleClickPreview.bind(this);
    this._modalController = new ModalController;
  }

  _handleClickPreview (evt) {
    evt.stopPropagation();
    const projectId = evt.target.dataset?.projectPreview;

    if (projectId) {
      const data = this.list.find(item => item.id === projectId);
      const {preview, name} = data

      const fullImage = new FullImage(preview, name)
      const fullImageTemplate = fullImage.getTemplate();
      this._modalController.renderModal(fullImageTemplate);
    }
  }

  _applyProjectsClickHandler () {
    const list = document.querySelector(`[data-projects-list]`);
    list.addEventListener(`click`, this._handleClickPreview);
  }

  render () {
    this.list = this._model.getProjectsAll();
    const projects = new ProjectsList(this.list);
    render(this._container, projects);
    this._applyProjectsClickHandler();
  }
}
