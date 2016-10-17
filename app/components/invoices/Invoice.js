import React, { PropTypes } from 'react';

function Invoice({ invoice }) {
	return (
		<tr className="invoice__row">
			<td>{invoice.date}</td>
			<td>{invoice.id}</td>
			<td>{invoice.account}</td>
			<td>{invoice.description}</td>
			<td>{invoice.customer}</td>
			<td>{invoice.amount}</td>
			<td>{invoice.vat}</td>
			<td>{invoice.total}</td>
			<td>{invoice.status}</td>
		</tr>
	);
}

Invoice.propTypes = {
	invoice: PropTypes.object.isRequired
};

export default Invoice;
