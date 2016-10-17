import React, { PropTypes } from 'react';

import Header from './Header';

function Main(props) {
	return (
		<main className="main">
			<Header />
			<section className="content">
				{props.children}
			</section>
		</main>
	);
}

export default Main;
