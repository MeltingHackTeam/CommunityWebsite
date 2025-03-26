import React, { useState } from 'react'
import { BackgroundVerticalLines, Footer, Header, Lightbox, ScrollToTop } from '@/components'
import Head from 'next/head'
import { blogData } from '@/components/Blog/BlogData'
import Image from 'next/image';
import Link from 'next/link';
import SmallImage1 from '@/public/images/events/Event250323_small1.png'
import SmallImage2 from '@/public/images/events/Event250323_small2.png'
import SmallImage3 from '@/public/images/events/Event250323_small3.png'
import BigImage1 from '@/public/images/events/Event250323_big1.png'
import BigImage2 from '@/public/images/events/Event250323_big2.png'


const Event250323 = ({ post }) => {
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
                <title>Subscription App Industry Networking Night</title>
                <meta name="description" content="A Year-End Fusion of Tech and Trends: RevenueCat and MeltingHack Join Forces" />
                <meta name="keywords" content="Workshop, Offline, Mobile" />
            </Head>

            <main>
                {/* Header section */}
                <Header />
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                <h1 className="display-4 fw-normal">Subscription App Industry Networking Night</h1>
                                <p>A Year-End Fusion of Tech and Trends: RevenueCat and MeltingHack Join Forces</p>
                            </div>
                        </div> {/* end row */}
                        <div className="row g-4 mt-4">
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Category</h6>
                                    <ul className="list-inline-dot">
                                        <li>FunEvent</li>
                                        <li>Offline</li>
                                        <li>Mobile</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Date</h6>
                                    <span>November 20th, 2024</span>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Website</h6>
                                    <Link className="link-hover" href="https://revenuecat.connpass.com/event/335222/">https://revenuecat.connpass.com/event/335222/</Link>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Participants</h6>
                                    <span>90 members</span>
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
                                    <p>Tokyo, Japan – Nov. 20th – RevenueCat and MeltingHack, two industry-leading forces in the app development and marketing space, recently co-hosted an exclusive study session and networking party in Meta&apos;s cutting-edge Toranomon office. The event brought together app developers, marketers, and industry experts from around the world for an evening of insightful presentations, engaging discussions, and exciting networking opportunities.</p>
                                </div>
                                <div className="py-3">
                                    <h4>A Global Perspective on Subscription Apps</h4>
                                    <p>A highlight of the evening was a keynote presentation by RevenueCat&apos;s VP of Marketing, Rik Haandrikman, who delved into the nuances of subscription app strategies, particularly in the Japanese market. Haandrikman presented compelling data that revealed the unique challenges and opportunities facing businesses looking to monetize their apps in Japan. While the Japanese subscription market has shown signs of slowing down, it remains highly competitive. Haandrikman emphasized the importance of a global approach to subscription app growth, encouraging attendees to look beyond domestic borders and explore international markets.</p>
                                </div>
                                <div className="py-3">
                                    <h4>Real-world Insights and Innovative Pitches</h4>
                                    <p>To provide attendees with actionable insights, representatives from Ubie and Awarefy shared their experiences in implementing subscription models within their respective apps. Their presentations offered practical tips and strategies for developers and marketers looking to successfully launch and scale their subscription businesses.</p>
                                    <p>The event also featured the final pitching competition for the MeltingHack subscription app hackathon. Four talented teams presented their innovative apps to a panel of judges and a live audience. The judges were particularly impressed by the quality of the apps, given the short development timeline of just 17 days. Attendees were excited to learn that these apps are now available for download on various app stores.</p>
                                </div>
                                <div className="py-3">
                                    <h4>Breaking Down Language Barriers</h4>
                                    <p>To foster a truly global community, the event organizers utilized the real-time translation tool, Cockoo, to provide simultaneous English-Japanese translations for all presentations. This innovative solution ensured that all attendees could fully participate in the event, regardless of their native language.</p>
                                </div>
                                <div className="py-3">
                                    <h4>A Night to Remember</h4>
                                    <p>Beyond the informative presentations and engaging discussions, the event provided a wonderful opportunity for attendees to network with like-minded professionals. The evening concluded with a festive networking party, complete with delicious food and drinks.</p>
                                </div>
                                <div className="py-3">
                                    <h4>In Conclusion</h4>
                                    <p>The collaboration between RevenueCat and MeltingHack has resulted in a truly unforgettable event. By bringing together industry experts, developers, and marketers from around the world, the event has helped to shape the future of subscription app development.</p>
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

export default Event250323