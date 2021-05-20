import AbstractComponent from '../../components/AbstractComponent'

const createProjectsListTemplate = () => {
  return (
    `<div>
      Projects page
    </div>`
  )
}

export default class ProjectsList extends AbstractComponent {
  constructor (list) {
    super();
    this._data = list;
    console.log(this._data);
  }

  getTemplate () {
    return createProjectsListTemplate();
  }
}
