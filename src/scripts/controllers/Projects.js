import ProjectsList from '../components/molecules/ProjectsList'
import { render } from '../../utils/common'
import projectsModel from '../models/projectsModel'

export default class ProjectsController {
  constructor (container) {
    this._container = container;
    this._model = projectsModel;
  }

  render () {
    const list = this._model.getProjectsAll();
    const projects = new ProjectsList(list);
    render(this._container, projects);
  }
}
