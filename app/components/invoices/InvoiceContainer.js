import React, { Component } from 'react';
import InvoiceCollection from './InvoiceCollection';

import { invoices } from '../../data';


/**
 * Class representing a collection of data
 * @param {array} invoices. Array of objects
 * @param {string} layout. CSS class of how to style the data
 */
class InvoiceContainer extends Component {
	constructor() {
		super();
		this.state = {
			invoices: []
		};
	}

	/**
	 * Set the state to the data
	 */
	componentWillMount() {
		this.setState({ invoices });
	}

	/**
	 * Render the collection
	 */
	render() {
		return (
			<section className="card">
				<InvoiceCollection layout={'table'} invoices={this.state.invoices} />
			</section>
		);
	}
}

export default InvoiceContainer;
