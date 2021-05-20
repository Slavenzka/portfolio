import AbstractComponent from '../AbstractComponent'

const createLinkTemplate = ({url, label, className}) => {
  const isExternalLink = url && typeof url === `string` && url.toLowerCase().includes(`http`);

  if (isExternalLink) {
    return (
      `<a
        href="${url}"
        class="${className}"
      >
        ${label}
      </a>`
    );
  }

  return (
    `<button
      class="${className}"
      data-router-link="${url}"
      type="button"
    >
      ${label}
    </button>`
  );
};

class Link extends AbstractComponent{
  constructor ({url, label, className}) {
    super();
    this._label = label;
    this._url = url;
    this._className = className;
  }

  getTemplate () {
    return createLinkTemplate({
      url: this._url,
      label: this._label,
      className: this._className
    })
  }
}

export default Link
