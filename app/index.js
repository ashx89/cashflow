import React from 'react';
import ReactDom from 'react-dom';
import routes from './config/routes';
import '../static/scss/main.scss';

ReactDom.render(routes, document.getElementById('app'));
