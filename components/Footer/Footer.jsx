import React from 'react';
import Link from 'next/link';
import { footerData } from './FooterData';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer bg-black text-white">
            <div className="section-lg">
                <div className="container">
                    {/* Main Footer Content */}
                    <div className="row justify-content-center text-center">
                        <div className="col-12">
                            {/* Logo */}
                            <div className="mb-4">
                                <img 
                                    src="/images/meltinghack_header_icon.png"
                                    alt={footerData.name} 
                                />
                            </div>

                            {/* Social Media Icons */}
                            <div className="mb-5">
                                <div className="d-flex justify-content-center gap-3">
                                    <Link href={footerData.mainData.socialMedia.facebook} target="_blank" className="social-icon">
                                        <i className="bi bi-facebook"></i>
                                    </Link>
                                    <Link href={footerData.mainData.socialMedia.twitter} target="_blank" className="social-icon">
                                        <i className="bi bi-twitter-x"></i>
                                    </Link>
                                    <Link href={footerData.mainData.socialMedia.instagram} target="_blank" className="social-icon">
                                        <i className="bi bi-instagram"></i>
                                    </Link>
                                    <Link href={footerData.mainData.socialMedia.linkedin} target="_blank" className="social-icon">
                                        <i className="bi bi-linkedin"></i>
                                    </Link>
                                    <Link href={footerData.mainData.socialMedia.youtube} target="_blank" className="social-icon">
                                        <i className="bi bi-youtube"></i>
                                    </Link>
                                </div>
                            </div>

                            {/* Discord Button */}
                            <div className="mb-5">
                                <Link 
                                    href={footerData.mainData.discordURL} 
                                    target="_blank"
                                    className="footer-discord-btn btn btn-outline-light btn-lg px-5 py-3"
                                >
                                    Join MeltingHack Discord Community
                                    <i className="bi bi-arrow-right ms-2"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="row">
                        <div className="col-12">
                            <hr className="footer-hr" />

                            {/* Copyright and Legal Links */}
                            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-center">
                                <div className="mb-3 mb-md-0">
                                    <p className="footer-copyright mb-0">
                                        COPYRIGHT © {currentYear} {footerData.mainData.copywriter} | ALL RIGHTS RESERVED
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer