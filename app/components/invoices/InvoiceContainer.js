import React, { Component } from 'react';
import InvoiceCollection from './InvoiceCollection';

import { invoices } from '../../data';

class InvoiceContainer extends Component {
	constructor() {
		super();
		this.state = {
			invoices: []
		};
	}

	componentWillMount() {
		this.setState({ invoices: invoices });
	}

	render() {
		return (
			<section className="card--list">
				<InvoiceCollection invoices={this.state.invoices} />
			</section>
		);
	}
}

export default InvoiceContainer;
