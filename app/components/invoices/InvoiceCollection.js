import React, { PropTypes } from 'react';
import Invoice from './Invoice';

function InvoiceCollection({ invoices }) {
	return (
		<div className="table">
			{invoices.map((item, index) => {
				return <Invoice key={index} invoice={item} />;
			})}
		</div>
	);
}

InvoiceCollection.propTypes = {
	invoices: PropTypes.array.isRequired
};

export default InvoiceCollection;
