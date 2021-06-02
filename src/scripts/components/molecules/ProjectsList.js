import AbstractComponent from '../../components/AbstractComponent';
import ProjectPreview from './ProjectPreview'

const createPreviewsListTemplate = data => data
  .map((item, index) => {
    const projectCard = new ProjectPreview({
      data: item,
      className: `projects__item`,
      attributes: `${index % 2 !== 0 ? 'data-preview-odd="true"' : ''}`
    });

    return projectCard.getTemplate();
  })
  .join('')

const createProjectsListTemplate = (data, onClick) => {
  return (
    `<section class="section projects">
      <div class="container projects__container">
        <h2 class="projects__heading">Реализованные проекты</h2>
        <ul class="projects__list" data-projects-list>
          ${ createPreviewsListTemplate(data, onClick) }  
        </ul>          
      </div>
    </section>`
  )
}


export default class ProjectsList extends AbstractComponent {
  constructor (list) {
    super();
    this._data = list;
    console.log(this._data);
  }

  getTemplate () {
    return createProjectsListTemplate(this._data);
  }
}
