import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { headerData } from './HeaderData';

const Header = () => {

	return (
		<>
			<div className="header-placeholder"></div>
			<div className="header with-placeholder">
				<div className="container-fluid">
					{/* Logo */}
					<div className="header-logo">
						<h2 className="uppercase letter-spacing-1">
							<Link href="/"><Image src={headerData.icon} alt={headerData.logo} /></Link>
						</h2>
					</div>
				</div>{/* end container-fluid */}
			</div>
		</>
	);
};

export default Header;
