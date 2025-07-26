import React, { useState } from 'react'
import { BackgroundVerticalLines, Footer, Header, Lightbox, ScrollToTop } from '@/components'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import SmallImage1 from '@/public/images/events/Event250702_small1.png'
import SmallImage2 from '@/public/images/events/Event250702_small2.png'
import SmallImage3 from '@/public/images/events/Event250702_small3.png'
import BigImage1 from '@/public/images/events/Event250702_big1.png'
import BigImage2 from '@/public/images/events/Event250702_big2.png'


const Event250702 = ({ post }) => {
    const [lightboxImage, setLightboxImage] = useState(null);

    const openLightbox = (image) => {
        setLightboxImage(image);
    };

    const closeLightbox = () => {
        setLightboxImage(null);
    };

    return (
        <>
            <Head>
                <title>IVS 2025 Kyoto Side Event Recap: Game/AI/XR/Go Global</title>
                <meta name="description" content="A recap of our electrifying side event at IVS 2025 Kyoto, bringing together innovators in gaming, AI, XR, and global expansion." />
                <meta name="keywords" content="FunEvent, Offline, Game" />
            </Head>

            <main>
                {/* Header section */}
                <Header />
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                <h1 className="display-4 fw-normal">IVS 2025 Kyoto Side Event Recap: Game/AI/XR/Go Global</h1>
                                <p>A recap of our electrifying side event at IVS 2025 Kyoto, bringing together innovators in gaming, AI, XR, and global expansion.</p>
                            </div>
                        </div> {/* end row */}
                        <div className="row g-4 mt-4">
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Category</h6>
                                    <ul className="list-inline-dot">
                                        <li>FunEvent</li>
                                        <li>Offline</li>
                                        <li>Game</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Date</h6>
                                    <span>July 2nd, 2025</span>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Website</h6>
                                    <Link className="link-hover" href="https://lu.ma/znn3rdry">https://lu.ma/znn3rdry</Link>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Participants</h6>
                                    <span>100 members</span>
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
                                <Image className="border-radius-1" src={SmallImage1} alt="IVS 2025 Kyoto Side Event" placeholder="blur" />
                            </div>
                            <div className="col-12 col-lg-4">
                                <Image className="border-radius-1" src={SmallImage2} alt="IVS 2025 Kyoto Side Event" placeholder="blur" />
                            </div>
                            <div className="col-12 col-lg-4">
                                <Image className="border-radius-1" src={SmallImage3} alt="IVS 2025 Kyoto Side Event" placeholder="blur" />
                            </div>
                        </div> 
                        {/* end row */}

                        {/* Content */}
                        <div className="row mt-5">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                <div className="py-3">
                                    <h4>🌟 IVS 2025 Kyoto Side Event Recap: A Night to Redefine the Future of Entertainment 🎉</h4>
                                    <p>Earlier this summer, we had the privilege of co-hosting an electrifying side event at IVS 2025 Kyoto, one of Japan&apos;s largest startup conferences.</p>
                                    <p>This very special evening, co-organized by <strong>MeltingHack</strong> and <strong>Alibaba Cloud</strong>, brought together innovators, entrepreneurs, and visionaries from across industries under the theme:</p>
                                    <p><strong>🎮 Game / AI / XR / Go Global ~ Shaping the Next Generation of Entertainment ~</strong></p>
                                    <p>Crafted for meaningful conversations and impactful connections, the event lived up to its promise of being &quot;a space where you meet the people you&apos;ve been looking for.&quot;</p>
                                    <p>Here&apos;s a look back at an unforgettable night filled with innovation, networking, and inspiration.</p>
                                </div>

                                <div className="py-3">
                                    <h4>What Made This Night Special?</h4>
                                    
                                    <h5>1️⃣ A High-Impact Theme & Audience</h5>
                                    <p>We focused on four key areas shaping the future of entertainment:</p>
                                    <ul>
                                        <li>AI-powered creativity (AI VTubers, manga, video creation)</li>
                                        <li>Next-gen gaming technologies, including cloud gaming</li>
                                        <li>Global expansion strategies for startups</li>
                                        <li>The forefront of China&apos;s AI tech boom, showcased by Alibaba Cloud&apos;s innovations</li>
                                    </ul>

                                    <h5>2️⃣ Tailored for Real Connections</h5>
                                    <p>Unlike large-scale conferences where meaningful relationships sometimes get lost in the crowd, we intentionally limited attendance to 100 selected participants. This allowed everyone to have genuine conversations, dive into strategic discussions, and spark partnerships that matter—whether it was business development, funding, or technology collaboration.</p>

                                    <h5>3️⃣ A Memorable Kyoto Setting</h5>
                                    <p>There&apos;s something magical about Kyoto—a city steeped in history yet bursting with innovation. The timeless charm of <strong>FORTUNE GARDEN KYOTO</strong>, paired with exceptional food and drinks, set the tone for collaborative energy and out-of-the-box conversations.</p>
                                </div>

                                <div className="py-3">
                                    <h4>Why Events Like These Are Crucial</h4>
                                    <p>As we continue bridging the gap between innovation and opportunity, we recognize the importance of settings that go beyond just &quot;networking.&quot; This event was a testament to what&apos;s possible when passionate individuals from different sectors and countries come together to tackle the future of entertainment.</p>
                                    <p>At <strong>MeltingHack</strong> and <strong>Alibaba Cloud</strong>, we&apos;re committed to creating spaces like this where inspiration, ideas, and impact flow seamlessly.</p>
                                </div>

                                <div className="py-3">
                                    <h4>A Huge Thank You!</h4>
                                    <p>To everyone who joined us, thank you for contributing to the electric atmosphere of the night. We were thrilled to see so many thought leaders in one room, exchanging ideas, exploring synergies, and shaping the next wave of innovation in gaming, AI, XR, and beyond.</p>
                                </div>
                            </div>
                        </div> 
                        {/* end row */}

                        {/* Images */}
                        <div className="row g-4 mt-4">
                            {/* Images Lightbox */}
                            <div className="col-12 col-md-6">
                                <div className="lightbox-image">
                                    <Image src={BigImage1} alt="IVS 2025 Kyoto Side Event" placeholder="blur" />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="lightbox-image">
                                    <Image src={BigImage2} alt="IVS 2025 Kyoto Side Event" placeholder="blur" />
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

export default Event250702 