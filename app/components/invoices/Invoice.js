import React, { PropTypes } from 'react';

/**
 * Displays a single collection item
 * @param {object} invoice. A single object of data
 * @param {boolean} label. Whether to display the key of the value
 */
function Invoice({ invoice }) {
	return (
		<div className="collection__row">
			{Object.keys(invoice).map((prop, index) =>
				<p className="collection__item" key={index}>{invoice[prop]}</p>)}
		</div>
	);
}

Invoice.propTypes = {
	invoice: PropTypes.object.isRequired
};

export default Invoice;
