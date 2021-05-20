import Projects from './pages/Projects'
import About from './pages/About'
import Page404 from './pages/Page404'
import Home from './pages/Home'
import { ROUTES } from '../utils/const'

export  default class Router {
  constructor (container) {
    this._container = container;
    this._home = new Home(this._container);
    this._projects = new Projects(this._container);
    this._about = new About(this._container);
    this._404 = new Page404(this._container);

    this._routes = {
      '/': this._home,
      '/projects': this._projects,
      '/about': this._about,
    }

    this.routes = Object.fromEntries(Object.entries(ROUTES).map(([path, config]) => {
      return [
        config.url,
        {
          component: this._routes[path],
          ...config
        }
      ]
    }))
  }

  _modifyPushState () {
    const container = this._container;
    const routes = this.routes;

    const ps = window.history.pushState;

    history.pushState = function () {
      ps.apply(history, arguments);
      container.innerHTML = '';

      const newPath = arguments[1];
      routes[newPath].component.init();
      const popstateEvent = new PopStateEvent(`popstate`, {
        state: newPath
      });
      dispatchEvent(popstateEvent);
    };
  }

  _renderInitialRoute () {
    const location = window.location.pathname;

    if (this.routes[location]) {
      this.routes[location].component.init();
    } else {
      this._404.init();
    }
  }

  getRoutes () {
    return this.routes;
  }

  render () {
    this._modifyPushState();
    this._renderInitialRoute();
  }
}
