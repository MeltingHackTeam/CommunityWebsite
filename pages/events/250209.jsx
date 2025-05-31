import React, { useState } from 'react'
import { BackgroundVerticalLines, Footer, Header, Lightbox, ScrollToTop } from '@/components'
import Head from 'next/head'
import { blogData } from '@/components/Blog/BlogData'
import Image from 'next/image';
import Link from 'next/link';
import SmallImage1 from '@/public/images/events/event250209_small1.png'
import SmallImage2 from '@/public/images/events/event250209_small2.png'
import SmallImage3 from '@/public/images/events/event250209_small3.png'
import BigImage1 from '@/public/images/events/event250209_big1.png'
import BigImage2 from '@/public/images/events/event250209_big2.png'


const Event250209 = ({ post }) => {
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
                <title>AI Agent 1Day Hackathon</title>
                <meta name="description" content="Turbo Hackathon, where participants will embark on an innovative journey to streamline travel planning using AI Agents." />
                <meta name="keywords" content="Hackathon, Offline, AI" />
            </Head>

            <main>
                {/* Header section */}
                <Header />
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                <h1 className="display-4 fw-normal">AI Agent 1Day Hackathon</h1>
                                <p>Turbo Hackathon, where participants will embark on an innovative journey to streamline travel planning using AI Agents.</p>
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
                                    <span>February 9th, 2025</span>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Website</h6>
                                    <Link className="link-hover" href="https://lu.ma/radlhtbp">https://lu.ma/radlhtbp</Link>
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
                                    <p>We held the <b>AI Agent 1Day Hackathon</b> at Le Wagon Tokyo on the Feb 9th, and it was nothing short of amazing!</p>
                                    <p>Designed based on CodeTV&apos;s popular &quot;Turbo Hackathon&quot; format, this was a 4-hour, super-intense challenge dedicated entirely to creating an AI-driven travel experience.</p>
                                </div>
                                <div className="py-3">
                                    <h4>Hackathon Highlights</h4>
                                    <p>Our focus this time was the trending topics of <b>&quot;AI Agent&quot;</b> × <b>&quot;Travel&quot;</b>. We saw overwhelming interest from the community—not only in Japan but also internationally—with some participants traveling all the way from South Korea just for this Hackathon!</p>
                                    <p>Participants tackled the lightning-fast 4-hour schedule using cutting-edge tools and platforms, showcasing a wide variety of creative ideas:</p>
                                    <ul>
                                        <li>🔧 Low-code platforms (n8n, LangFlow)</li>
                                        <li>📊 AI workflow orchestration tools (LangGraph)</li>
                                        <li>🤖 Powerful integrations with AI platforms (OpenAI, Perplexity)</li>
                                    </ul>
                                    <p>Teams developed unique solutions—ranging from innovative travel experiences streamlined with intelligent automation, to fully functional AI Agents to revolutionize your next journey.</p>
                                </div>
                                <div className="py-3">
                                    <h4>🏅 Valuable Experience, Short & Sweet</h4>
                                    <p>Though 4 hours felt like barely enough to build a complete service, the energy, creativity, and dedication displayed by all the participating teams were absolutely inspiring.</p>
                                    <p>We believe these turbo-focused hackathons provide participants an invaluable space where they can dive deeply and commit fully to new technologies and fresh ideas. 🙌✨</p>
                                </div>
                                <div className="py-3">
                                    <h4>🎬 Watch Our Documentary & Get Inspired!</h4>
                                    <p>We&apos;ve captured all the excitement and innovation of this amazing event in a short documentary video available now on YouTube. See what our participants accomplished, feel the energy, and get inspired to join us next time!</p>
                                    <p><b>Watch Here:</b> <Link className="link-hover" href="https://youtu.be/iNXsABdJ_Fs">https://youtu.be/iNXsABdJ_Fs</Link></p>
                                </div>
                                <div className="py-3">
                                    <h4>🙌 Interested in Participating or Collaborating?</h4>
                                    <p>We received numerous requests for future events featuring themes such as <b>Medical</b> and <b>Robotics</b>!</p>
                                    <p>Are you interested in joining, organizing together, or sponsoring future hackathons? We&apos;d love to connect. Reach out to us and become part of our growing community!</p>
                                    <p>Stay tuned for more exciting hackathons—we can&apos;t wait to meet you next time! 🚀</p>
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

export default Event250209