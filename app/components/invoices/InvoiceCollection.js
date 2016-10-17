import React, { PropTypes } from 'react';
import Invoice from './Invoice';

function InvoiceCollection({ invoices }) {
	return (
		<table className="invoices__list">
			<thead>
				<tr>
					<th>Date</th>
					<th>Invoice No.</th>
					<th>Account</th>
					<th>Description</th>
					<th>Customer</th>
					<th>Amount</th>
					<th>VAT</th>
					<th>Total</th>
					<th>Status</th>
				</tr>
			</thead>
			<tbody>
				{invoices.map((item, index) => {
					return <Invoice key={index} invoice={item} />;
				})}
			</tbody>
		</table>
	);
}

InvoiceCollection.propTypes = {
	invoices: PropTypes.array.isRequired
};

export default InvoiceCollection;
