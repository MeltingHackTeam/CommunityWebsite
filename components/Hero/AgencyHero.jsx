import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { heroData } from './HeroData';

const AgencyHero = () => {
    return (
        <div className="section-lg">
            <div className="container">
                <div className="row g-5">
                    <div className="col-12 col-xl-10 col-xxl-8">
                        <h1 className="hero-text">
                            <span>{heroData.agency.name}</span>
                            <span className="stroke-text">{heroData.agency.jobTitle}</span>
                        </h1>
                        <div className="row g-4 mt-md-1 mt-lg-2">
                            <div className="col-12 col-md">
                                <p>{heroData.agency.description}</p>
                            </div>
                            <div className="col-12 col-md">
                                <Link className="button button-lg" href={heroData.agency.letsTalkUrl}>Join Community</Link>
                            </div>
                        </div> {/* end row(inner) */}
                    </div>
                    <div className="col-12 col-xxl-4 text-xxl-end d-none d-xxl-block">
                        <Image className="img-mask-1" src={heroData.agency.image} alt={heroData.agency.name} placeholder="blur" />
                    </div>
                </div> {/* end row */}
            </div> {/* end container */}
        </div>
        
    )
}

export default AgencyHero