import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { headerData } from './HeaderData';

const Header = () => {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
	const handleScroll = () => {
		setScrollY(window.scrollY);
	};

	handleScroll();

	window.addEventListener("scroll", handleScroll);
	return () => {
		window.removeEventListener("scroll", handleScroll);
	};
  }, []);

	return (
		<>
			<div className="header-placeholder"></div>
			<div className={`header with-placeholder ${scrollY > 30 && "bg-dark-06"}`}>
				<div className="container-fluid">
					{/* Logo */}
					<div className="header-logo">
						<h2 className="uppercase letter-spacing-1">
							<Link href="/"><Image src={headerData.icon} alt={headerData.logo} /></Link>
						</h2>
					</div>

					{/* Menu */}
					<div className={`header-menu`}>
						<ul className="nav">
							{headerData.menu.map((menuItem, index) => (
								<li key={index} className="nav-item">
									<Link href={menuItem.link} className="nav-link">
										{menuItem.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>{/* end container-fluid */}
			</div>
		</>
	);
};

export default Header;
