import React from 'react';
import ReactRouter, { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Main from '../layouts/Main';
import Dashboard from '../layouts/Dashboard';
// import InvoiceContainer from '../components/invoices/InvoiceContainer';

import data from '../data';

export default (
	<Router history={browserHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={Dashboard} data={data} />
		</Route>
	</Router>
);
