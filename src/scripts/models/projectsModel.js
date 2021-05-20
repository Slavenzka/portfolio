class ProjectsModel {
  constructor () {
    this._projects = [];
  }

  setProjects (projects) {
    this._projects = Array.from(projects);
  }

  getProjectsAll () {
    return this._projects;
  }
}

const projectsModel = new ProjectsModel();
export default projectsModel;
