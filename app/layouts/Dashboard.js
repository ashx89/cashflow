import React, { Component, PropTypes } from 'react';

import Table from '../components/elements/tables/Container';

class Dashboard extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="content">
				<section className="card">
					<Table data={this.props.route.data.invoices} />
				</section>

				<section className="card">
					<Table data={this.props.route.data.expenses} />
				</section>
			</div>
		);
	}
}

export default Dashboard;
