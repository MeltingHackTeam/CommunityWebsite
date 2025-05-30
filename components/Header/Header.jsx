import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { headerData } from './HeaderData';

const Header = () => {
	const [scrollY, setScrollY] = useState(0);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

	// モバイルメニューが開いているときのbodyスクロール制御
	useEffect(() => {
		if (mobileMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}

		// クリーンアップ
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [mobileMenuOpen]);

	// ESCキーでメニューを閉じる
	useEffect(() => {
		const handleEscKey = (event) => {
			if (event.key === 'Escape' && mobileMenuOpen) {
				setMobileMenuOpen(false);
			}
		};

		document.addEventListener('keydown', handleEscKey);
		return () => {
			document.removeEventListener('keydown', handleEscKey);
		};
	}, [mobileMenuOpen]);

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setMobileMenuOpen(false);
	};

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
					<div className={`header-menu ${mobileMenuOpen ? 'show' : ''}`}>
						<ul className="nav">
							{headerData.menu.map((menuItem, index) => (
								<li key={index} className="nav-item">
									<Link href={menuItem.link} className="nav-link" onClick={closeMobileMenu}>
										{menuItem.label}
									</Link>
								</li>
							))}
						</ul>
						{/* Mobile Menu Close Button */}
						<button 
							id="menu-close" 
							className="btn btn-link text-white p-0"
							onClick={closeMobileMenu}
							aria-label="Close menu"
						>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
						</button>
					</div>

					{/* Mobile Menu Toggle Button */}
					<button 
						className="menu-toggle btn btn-link text-white p-0"
						onClick={toggleMobileMenu}
						aria-label="Toggle menu"
					>
						<div className={`hamburger-icon ${mobileMenuOpen ? 'active' : ''}`}>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</button>
				</div>{/* end container-fluid */}
			</div>

			{/* Mobile Menu Overlay */}
			{mobileMenuOpen && (
				<div 
					className="mobile-menu-overlay"
					onClick={closeMobileMenu}
					style={{
						position: 'fixed',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
						backgroundColor: 'rgba(0, 0, 0, 0.5)',
						zIndex: 990,
						display: 'block'
					}}
				/>
			)}
		</>
	);
};

export default Header;
