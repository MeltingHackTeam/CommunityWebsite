import React, { useState } from 'react'
import { BackgroundVerticalLines, Footer, Header, Lightbox, ScrollToTop } from '@/components'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import SmallImage1 from '@/public/images/events/event251106_small1.png'
import SmallImage2 from '@/public/images/events/event251106_small2.png'
import SmallImage3 from '@/public/images/events/event251106_small3.png'
import BigImage1 from '@/public/images/events/event251106_big1.png'
import BigImage2 from '@/public/images/events/event251106_big2.png'

const Event251106 = () => {
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
                <title>The Best of China&apos;s Tech Conferences: Recap & Insights</title>
                <meta name="description" content="Five experts dissected the rapid developments in China's entrepreneurial landscape and cutting-edge AI technologies, offering actionable insights for the Japanese market." />
                <meta name="keywords" content="Meetup, Offline, AI, China, Tech Conference" />
            </Head>

            <main>
                {/* Header section */}
                <Header />
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                <h1 className="display-4 fw-normal">The Best of China&apos;s Tech Conferences: Recap & Insights</h1>
                                <p>Five experts dissected the rapid developments in China&apos;s entrepreneurial landscape and cutting-edge AI technologies, offering actionable insights for the Japanese market.</p>
                            </div>
                        </div> {/* end row */}
                        <div className="row g-4 mt-4">
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Category</h6>
                                    <ul className="list-inline-dot">
                                        <li>Meetup</li>
                                        <li>Offline</li>
                                        <li>AI</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Date</h6>
                                    <span>November 6th, 2025</span>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Website</h6>
                                    <Link className="link-hover" href="https://luma.com/wzeqlwc9">https://luma.com/wzeqlwc9</Link>
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
                                <Image className="border-radius-1" src={SmallImage1} alt="China Tech Conferences Event" placeholder="blur" />
                            </div>
                            <div className="col-12 col-lg-4">
                                <Image className="border-radius-1" src={SmallImage2} alt="China Tech Conferences Event" placeholder="blur" />
                            </div>
                            <div className="col-12 col-lg-4">
                                <Image className="border-radius-1" src={SmallImage3} alt="China Tech Conferences Event" placeholder="blur" />
                            </div>
                        </div> 
                        {/* end row */}

                        {/* Content */}
                        <div className="row mt-5">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                <div className="py-3">
                                    <p>&quot;The Best of China&apos;s Tech Conferences: Recap & Insights&quot; hosted by MeltingHack and IVS, delivered an evening dedicated to sharpening the vision of the future of Chinese technology. Held in Shinjuku City, Tokyo, the event brought together a diverse community eager to hear about the intense energy and behind-the-scenes stories from two of China&apos;s most significant technological gatherings: the <strong>S-Tron Shanghai</strong> and the <strong>Alibaba Apsara Conference</strong>.</p>
                                    <p>The meetup featured five distinguished speakers who were physically present at these conferences. Speaking from their respective fields of expertise, they shared the atmosphere, key announcements, and the core of passionate discussions spanning diverse themes, including AI, Cloud, startup funding trends, mobility, and healthcare. The main attraction was the speakers&apos; unique perspectives and real-world analysis of how these innovations can be applied in Japan, going far beyond official reports.</p>
                                </div>
                                <div className="py-3">
                                    <h4>Lessons from China&apos;s Startup Ecosystem</h4>
                                    <p>A significant portion of the discussion centered on the entrepreneurial ecosystem. Speaker Dana McCaw, an International Educator and Entrepreneur, reflected on her experience, noting that <strong>Japan has much to learn from the speed and global awareness of Chinese startups</strong>. She observed that same-generation executives she met in China were able to seamlessly negotiate globally, often leveraging their U.S. study abroad experience. McCaw passionately urged promising Japanese students and entrepreneurs to embrace a global market focus from the outset, rather than waiting until after achieving domestic success.</p>
                                </div>
                            </div>
                        </div> 
                        {/* end row */}

                        {/* Images */}
                        <div className="row g-4 mt-4">
                            <div className="col-12 col-md-6">
                                <div className="lightbox-image">
                                    <Image src={BigImage1} alt="China Tech Conferences Event" placeholder="blur" />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="lightbox-image">
                                    <Image src={BigImage2} alt="China Tech Conferences Event" placeholder="blur" />
                                </div>
                            </div>
                        </div>
                        {/* end row */}

                        {/* Content */}
                        <div className="row mt-5">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                <div className="py-3">
                                    <h4>AI Partner: The Future of Interactive Technology</h4>
                                    <p>However, the event&apos;s most captivating moment blended technology and performance. Instead of participating himself, speaker Daman (満 大鵬), a Senior Solution Architect at Alibaba Cloud, debuted his <strong>AI partner, Xiao Man (小満)</strong>, during the panel discussion. Xiao Man, pre-programmed with Daman&apos;s basic information and settings, demonstrated the state of interactive AI. Using an ASR-LLM-TTS chat application, designed to function like a walkie-talkie, the AI successfully answered questions posed by panel participants. The audience was enthralled by the accuracy of the underlying Qwen model and the <strong>seamless, interactive responsiveness achieved through the ASR-LLM-TTS integration</strong>. This demonstration perfectly illustrated Daman&apos;s stated topic: &quot;The era when anyone can start programming with AI as a partner&quot;.</p>
                                </div>
                                <div className="py-3">
                                    <h4>Conclusion</h4>
                                    <p>The event successfully explored the &quot;now&quot; and &quot;future&quot; of Chinese tech, providing powerful evidence that small actions and collaborations hold the potential to change the world. The insights shared confirmed the need for Japanese entrepreneurs to adopt a proactive, global-first mindset to harness the accelerating technological advancements witnessed in China.</p>
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

export default Event251106

