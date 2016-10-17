import { render } from 'react-dom';
import routes from './config/routes';
import '../static/scss/main.scss';

render(routes, document.getElementById('app'));
