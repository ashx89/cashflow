import React, { PropTypes } from 'react';

/**
 * Class representing a table cell
 * @param {object} data. a single data object
 */
function Cell({ data }) {
	return <td className="table__cell">{data}</td>;
}

Cell.propTypes = {
	data: PropTypes.string.isRequired
};

export default Cell;
