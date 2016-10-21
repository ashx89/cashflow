import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

// import List from '../components/elements/lists/Container';
import Table from '../components/elements/tables/Container';

class Dashboard extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="wrapper">
				<div className="sidebar">
					<section className="sidebar__section">
						<h3 className="sidebar__heading h5">Invoices</h3>
						<ul className="list">
							<li className="list__item">
								<Link className="list__item__link" to={'/invoices/create'}>Create New Invoice</Link>
							</li>
							<li className="list__item">
								<Link className="list__item__link" to={'/invoices'}>View all</Link>
							</li>
						</ul>
					</section>

					<section className="sidebar__section">
						<h3 className="sidebar__heading h5">Expenses</h3>
						<ul className="list">
							<li className="list__item">
								<Link className="list__item__link" to={'/expenses/create'}>Create New Expense</Link>
							</li>
							<li className="list__item">
								<Link className="list__item__link" to={'/expenses'}>View all</Link>
							</li>
						</ul>
					</section>
				</div>

				<div className="content">
					<section className="card--no-padding">
						<h3 className="card__title--labelled h5">Invoices</h3>
						<Table data={this.props.route.data.invoices} />
					</section>

					<section className="card--no-padding">
						<h3 className="card__title--labelled h5">Expenses</h3>
						<Table data={this.props.route.data.expenses} />
					</section>
				</div>
			</div>
		);
	}
}

export default Dashboard;
