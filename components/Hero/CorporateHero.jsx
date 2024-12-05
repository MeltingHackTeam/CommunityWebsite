import React, { useState } from 'react';
import Link from 'next/link';
import { heroData } from './HeroData';
import { LightboxVideo } from '..';

const CorporateHero = () => {
    const [lightboxVideo, setLightboxVideo] = useState(null);

    const openLightbox = (video) => {
        setLightboxVideo(video);
    };

    const closeLightbox = () => {
        setLightboxVideo(null);
    };

    return (
        <div className="section-box">
            <div className="bg-image border-radius-1" data-bg-src={heroData.corporate.backgroundImage.src}>
                <div className="bg-dark-08 section">
                    <div className="container">
                        <div className="row g-4 align-items-center">
                            <div className="col-12 col-md-10 col-lg-9 col-xl-8 col-xxl-7">
                                <h1 className="display-5 fw-normal">{heroData.corporate.title}</h1>
                                <p className="mt-3 mt-lg-4">{heroData.corporate.description}</p>
                                <p className="mt-3 mt-lg-4">{heroData.corporate.message}</p>
                                <Link className="button button-lg button-font-2 mt-4 mt-lg-5" href={heroData.corporate.learnMoreUrl} target='_blank'><i className='bi bi-discord'></i>  Join Discord</Link>
                            </div>
                            <div className="col-12 col-md-2 col-lg-3 col-xl-4 col-xxl-5 text-center">
                                <a className="hero-play-btn lightbox-video-link" onClick={() => openLightbox(heroData.corporate.youtubeVideoUrl)}>
                                    <span><i className="bi bi-play-fill"></i></span>
                                </a>
                                {lightboxVideo && (
                                    <LightboxVideo video={lightboxVideo} closeLightbox={closeLightbox} />
                                )}
                            </div> 
                        </div> {/* end row */}
                    </div> {/* end container */}
                </div>
            </div>
        </div>
    )
}

export default CorporateHero