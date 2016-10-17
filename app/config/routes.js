import React from 'react';
import ReactRouter, { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Main from '../layouts/Main';

export default (
	<Router history={hashHistory}>
		<Route path="/" component={Main}>

		</Route>
	</Router>
);
