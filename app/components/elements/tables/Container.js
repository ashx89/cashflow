import React, { Component, PropTypes } from 'react';

import Header from './Header';
import Row from './Row';
import Cell from './Cell';

/**
 * Class representing a table
 * @param {array} data. Array of objects
 */
class Table extends Component {
	constructor() {
		super();
	}

	render() {
		let items = this.props.data;

		return (
			<table className="table">
				<Header data={items} />
				<tbody className="table__body">
					{items.map((item, index) => <Row data={item} key={index} />)}
				</tbody>
			</table>
		);
	}
}

Table.propTypes = {
    data: PropTypes.array.isRequired
};

export default Table;
