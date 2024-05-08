import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { headerData } from './HeaderData';

const Header = () => {

	return (
		<>
			<div className="header-placeholder"></div>
			<div className="header with-placeholder bg-dark-06">
				<div className="container-fluid">
					{/* Logo */}
					<div className="header-logo">
						<h2 className="uppercase letter-spacing-1">
							<Link href="/">{headerData.logo}</Link>
						</h2>
					</div>
				</div>{/* end container-fluid */}
			</div>
		</>
	);
};

export default Header;
