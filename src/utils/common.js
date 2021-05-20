import { RenderPosition } from './const'

export const getNodeFromTemplate = template => {
  const node = document.createElement(`div`);
  node.innerHTML = template;

  return node.firstChild;
};

export const render = (container, component, position = RenderPosition.BEFOREEND, referenceNode) => {
  switch (position) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(component.getElement());
      break;
    case RenderPosition.BEFORENODE:
      container.insertBefore(component.getElement(), referenceNode);
      break;
    default:
      container.append(component.getElement());
      break;
  }
};

export const handleClickLink = route => {
  history.pushState(
    {},
    route,
    window.location.origin + route
  );
};
