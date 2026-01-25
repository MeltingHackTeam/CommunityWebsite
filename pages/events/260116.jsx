import React, { useState } from 'react'
import { BackgroundVerticalLines, Footer, Header, Lightbox, ScrollToTop } from '@/components'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import SmallImage1 from '@/public/images/events/event260116_small1.png'
import SmallImage2 from '@/public/images/events/event260116_small2.png'
import SmallImage3 from '@/public/images/events/event260116_small3.png'
import SmallImage4 from '@/public/images/events/event260116_small4.png'
import SmallImage5 from '@/public/images/events/event260116_small5.png'
import SmallImage6 from '@/public/images/events/event260116_small6.png'
import BigImage1 from '@/public/images/events/event260116_big1.png'
import BigImage2 from '@/public/images/events/event260116_big2.png'

const Event260116 = () => {
    const [lightboxImage, setLightboxImage] = useState(null);

    const openLightbox = (image) => {
        setLightboxImage(image);
    };

    const closeLightbox = () => {
        setLightboxImage(null);
    };

    // YouTube background video configuration
    const videoId = "wKCHM1cZAME";
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1`;

    return (
        <>
            <Head>
                <title>Redefining Mobility at the Next-Generation Automotive Generative AI Hackathon</title>
                <meta
                    name="description"
                    content="From January 16th to 22nd, 2026, MeltingHack and GUGA hosted the Next-Generation Automotive Generative AI Hackathon—an enthusiasm-first playground culminating on the Automotive World 2026 stage at Tokyo Big Sight."
                />
                <meta name="keywords" content="Hackathon, Offline, AI, Automotive, Mobility, Generative AI" />
            </Head>

            <main>
                {/* Header section */}
                <Header />

                {/* Hero Section with Background Video */}
                <div className="section-box">
                    <div className="bg-video-container border-radius-1" style={{ position: 'relative', overflow: 'hidden', height: '60vh', minHeight: '400px' }}>
                        <iframe
                            src={embedUrl}
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                width: '100vw',
                                height: '56.25vw', // 16:9
                                minHeight: '100vh',
                                minWidth: '177.77vh', // 16:9
                                transform: 'translate(-50%, -50%)',
                                zIndex: 0,
                                pointerEvents: 'none',
                                filter: 'brightness(1.05) contrast(1.1) saturate(1.15)'
                            }}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Next-Generation Automotive Generative AI Hackathon Background Video"
                        />
                        <div className="bg-dark-04 section" style={{ position: 'relative', zIndex: 1 }}>
                            <div className="container">
                                <div className="row g-4 align-items-center justify-content-center text-center">
                                    <div className="col-12 col-md-10 col-lg-9 col-xl-8">
                                        <h1 className="display-4 fw-normal text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                                            Next-Generation Automotive Generative AI Hackathon
                                        </h1>
                                        <p className="mt-3 mt-lg-4 text-white" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)', fontSize: '1.2rem' }}>
                                            Redefining Mobility at Automotive World 2026
                                        </p>
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
                                <h1 className="display-4 fw-normal">Redefining Mobility at the Next-Generation Automotive Generative AI Hackathon</h1>
                                <p>
                                    From January 16th to 22nd, 2026, MeltingHack and GUGA hosted a high-stakes, enthusiasm-first hackathon that culminated on the
                                    Automotive World 2026 stage at Tokyo Big Sight.
                                </p>
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
                                    <span>January 16th - 18th, 2026</span>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Website</h6>
                                    <Link className="link-hover" href="https://luma.com/5k0gx04a">https://luma.com/5k0gx04a</Link>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Participants</h6>
                                    <span>60 members</span>
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
                                <Image className="border-radius-1" src={SmallImage1} alt="Next-Generation Automotive Generative AI Hackathon" placeholder="blur" />
                            </div>
                            <div className="col-12 col-lg-4">
                                <Image className="border-radius-1" src={SmallImage2} alt="Next-Generation Automotive Generative AI Hackathon" placeholder="blur" />
                            </div>
                            <div className="col-12 col-lg-4">
                                <Image className="border-radius-1" src={SmallImage3} alt="Next-Generation Automotive Generative AI Hackathon" placeholder="blur" />
                            </div>
                        </div>
                        {/* end row */}

                        {/* Content */}
                        <div className="row mt-5">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                <div className="py-3">
                                    <h4>Overview: From &quot;Efficiency&quot; to Pure Enthusiasm</h4>
                                    <p>
                                        MeltingHack has kept a steady rhythm of monthly events—but this hackathon marked a turning point in our mindset.
                                        We stepped away from the trap of &quot;operational efficiency&quot; and returned to our roots as <strong>festival architects</strong>.
                                    </p>
                                    <p>
                                        Our goal was to create the ultimate <strong>playground</strong>—a space where organizers and participants alike could immerse
                                        themselves in the raw excitement of building the future. The result was a high-energy competition that led to a grand finale
                                        at <strong>Automotive World 2026</strong> in Tokyo Big Sight.
                                    </p>
                                </div>

                                <div className="py-3">
                                    <h4>The Challenge: 5 Steps into the Future, 2 Steps into Technology</h4>
                                    <p>
                                        Under the theme <strong>&quot;Automobiles × People × Pain/Needs&quot;</strong>, 11 teams explored how vehicles can evolve beyond
                                        transportation—into <strong>partners</strong> that address deep-seated human needs.
                                    </p>
                                    <p>
                                        To push boundaries, teams integrated cutting-edge approaches such as <strong>Open Source LLMs</strong>, <strong>Multimodal</strong>,
                                        <strong> RAG/MCP</strong>, and <strong>Agents</strong>.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* end row */}

                        {/* Media */}
                        <div className="row g-4 mt-4">
                            <div className="col-12 col-lg-4">
                                <Image className="border-radius-1" src={SmallImage4} alt="Next-Generation Automotive Generative AI Hackathon" placeholder="blur" />
                            </div>
                            <div className="col-12 col-lg-4">
                                <Image className="border-radius-1" src={SmallImage5} alt="Next-Generation Automotive Generative AI Hackathon" placeholder="blur" />
                            </div>
                            <div className="col-12 col-lg-4">
                                <Image className="border-radius-1" src={SmallImage6} alt="Next-Generation Automotive Generative AI Hackathon" placeholder="blur" />
                            </div>
                        </div>
                        {/* end row */}

                        {/* Content */}
                        <div className="row mt-5">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                <div className="py-3">
                                    <h4>The Preliminary Rounds: A Surge of Innovation</h4>
                                    <p>
                                        The prelims at RX Japan&apos;s office near Tokyo Station were a whirlwind of <strong>Vibe Coding</strong>.
                                        Developers bypassed traditional APIs to run high-speed LLMs locally—hitting latency that left onlookers in awe.
                                    </p>
                                    <p>Notable projects emerged early on:</p>
                                    <ul>
                                        <li>
                                            <strong>Real-time Emotion Analysis:</strong> Dual VLMs running on NVIDIA DGX analyzed passenger mood every 2.5 seconds to
                                            adapt the vehicle environment.
                                        </li>
                                        <li>
                                            <strong>Web3 Integration:</strong> Smart Wallets plus license plate recognition minted tokens based on a car&apos;s market value,
                                            enabling a new &quot;mobility economy&quot; concept.
                                        </li>
                                    </ul>
                                </div>

                                <div className="py-3">
                                    <h4>The Grand Finale at Tokyo Big Sight</h4>
                                    <p>
                                        Out of 11 ambitious teams, five finalists—<strong>Paper Drivers</strong>, <strong>Sanctuary</strong>, <strong>Initial ZK</strong>,
                                        <strong> Nemumi Tetsuya</strong>, and <strong>Minna no Shaken</strong>—earned the right to pitch on the Automotive World 2026 stage.
                                    </p>
                                    <p>
                                        In front of industry giants from Toyota, Denso, Alibaba Cloud, and FPT Smart Cloud Japan, the finalists showed that the future of
                                        <strong> Software Defined Vehicles (SDV)</strong> is already here. Judges praised the teams for breaking through on-device constraints
                                        while maintaining a <strong>human-centric</strong> design mindset.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* end row */}

                        {/* Images */}
                        <div className="row g-4 mt-4">
                            <div className="col-12 col-md-6">
                                <div className="lightbox-image" onClick={() => openLightbox(BigImage1)} style={{ cursor: 'pointer' }}>
                                    <Image src={BigImage1} alt="Next-Generation Automotive Generative AI Hackathon" placeholder="blur" />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="lightbox-image" onClick={() => openLightbox(BigImage2)} style={{ cursor: 'pointer' }}>
                                    <Image src={BigImage2} alt="Next-Generation Automotive Generative AI Hackathon" placeholder="blur" />
                                </div>
                            </div>
                        </div>
                        {/* end row */}

                        {/* Content */}
                        <div className="row mt-5">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                <div className="py-3">
                                    <h4>Participant Voices: The Playground in Action</h4>
                                    <blockquote className="mt-3">
                                        <p className="mb-2">
                                            “The technical level of the demos was incredible. Seeing Qwen running locally without an API was a game-changer.”
                                        </p>
                                        <p className="mb-0">
                                            “I usually work in game dev, but this hackathon let me apply my skills to a totally new field. It was the most fun I&apos;ve had
                                            building in a long time!”
                                        </p>
                                    </blockquote>
                                    <p className="mt-3">
                                        Others highlighted the thrill of the ultra-hard requirements—pressure that forced &quot;fly-away&quot; ideas and changed how they think
                                        about mobility.
                                    </p>
                                </div>

                                <div className="py-3">
                                    <h4>Conclusion: The Future is Built on Enthusiasm</h4>
                                    <p>
                                        This hackathon reminded us that when you prioritize <strong>enthusiasm</strong> over ease, you create something truly transformative.
                                        With a stage as prestigious as Tokyo Big Sight and the community spirit of MeltingHack, we witnessed ideas that may define the next
                                        decade of the automotive industry.
                                    </p>
                                    <p>
                                        We extend our deepest gratitude to our sponsors—<strong>Alibaba Cloud</strong>, <strong>FPT Smart Cloud Japan</strong>, and <strong>GUGA</strong>—and to every participant who poured sweat and code into making this playground real.
                                    </p>
                                    <p>
                                        The journey continues. We&apos;re already looking forward to the next challenge, where we&apos;ll once again ask:
                                        <strong> How can we make this the most exciting experience possible?</strong>
                                    </p>
                                    <p><strong>See you at the next “Ship”!</strong></p>
                                </div>
                            </div>
                        </div>
                        {/* end row */}
                    </div>
                    {/* end container */}
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

export default Event260116

