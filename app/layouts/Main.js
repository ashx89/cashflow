import React, { PropTypes } from 'react';

import Header from './Header';

function Main(props) {
	return (
		<main className="main">
			<Header />
			<div className="main--wrap">
				{props.children}
			</div>
		</main>
	);
}

export default Main;
