import React, { useState } from 'react'
import { BackgroundVerticalLines, Footer, Header, Lightbox, ScrollToTop } from '@/components'
import Head from 'next/head'
import { blogData } from '@/components/Blog/BlogData'
import Image from 'next/image';
import Link from 'next/link';
import SmallImage1 from '@/public/images/events/event241002_small1.png'
import SmallImage2 from '@/public/images/events/event241002_small2.png'
import SmallImage3 from '@/public/images/events/event241002_small3.png'
import BigImage1 from '@/public/images/events/event241002_big1.png'
import BigImage2 from '@/public/images/events/event241002_big2.png'


const Event241002 = ({ post }) => {
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
                <title>Hands-on AI Workshop with Alibaba Cloud</title>
                <meta name="description" content="Empowering Everyone to Build RAG Apps on Alibaba Cloud" />
                <meta name="keywords" content="Workshop, Offline, AI" />
            </Head>

            <main>
                {/* Header section */}
                <Header />
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                <h1 className="display-4 fw-normal">Hands-on AI Workshop with Alibaba Cloud</h1>
                                <p>Empowering Everyone to Build RAG Apps on Alibaba Cloud</p>
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
                                    <span>October 2nd, 2024</span>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Website</h6>
                                    <Link className="link-hover" href="https://lu.ma/k1g1tsaq">https://lu.ma/k1g1tsaq</Link>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Participants</h6>
                                    <span>20 members</span>
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
                                    <p>Our recent AI hands-on workshop, co-hosted with Alibaba Cloud, was a resounding success! Bringing together a diverse group of 20 individuals, from seasoned engineers to curious newcomers, the event offered a unique opportunity to delve into the world of AI and cloud technology.</p>
                                </div>
                                <div className="py-3">
                                    <h4>A Familiar Setting, Cutting-Edge Technology</h4>
                                    <p>The workshop adopted a classroom-style format, instantly transporting attendees back to their student days. This familiar setting fostered a collaborative and engaging atmosphere. The chosen topic, &quot;Building a RAG App to Automate Customer Success Tasks,&quot; proved to be an excellent choice, resonating with participants of all technical backgrounds.</p>
                                </div>
                                <div className="py-3">
                                    <h4>Alibaba Cloud Model Studio: A Game-Changer</h4>
                                    <p>One of the highlights of the workshop was the seamless integration of Alibaba Cloud Model Studio. This intuitive platform allowed participants to effortlessly select from a variety of Qwen LLM models, drag-and-drop external documents to create RAG databases, and deploy their applications with just a few clicks. Even those new to cloud services and AI were able to build functional RAG apps by the end of the session.</p>
                                    <p>Experienced developers were equally impressed. Comparisons were drawn to other cloud platforms like AWS and GCP, with many expressing their admiration for Model Studio&apos;s user-friendly interface and the exceptional accuracy of the LLM models.</p>
                                </div>
                                <div className="py-3">
                                    <h4>Beyond the Workshop: Fostering Collaboration</h4>
                                    <p>Following the hands-on session, attendees enjoyed a delightful meal and drinks at our networking event. The relaxed atmosphere provided an ideal setting for participants to connect, share ideas, and explore potential collaborations. The workshop served as a catalyst for numerous innovative projects, demonstrating the power of bringing together people from diverse backgrounds with a shared passion for AI.</p>
                                </div>
                                <div className="py-3">
                                    <h4>Key Takeaways:</h4>
                                    <ul>
                                        <li><b>Accessibility:</b> Alibaba Cloud Model Studio makes AI development accessible to a wide range of users, regardless of their technical expertise.</li>
                                        <li><b>Efficiency:</b> The platform&apos;s drag-and-drop interface and pre-trained models significantly reduce development time.</li>
                                        <li><b>Collaboration:</b> The workshop fostered a sense of community and encouraged participants to work together on future projects.</li>
                                        <li><b>Impact:</b> By automating customer success tasks, RAG apps can improve efficiency and enhance customer satisfaction.</li>
                                    </ul>
                                </div>
                                <div className="py-3">
                                    <h4>Conclusion</h4>
                                    <p>Our AI hands-on workshop was a testament to the rapid advancements in AI technology and the democratization of AI development tools. Alibaba Cloud Model Studio has proven to be a valuable asset for individuals and organizations looking to leverage the power of AI. We look forward to hosting more events like this in the future.</p>
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

export default Event241002