import React, { useState } from 'react'
import { BackgroundVerticalLines, Footer, Header, Lightbox, ScrollToTop } from '@/components'
import Head from 'next/head'
import { blogData } from '@/components/Blog/BlogData'
import Image from 'next/image';
import Link from 'next/link';
import SmallImage1 from '@/public/images/events/Event250514_small1.png'
import SmallImage2 from '@/public/images/events/Event250514_small2.png'
import SmallImage3 from '@/public/images/events/Event250514_small3.png'
import BigImage1 from '@/public/images/events/Event250514_big1.png'
import BigImage2 from '@/public/images/events/Event250514_big2.png'

const Event250514 = ({ post }) => {
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
                <title>Exploring the Latest Generative AI Landscape in China</title>
                <meta name="description" content="Learning About the Latest Generative AI Landscape in China." />
                <meta name="keywords" content="Workshop, Offline, AI" />
            </Head>

            <main>
                {/* Header section */}
                <Header />
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                <h1 className="display-4 fw-normal">Exploring the Latest Generative AI Landscape in China</h1>
                                <p>Learning About the Latest Generative AI Landscape in China.</p>
                            </div>
                        </div> {/* end row */}
                        <div className="row g-4 mt-4">
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Category</h6>
                                    <ul className="list-inline-dot">
                                        <li>Workshop</li>
                                        <li>Offline</li>
                                        <li>AI</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Date</h6>
                                    <span>May 14th, 2025</span>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Website</h6>
                                    <Link className="link-hover" href="https://lu.ma/dhpur0zu">https://lu.ma/dhpur0zu</Link>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Participants</h6>
                                    <span>50 members</span>
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
                                <Image className="border-radius-1" src={SmallImage1} alt="event" placeholder="blur" />
                            </div>
                            <div className="col-12 col-lg-4">
                                <Image className="border-radius-1" src={SmallImage2} alt="event" placeholder="blur" />
                            </div>
                            <div className="col-12 col-lg-4">
                                <Image className="border-radius-1" src={SmallImage3} alt="event" placeholder="blur" />
                            </div>
                        </div> 
                        {/* end row */}

                        {/* Content */}
                        <div className="row mt-5">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                {/* <div dangerouslySetInnerHTML={{ __html: post.content }} /> */}
                                <div className="py-3">
                                    <p>In the midst of the recent global boom in generative AI, Chinese advancements in this field are also gaining significant traction. </p>
                                    <p>On May 14th, AliEaters #32 was successfully held, focusing on the theme, &quot;Learning About the Latest Generative AI Landscape in China.&quot;</p>
                                </div>
                                <div className="py-3">
                                    <p>The event provided a deep dive into cutting-edge developments from China. Mr. Fujikawa, an AI Engineer at Alibaba Cloud Japan, delivered a compelling keynote speech. </p>
                                    <p>He offered detailed insights into Chinese AI models, including DeepSeek and Alibaba Cloud&apos;s own Qwen, both of which have recently impressed the AI industry with their capabilities.</p>
                                </div>
                                <div className="py-3">
                                    <p>Following the keynote, two lightning talks (LTs) were presented, each packed with the latest information on the Chinese AI scene. </p>
                                    <p>These sessions allowed many participants to share and deepen their understanding of frontier technologies and knowledge.</p>
                                </div>
                                <div className="py-3">
                                    <h4>The lineup of presentations and speakers were as follows:</h4>
                                    <ul>
                                        <li><b>Keynote:</b> <Link className="link-hover" href="https://uploads.strikinglycdn.com/files/9e853c52-ffc0-4074-bd51-9fcaf373a965/20250513_Alieaters_fujikawa.pdf">&quot;Let&apos;s Learn About Generative AI from China!&quot;</Link> by Mr. Fujikawa (Alibaba Cloud Japan)</li>
                                        <li><b>LT1:</b> <Link className="link-hover" href="https://speakerdeck.com/sawanochika/yan-yu-dakeziyanai-qwen-vlmoderunoshi-li-the-power-of-qwen-vl-beyond-language">&quot;Beyond Language! The Power of Qwen VL Model&quot;</Link> by Chika</li>
                                        <li><b>LT2:</b> <Link className="link-hover" href="https://uploads.strikinglycdn.com/files/9e853c52-ffc0-4074-bd51-9fcaf373a965/The%20Landscape%20of%20China%E2%80%99s%20AI.pdf">&quot;The Current State of AI in China: People, Chips, Models, Agents, and Funding&quot;</Link> by Qiang Bai</li>
                                        <li><b>Sponsor Session:</b> &quot;Hackathon Utilization Strategies for Riding the Wave of the Generative AI Era&quot; by Mr. Nuruki (MeltingHack)</li>
                                    </ul>
                                </div>
                                <div className="py-3">
                                    <p>After the insightful learning sessions, the event continued with the customary AliEaters networking session, where participants freely exchanged information and ideas. </p>
                                    <p>The atmosphere was vibrant and engaging. </p>
                                    <p>Wonderful catering was generously provided by Alibaba Cloud, adding to the enjoyment and keeping the conversations lively late into the evening!</p>
                                </div>
                                <div className="py-3">
                                    <p>AliEaters #32 was a valuable opportunity to gain a better understanding of the rapidly evolving and increasingly important generative AI landscape in China. </p>
                                    <p>We were able to share cutting-edge information and deepen our collective knowledge thanks to the insightful presentations and the active participation of everyone involved.</p>
                                </div>
                            </div>
                        </div> 
                        {/* end row */}

                        {/* Images */}
                        <div className="row g-4 mt-4">
                            {/* Images Lightbox */}
                            <div className="col-12 col-md-6">
                                <div className="lightbox-image">
                                    <Image src={BigImage1} alt="event" placeholder="blur" />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="lightbox-image">
                                    <Image src={BigImage2} alt="event" placeholder="blur" />
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

export default Event250514