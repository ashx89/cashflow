import React from 'react';
import { Link } from 'react-router';

function Header() {
	return (
		<header className="header">
			<div className="wrapper">
				<h1 className="logo">
					<Link to="/">Cashflow</Link>
				</h1>
			</div>
		</header>
	);
}

export default Header;
