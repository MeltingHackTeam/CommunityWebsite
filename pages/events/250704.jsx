import React, { useState } from 'react'
import { BackgroundVerticalLines, Footer, Header, Lightbox, ScrollToTop } from '@/components'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import SmallImage1 from '@/public/images/events/event250704_small1.png'
import SmallImage2 from '@/public/images/events/event250704_small2.png'
import SmallImage3 from '@/public/images/events/event250704_small3.png'
import BigImage1 from '@/public/images/events/event250704_big1.png'
import BigImage2 from '@/public/images/events/event250704_big2.png'


const Event250704 = ({ post }) => {
    const [lightboxImage, setLightboxImage] = useState(null);

    const openLightbox = (image) => {
        setLightboxImage(image);
    };

    const closeLightbox = () => {
        setLightboxImage(null);
    };

    // YouTube video configuration
    const videoId = "sQ0zpLyB9A8";
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1`;

    return (
        <>
            <Head>
                <title>IVS AI Buildathon: Forging Global AI Ventures from Kyoto</title>
                <meta name="description" content="A three-day accelerator program that transformed promising ideas into viable, global-ready AI products during IVS 2025 in Kyoto." />
                <meta name="keywords" content="Hackathon, Offline, AI" />
            </Head>

            <main>
                {/* Header section */}
                <Header />
                
                {/* Hero Section with Background Video */}
                <div className="section-box">
                    <div className="bg-video-container border-radius-1" style={{ position: 'relative', overflow: 'hidden', height: '60vh', minHeight: '400px' }}>
                        {/* YouTube Background Video */}
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
                                zIndex: 0,
                                pointerEvents: 'none',
                                filter: 'brightness(1.1) contrast(1.1) saturate(1.2)'
                            }}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="IVS AI Buildathon Background Video"
                        />
                        <div className="bg-dark-04 section" style={{ position: 'relative', zIndex: 1 }}>
                            <div className="container">
                                <div className="row g-4 align-items-center justify-content-center text-center">
                                    <div className="col-12 col-md-10 col-lg-9 col-xl-8">
                                        <h1 className="display-4 fw-normal text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>IVS AI Buildathon</h1>
                                        <p className="mt-3 mt-lg-4 text-white" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)', fontSize: '1.2rem' }}>Forging Global AI Ventures from Kyoto</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                <h1 className="display-4 fw-normal">IVS AI Buildathon: Forging Global AI Ventures from Kyoto</h1>
                                <p>A three-day accelerator program that transformed promising ideas into viable, global-ready AI products during IVS 2025 in Kyoto.</p>
                            </div>
                        </div> {/* end row */}
                        <div className="row g-4 mt-4">
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Category</h6>
                                    <ul className="list-inline-dot">
                                        <li>Hackathon</li>
                                        <li>Offline</li>
                                        <li>AI</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Date</h6>
                                    <span>July 2nd - 4th, 2025</span>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Website</h6>
                                    <Link className="link-hover" href="https://lu.ma/ivsaibuildathon">https://lu.ma/ivsaibuildathon</Link>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Participants</h6>
                                    <span>40 members</span>
                                </div>
                            </div>
                        </div> {/* end row */}
                    </div> {/* end container */}
                </div>

                <div className="section pt-0">
                    <div className="container">
                        {/* Media */}
                        <div className="row g-4">
                            <div className="col-12 col-lg-4">
                                <Image className="border-radius-1" src={SmallImage1} alt="IVS AI Buildathon" placeholder="blur" />
                            </div>
                            <div className="col-12 col-lg-4">
                                <Image className="border-radius-1" src={SmallImage2} alt="IVS AI Buildathon" placeholder="blur" />
                            </div>
                            <div className="col-12 col-lg-4">
                                <Image className="border-radius-1" src={SmallImage3} alt="IVS AI Buildathon" placeholder="blur" />
                            </div>
                        </div> 
                        {/* end row */}

                        {/* Content */}
                        <div className="row mt-5">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                <div className="py-3">
                                    <h4>The Vision: Transforming Ideas into Global AI Ventures</h4>
                                    <p><strong>Kyoto, Japan</strong> – From July 2nd to July 4th, 2025, the ancient city of Kyoto, a place where tradition and innovation coexist, played host to the inaugural IVS AI Buildathon. Held as a cornerstone of the newly established IVS AI zone within Japan&apos;s largest startup conference, IVS 2025, the event marked a significant step in Japan&apos;s ambition to foster a globally competitive AI ecosystem. This was not just another hackathon; it was an intense, three-day accelerator program designed to transform promising ideas into viable, global-ready AI products.</p>
                                </div>

                                <div className="py-3">
                                    <h4>The Mission: Beyond Traditional Hackathons</h4>
                                    <p>The IVS AI Buildathon was conceived to address a crucial need in the rapidly evolving AI landscape. As AI technology lowers the barrier to entry for product development, the true differentiator is no longer technical skill alone, but the founder&apos;s unique vision and passion. The event was built on the theme <strong>&quot;You x IVS x Global,&quot;</strong> a formula designed to empower founders to leverage their unique perspectives, the rich ecosystem of IVS, and a global mindset to create impactful solutions. The core mission was to provide a launchpad for the next generation of AI startups, moving beyond the typical hackathon model to offer a more holistic and impactful experience.</p>
                                </div>

                                <div className="py-3">
                                    <h4>The Experience: Accelerator Meets Innovation</h4>
                                    <p>The event&apos;s schedule was meticulously crafted to maximize innovation and collaboration. It kicked off with an online session on June 26th, allowing participants to connect and share ideas prior to the main event. The on-site activities commenced on July 2nd with team formation, inspirational talks from AI leaders, and an intensive development period. Unlike traditional hackathons that are often short-term and prize-focused, the IVS AI Buildathon incorporated elements of an accelerator program. This included dedicated mentoring sessions with industry experts and a special online AMA with the mentor team from <strong>Inception Studio</strong>, a Silicon Valley-based non-profit accelerator, providing invaluable insights from the heart of the global tech scene.</p>
                                </div>

                                <div className="py-3">
                                    <h4>The Kyoto Advantage: Where History Meets Innovation</h4>
                                    <p>A key aspect of the Buildathon was its emphasis on leveraging the unique environment of IVS and Kyoto. Participants were encouraged to draw inspiration from the city&apos;s blend of history and modernity to envision sustainable and profound business models. The IVS conference itself, with over 12,000 attendees, served as a <strong>&quot;living trove of market intelligence,&quot;</strong> offering an unparalleled opportunity for teams to gain real-time feedback from VCs, seasoned entrepreneurs, and potential customers. This direct access to the market is a crucial advantage, enabling builders to validate their ideas and align their products with real-world needs from day one.</p>
                                </div>

                                <div className="py-3">
                                    <h4>The Framework: Innovation Through Execution</h4>
                                    <p>The rules and judging criteria were designed to foster a spirit of innovation and execution. The event was open to teams of up to five members, and participants were encouraged to leverage existing technologies and resources to build their solutions. This flexible starting point allowed for a diverse range of projects, from those starting from scratch to those enhancing existing products with AI. The judging criteria focused on four key areas: the founder&apos;s passion and vision, the problem-solution fit with AI, the global market potential, and the team&apos;s execution and progress throughout the event. This holistic evaluation process ensured that the most promising and well-rounded projects were recognized.</p>
                                </div>

                                <div className="py-3">
                                    <h4>The Climax: Main Stage Opportunities</h4>
                                    <p>The climax of the event was the final pitch session on July 4th. After an intense period of development and a rigorous first screening, the top three teams were given the prestigious opportunity to present their projects on the <strong>IVS AI Main Stage</strong>. This was a rare chance to pitch to a large audience of investors, industry leaders, and media, offering unrivaled exposure and the potential for funding and strategic partnerships. The winning teams were selected based on their ability to articulate a clear vision, demonstrate a viable product, and showcase the potential for global scalability.</p>
                                </div>

                                <div className="py-3">
                                    <h4>The Legacy: Reshaping Japan&apos;s AI Future</h4>
                                    <p>The IVS AI Buildathon was more than just a competition; it was a testament to the power of collaboration and the importance of a founder-centric approach to innovation. By combining the energy of a hackathon with the strategic guidance of an accelerator and the unparalleled networking opportunities of IVS, the event successfully created a fertile ground for the next wave of AI-driven startups. As the world looks to Japan for new sources of innovation, the IVS AI Buildathon has firmly established itself as a key driver of the nation&apos;s burgeoning AI ecosystem, ready to reshape the future with global minds from the heart of Kyoto.</p>
                                </div>
                            </div>
                        </div> 
                        {/* end row */}

                        {/* Images */}
                        <div className="row g-4 mt-4">
                            {/* Images Lightbox */}
                            <div className="col-12 col-md-6">
                                <div className="lightbox-image">
                                    <Image src={BigImage1} alt="IVS AI Buildathon" placeholder="blur" />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="lightbox-image">
                                    <Image src={BigImage2} alt="IVS AI Buildathon" placeholder="blur" />
                                </div>
                            </div>
                        </div> 
                        {/* end container */}
                    </div>
                </div>
                {lightboxImage && (
                    <Lightbox image={lightboxImage} closeLightbox={closeLightbox} />
                )}

                {/* Footer section */}
                <Footer />
                {/* Scroll To Top */}
                <ScrollToTop />
                {/* Background Vertical Lines */}
                <BackgroundVerticalLines />
            </main>
        </>
    )
}

export default Event250704 