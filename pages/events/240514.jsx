import React, { useState } from 'react'
import { BackgroundVerticalLines, Footer, Header, Lightbox, ScrollToTop } from '@/components'
import Head from 'next/head'
import { blogData } from '@/components/Blog/BlogData'
import Image from 'next/image';
import Link from 'next/link';
import SmallImage1 from '@/public/images/events/event240514_small1.png'
import SmallImage2 from '@/public/images/events/event240514_small2.png'
import SmallImage3 from '@/public/images/events/event240514_small3.png'
import BigImage1 from '@/public/images/events/event240514_big1.png'
import BigImage2 from '@/public/images/events/event240514_big2.png'


const Event240514 = ({ post }) => {
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
                <title>Intel AI PC Hands-on Workshop with Intel</title>
                <meta name="description" content="Empowering the Future with AI: A Deep Dive into Intel AI PCs" />
                <meta name="keywords" content="Workshop, Offline, AI" />
            </Head>

            <main>
                {/* Header section */}
                <Header />
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                <h1 className="display-4 fw-normal">Intel AI PC Hands-on Workshop with Intel</h1>
                                <p>Empowering the Future with AI: A Deep Dive into Intel AI PCs</p>
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
                                    <span>May 14th, 2024</span>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Website</h6>
                                    <Link className="link-hover" href="https://lu.ma/ynd6725d">https://lu.ma/ynd6725d</Link>
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
                                    <h4>Introduction</h4>
                                    <p>Imagine a world where your personal computer is not just a tool but a creative partner, capable of understanding and responding to your needs in ways previously thought impossible. This is the vision that Intel is bringing to life with its AI PCs. At a recent hands-on session, I had the opportunity to experience firsthand the power and potential of these cutting-edge machines.</p>
                                </div>
                                <div className="py-3">
                                    <h4>What is an Intel AI PC?</h4>
                                    <p>Unlike traditional PCs that rely solely on CPUs and GPUs, Intel AI PCs feature a Neural Processing Unit (NPU). This specialized hardware is designed to accelerate AI workloads, enabling tasks such as natural language processing, image recognition, and machine learning to be performed much faster and more efficiently. By integrating the NPU into the Core Ultra processor, Intel has created a platform that is ideally suited for AI applications.</p>
                                </div>
                                <div className="py-3">
                                    <h4>Hands-on Experience</h4>
                                    <p>During the hands-on session, participants were given the opportunity to experiment with OpenVINO, Intel&apos;s toolkit for optimizing AI inference. Using OpenVINO, we were able to run a Llama model entirely offline on the Intel AI PC. This demonstration showcased the potential of these machines to handle complex AI tasks without the need for a constant internet connection.</p>
                                </div>
                                <div className="py-3">
                                    <h4>Intel Future Tech Ideathon</h4>
                                    <p>Building on the excitement generated by the hands-on session, Intel hosted an ideathon to encourage developers to create innovative applications using their AI PCs. Teams competed to design the most compelling AI-powered solutions. The winning project from MeltingHack showcased the incredible potential of this technology to address real-world challenges.</p>
                                </div>
                                <div className="py-3">
                                    <h4>Benefits and Impact</h4>
                                    <p>The benefits of Intel AI PCs extend far beyond the realm of technical demonstrations. By making AI accessible to a wider range of users, these machines have the potential to revolutionize industries such as healthcare, education, and entertainment. The ideathon served as a catalyst for innovation, fostering a vibrant community of AI developers.</p>
                                </div>
                                <div className="py-3">
                                    <h4>Conclusion</h4>
                                    <p>The hands-on session and ideathon were both inspiring and informative. They demonstrated the incredible progress that has been made in the field of AI and highlighted the potential of Intel AI PCs to shape the future. As AI technology continues to evolve, we can expect to see even more innovative and exciting applications emerge.</p>
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

export default Event240514