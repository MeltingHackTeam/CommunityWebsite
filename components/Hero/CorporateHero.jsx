import React from 'react';
import Link from 'next/link';
import { heroData } from './HeroData';

const CorporateHero = () => {

    const videoId = heroData.corporate.videoId;
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1`;

    return (
        <div className="corporate-hero">
            <div className="container">
                <div className="row align-items-center">
                    {/* Left: Text content */}
                    <div className="col-12 col-lg-6">
                        <div className="corporate-hero-tag">MeltingHack</div>
                        <h1 className="corporate-hero-title">
                            {heroData.corporate.title}
                        </h1>
                        <p className="corporate-hero-desc">{heroData.corporate.description}</p>
                        <p className="corporate-hero-desc">{heroData.corporate.message}</p>
                        <Link className="button button-lg button-font-2 mt-4 mt-lg-5" href={heroData.corporate.learnMoreUrl} target='_blank'>
                            <i className='bi bi-discord'></i>  Join Discord
                        </Link>
                    </div>
                    {/* Right: Video window */}
                    <div className="col-12 col-lg-6 mt-5 mt-lg-0">
                        <div className="corporate-hero-video" style={{ transform: 'translateY(-1rem) scale(1.05)' }}>
                            <iframe
                                src={embedUrl}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Background Video"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CorporateHero
