import React from 'react';
import Link from 'next/link';
import { heroData } from './HeroData';

const CorporateHero = () => {


    const videoId = `iNXsABdJ_Fs`;
    const embedUrl = `https://www.youtube.com/embed/${heroData.corporate.videoId}?autoplay=1&mute=1&loop=1&playlist=${heroData.corporate.videoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1`;

    return (
        <div className="section-box">
            <div className="bg-video-container border-radius-1" style={{ position: 'relative', overflow: 'hidden' }}>
                {/* YouTube背景動画 */}
                <iframe
                    src={embedUrl}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: '100vw',
                        height: '56.25vw', // 16:9 aspect ratio
                        minHeight: '100vh',
                        minWidth: '177.77vh', // 16:9 aspect ratio
                        transform: 'translate(-50%, -50%)',
                        zIndex: -1,
                        pointerEvents: 'none'
                    }}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Background Video"
                />
                <div className="bg-dark-08 section">
                    <div className="container">
                        <div className="row g-4 align-items-center">
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