import React, { PropTypes } from 'react';

import Header from './Header';

function Main(props) {
	return (
		<main className="main">
			<Header />
			<div className="content">
				<div className="wrapper">
					{props.children}
				</div>
			</div>
		</main>
	);
}

export default Main;
