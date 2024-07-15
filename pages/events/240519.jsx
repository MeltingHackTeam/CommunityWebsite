import React, { useState } from 'react'
import { BackgroundVerticalLines, Footer, Header, Lightbox, ScrollToTop } from '@/components'
import Head from 'next/head'
import { blogData } from '@/components/Blog/BlogData'
import Image from 'next/image';
import Link from 'next/link';
import SmallImage1 from '@/public/images/events/event240519_small1.png'
import SmallImage2 from '@/public/images/events/event240519_small2.png'
import SmallImage3 from '@/public/images/events/event240519_small3.png'
import BigImage1 from '@/public/images/events/event240519_big1.png'
import BigImage2 from '@/public/images/events/event240519_big2.png'


const Event240519 = ({ post }) => {
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
                <title>AR 1Day Hackathon</title>
                <meta name="description" content="A hackathon was held where even beginners could create an AR app in 1 day with support from Meracri and Apple." />
                <meta name="keywords" content="hackathon, offline, ar" />
            </Head>

            <main>
                {/* Header section */}
                <Header />
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                <h1 className="display-4 fw-normal">AR 1Day Hackathon</h1>
                                <p>A hackathon was held where even beginners could create an AR app in 1 day with support from Meracri and Apple.</p>
                            </div>
                        </div> {/* end row */}
                        <div className="row g-4 mt-4">
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Category</h6>
                                    <ul className="list-inline-dot">
                                        <li>Hackathon</li>
                                        <li>Offline</li>
                                        <li>AR</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Date</h6>
                                    <span>May 19th, 2024</span>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Website</h6>
                                    <Link className="link-hover" href="https://melting-hack.connpass.com/event/317845/">https://melting-hack.connpass.com/</Link>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Participants</h6>
                                    <span>30 members</span>
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
                                    <p>In anticipation of Apple&apos;s highly-awaited Vision Pro launch in Japan, we hosted an exhilarating AR hackathon, providing an immersive experience for developing AR apps using ARKit, RealityKit and etc. </p>
                                </div>
                                <div className="py-3">
                                    <h4>A Day of Exploration and Learning</h4>
                                    <p>The hackathon kicked off with an inspiring keynote session featuring Apple Evangelists <a href='https://www.linkedin.com/in/masashitoyota/'>Masashi</a> and <a href='https://www.linkedin.com/in/shun-ichi-takeishi-2b735026/'>Shun</a>, who delved into the world of AR, captivating the audience with its transformative potential. Their expertise guided participants through the intricacies of ARKit and RealityKit, empowering them to embark on their creative journeys.</p>
                                </div>
                                <div className="py-3">
                                    <h4>Imagination Takes Flight</h4>
                                    <p>With a spark of inspiration ignited, participants dove into the hackathon, eagerly transforming their visions into reality. The air was filled with an infectious energy as individuals from diverse backgrounds collaborated, sharing ideas and supporting one another&apos;s endeavors.</p>
                                </div>
                                <div className="py-3">
                                    <h4>Fostering Connections and Camaraderie</h4>
                                    <p>To showcase the diversity of our participants and foster deeper connections, we conducted Melting Interviews, capturing their perspectives and experiences. Furthering the spirit of camaraderie, we embarked on a group outing to Shake Shack, savoring delicious food and strengthening bonds. </p>
                                </div>
                                <div className="py-3">
                                    <h4>Celebrating Innovation and Creativity</h4>
                                    <p>Despite the tight one-day timeframe, fueled by dedicated technical support and a collaborative spirit, participants delivered exceptional presentations. A 3D designer, new to app development, utilized SparkAR to craft stunning virtual decorations around them.</p>
                                    <p>An iOS engineer, brimming with parental love, created an app that playfully placed their daughter&apos;s poster on the backs of fellow participants.</p>
                                    <p>And the grand prize went to <a href='https://www.linkedin.com/in/tiphainedilet/'>Tiphaine</a>&apos;s ingenious app that displayed animations and speech bubbles on real-world store items when scanned with a smartphone.</p>
                                </div>
                                <div className="py-3">
                                    <h4>Conclusion: A Catalyst for Innovation</h4>
                                    <p>The event culminated in a delectable pizza party, where participants celebrated their achievements and forged lasting friendships.</p>
                                    <p>The success of this AR hackathon has ignited our enthusiasm to host a Vision Pro Hackathon upon the release of Apple&apos;s groundbreaking device. Stay tuned for further updates and prepare to embark on an extraordinary journey into the realm of augmented reality!</p>
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

export default Event240519