export const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
  BEFORENODE: `beforenode`
};

export const ROUTES = {
  '/': {
    label: `Обо мне`,
    url: process.env.NODE_ENV === `development` ? `/` : `/portfolio/`,
  },
  '/projects': {
    label: `Мои проекты`,
    url: process.env.NODE_ENV === `development` ? `/projects` : `/portfolio/projects`,
  },
};
