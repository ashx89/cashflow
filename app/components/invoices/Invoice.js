import React, { PropTypes } from 'react';

function Invoice({ invoice }) {
	return (
		<div className="table__row">
			{Object.keys(invoice).map((prop, index) => {
				return (
					<div className="table__cell__group" key={index}>
						<div className="table__cell">{prop}</div>
						<div className="table__cell">{invoice[prop]}</div>
					</div>
				);
			})}
		</div>
	);
}

Invoice.propTypes = {
	invoice: PropTypes.object.isRequired
};

export default Invoice;
