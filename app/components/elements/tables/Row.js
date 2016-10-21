import React, { PropTypes } from 'react';

import Cell from './Cell';

/**
 * Class representing a tables row
 * @param {object} data. a single data object
 */
function TableRow({ data }) {
	const keys = Object.keys(data);

	return (
		<tr className="table__row">
			{keys.map((key, index) =>
				<Cell data={data[key].toString()} key={index} />)}
		</tr>
	);
}

TableRow.propTypes = {
	data: PropTypes.object.isRequired
};

export default TableRow;
