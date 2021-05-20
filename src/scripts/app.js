import Header from './components/molecules/Header'
import { render } from '../utils/common'
import Router from './Router'
import { RenderPosition } from '../utils/const'
import SiteGrid from './components/templates/SiteGrid'

const entryPoint = document.querySelector('#root');

const gridComponent = new SiteGrid();
render(entryPoint, gridComponent);

const contentContainer = document.querySelector('#main');

const router = new Router(contentContainer);
const routes = router.getRoutes();
router.render();

const header = new Header(routes)
render(entryPoint, header, RenderPosition.AFTERBEGIN);
header.recoverListeners();

