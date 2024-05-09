import React from 'react';
import Link from 'next/link';
import { heroData } from './HeroData';

const CorporateHero = () => {
    return (
        <div className="section-box">
            <div className="bg-image border-radius-1" data-bg-src={heroData.corporate.backgroundImage.src}>
                <div className="bg-dark-06 section">
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-12 col-md-10 col-lg-9 col-xl-8 col-xxl-7">
                                <h1 className="display-5 fw-normal">{heroData.corporate.title}</h1>
                                <p className="mt-3 mt-lg-4">{heroData.corporate.description}</p>
                                <p className="mt-3 mt-lg-4">{heroData.corporate.message}</p>
                                <Link className="button button-lg button-font-2 mt-4 mt-lg-5" href={heroData.corporate.learnMoreUrl} target='_blank'><i className='bi bi-discord'></i>  Join Discord</Link>
                            </div>
                        </div> {/* end row */}
                    </div> {/* end container */}
                </div>
            </div>
        </div>
    )
}

export default CorporateHero