import React, { useState } from 'react'
import { BackgroundVerticalLines, Footer, Header, Lightbox, ScrollToTop } from '@/components'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import SmallImage1 from '@/public/images/events/event250712_small1.png'
import SmallImage2 from '@/public/images/events/event250712_small2.png'
import SmallImage3 from '@/public/images/events/event250712_small3.png'
import BigImage1 from '@/public/images/events/event250712_big1.png'
import BigImage2 from '@/public/images/events/event250712_big2.png'


const Event250712 = ({ post }) => {
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
                <title>Cutting-Edge AI Video Creation Hackathon with Alibaba Cloud&apos;s &quot;WAN&quot;</title>
                <meta name="description" content="An incredible AI video generation hackathon featuring Alibaba Cloud&apos;s latest video generation AI &quot;WAN&quot; and hands-on creative challenges." />
                <meta name="keywords" content="Hackathon, Hybrid, AI" />
            </Head>

            <main>
                {/* Header section */}
                <Header />
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                <h1 className="display-4 fw-normal">Cutting-Edge AI Video Creation Hackathon with Alibaba Cloud&apos;s &quot;WAN&quot;</h1>
                                <p>An incredible AI video generation hackathon featuring Alibaba Cloud&apos;s latest video generation AI &apos;WAN&apos; and hands-on creative challenges.</p>
                            </div>
                        </div> {/* end row */}
                        <div className="row g-4 mt-4">
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Category</h6>
                                    <ul className="list-inline-dot">
                                        <li>Hackathon</li>
                                        <li>Hybrid</li>
                                        <li>AI</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Date</h6>
                                    <span>July 12th, 2025</span>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Website</h6>
                                    <Link className="link-hover" href="https://lu.ma/yuo9t8om">https://lu.ma/yuo9t8om</Link>
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
                                <Image className="border-radius-1" src={SmallImage1} alt="AI Video Creation Hackathon" placeholder="blur" />
                            </div>
                            <div className="col-12 col-lg-4">
                                <Image className="border-radius-1" src={SmallImage2} alt="AI Video Creation Hackathon" placeholder="blur" />
                            </div>
                            <div className="col-12 col-lg-4">
                                <Image className="border-radius-1" src={SmallImage3} alt="AI Video Creation Hackathon" placeholder="blur" />
                            </div>
                        </div> 
                        {/* end row */}

                        {/* Content */}
                        <div className="row mt-5">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                <div className="py-3">
                                    <h4>🚀 Cutting-Edge AI Video Creation Hackathon with Alibaba Cloud&apos;s &quot;WAN&quot;</h4>
                                    <p>What an incredible day at MeltingHack&apos;s AI video generation hackathon! The energy in the room was absolutely electric. Huge thanks to everyone who joined us and made this event such a success!</p>
                                    <p>Let me share some of the amazing highlights:</p>
                                </div>

                                <div className="py-3">
                                    <h4>🎯 Deep Dive into &quot;Tongyi Wanxiang&quot; with Alibaba Cloud&apos;s Fujikawa</h4>
                                    <p>The latest video generation AI &quot;WAN&quot; is seriously next-level stuff. We&apos;re talking complex motion capture, physics simulations - features that blow other AIs out of the water! The best part? You can access it right from your phone. Mr. Fujikawa broke it down so simply, it felt like following a cooking recipe. Everyone left feeling like they could be the next big content creator!</p>
                                </div>

                                <div className="py-3">
                                    <h4>🔥 Pro Secrets from Top Creator Kiharu (CANTIK CEO)</h4>
                                    <p>This industry veteran didn&apos;t hold back! They shared their entire playbook:</p>
                                    <ul>
                                        <li>Transforming a single low-res image into a stunning promotional video</li>
                                        <li>Smart image generation using ChatGPT × ImageFX (no more endless trial and error!)</li>
                                        <li>Seamless blending of live-action and AI footage like a true pro</li>
                                    </ul>
                                    <p>The audience was hanging on every word - pure gold!</p>
                                </div>

                                <div className="py-3">
                                    <h4>🎨 Hands-On Creative Challenge</h4>
                                    <p>Everyone rolled up their sleeves for challenges like &quot;animate a yarn plushie&quot; and &quot;create an ASMR video.&quot; With incredible support from teams at <strong>Alibaba Cloud</strong>, <strong>HERO&apos;ZZ</strong>, <strong>CANTIK</strong>, and <strong>MeltingHack</strong>, even complete beginners were producing jaw-dropping content within just 3 hours!</p>
                                </div>

                                <div className="py-3">
                                    <h4>Why Events Like These Matter</h4>
                                    <p>Here&apos;s the thing - generative AI is evolving at breakneck speed. Trying to keep up alone is exhausting. That&apos;s why events like these are absolute game-changers. Learning together, sharing insights, building connections - this is how we stay ahead of the curve.</p>
                                    <p>The networking session over amazing food was buzzing with excitement right until the very end!</p>
                                </div>

                                <div className="py-3">
                                    <h4>What&apos;s Next?</h4>
                                    <p>Can&apos;t wait to see you at our next event. Stay tuned for more from MeltingHack - we&apos;re just getting started! 🚀</p>
                                </div>
                            </div>
                        </div> 
                        {/* end row */}

                        {/* Images */}
                        <div className="row g-4 mt-4">
                            {/* Images Lightbox */}
                            <div className="col-12 col-md-6">
                                <div className="lightbox-image">
                                    <Image src={BigImage1} alt="AI Video Creation Hackathon" placeholder="blur" />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="lightbox-image">
                                    <Image src={BigImage2} alt="AI Video Creation Hackathon" placeholder="blur" />
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

export default Event250712 