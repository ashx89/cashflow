import React, { PropTypes } from 'react';
import Invoice from './Invoice';

function Labels({ items }) {
	let keys = Object.keys(items[0]);

	return (
		<div className="collection__rows--headings">
			{keys.map((prop, index) =>
				<h5 key={index} className="collection__item">{prop}</h5>)}
		</div>
	);
}

/**
 * Displays a collection of items
 * @param {array} invoices. Array of objects
 * @param {string} layout. CSS class of how to style the data
 */
function InvoiceCollection({ invoices = [], layout = 'table', showLabels = true }) {
	let labelsComponent;
	if (showLabels === true) labelsComponent = <Labels items={invoices} />;

	return (
		<div className={`collection--${layout}`}>
			{labelsComponent}
			<div className="collection__rows--data">
				{invoices.map((item, index) => <Invoice key={index} invoice={item} />)}
			</div>
		</div>
	);
}

InvoiceCollection.propTypes = {
	invoices: PropTypes.array.isRequired,
	layout: PropTypes.string,
	showLabels: PropTypes.bool
};

Labels.propTypes = {
	items: PropTypes.array
};

export default InvoiceCollection;
