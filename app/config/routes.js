import React from 'react';
import ReactRouter, { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Main from '../layouts/Main';
import InvoiceContainer from '../components/invoices/InvoiceContainer';

export default (
	<Router history={browserHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={InvoiceContainer} />
		</Route>
	</Router>
);
