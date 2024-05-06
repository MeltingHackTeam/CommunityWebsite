import React from 'react';
import Link from 'next/link';
import { footerData } from './FooterData';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const discord = footerData.mainData.discord

    return (
        <footer>
            <div className="section-box">
                <div className="section-sm bg-lighter border-radius-1">
                    <div className="container">
                        <div className="row g-4 g-lg-5 justify-content-between">
                            <div className="col-12 col-lg-4">
                                <h2 className="uppercase letter-spacing-1">{footerData.mainData.websiteName}</h2>
                                <p>{footerData.mainData.websiteDescription}</p>
                            </div>
                            <div className="col-12 col-lg-4">
                                <iframe src={discord.src} frameBorder={discord.frameBorder} width={discord.width} height={discord.height} allowtransparency={discord.allowtransparency} sandbox={discord.sandbox}></iframe>
                            </div>
                        </div> {/* end row */}
                    </div> {/* end container */}
                </div>
            </div>
            <div className="py-4 pb-lg-5">
                <div className="container">
                    <div className="row g-2">
                        <div className="col-12 col-md-6 text-center text-md-start">
                            <p>&copy; {currentYear} {footerData.name}, {footerData.copyWriteText}</p>
                        </div>
                        {/* When links are provided, will update section */}
                        {/* <div className="col-12 col-md-6 text-center text-md-end">
                            <ul className="list-inline-dot">
                                {footerData.links.map((item, index) => (
                                    <li key={index}>
                                        <Link className="link-hover" href={item.url}>{item.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div> */}
                    </div> {/* end row */}
                </div> {/* end container */}
            </div>
        </footer>
    )
}

export default Footer