import React, { PropTypes } from 'react';

/**
 * Class representing a tables header
 * @param {array} items. Array of objects
 */
function TableHeader({ data }) {
	const headers = Object.keys(data[0]);

	return (
		<thead className="table__head">
			<tr className="table__row">
				{headers.map((prop, index) => <th className="table__cell h5" key={index}>{prop}</th>)}
			</tr>
		</thead>
	);
}

TableHeader.propTypes = {
	data: PropTypes.array
};

export default TableHeader;
