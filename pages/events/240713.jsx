import React, { useState } from 'react'
import { BackgroundVerticalLines, Footer, Header, Lightbox, ScrollToTop } from '@/components'
import Head from 'next/head'
import { blogData } from '@/components/Blog/BlogData'
import Image from 'next/image';
import Link from 'next/link';
import SmallImage1 from '@/public/images/events/event240713_small1.png'
import SmallImage2 from '@/public/images/events/event240713_small2.png'
import SmallImage3 from '@/public/images/events/event240713_small3.png'
import BigImage1 from '@/public/images/events/event240713_big1.png'
import BigImage2 from '@/public/images/events/event240713_big2.png'


const Event240713 = ({ post }) => {
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
                <title>MeltingHack Meetup Night</title>
                <meta name="description" content="A networking event designed to connect passionate individuals who are actively pursuing their challenges and those who are eager to take on new challenges to achieve their dreams, fostering a dynamic environment for collaboration and synergy." />
                <meta name="keywords" content="fun, meetup" />
            </Head>

            <main>
                {/* Header section */}
                <Header />
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                <h1 className="display-4 fw-normal">MeltingHack Meetup Night</h1>
                                <p>A networking event designed to connect passionate individuals who are actively pursuing their challenges and those who are eager to take on new challenges to achieve their dreams, fostering a dynamic environment for collaboration and synergy.</p>
                            </div>
                        </div> {/* end row */}
                        <div className="row g-4 mt-4">
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Category</h6>
                                    <ul className="list-inline-dot">
                                        <li>Fun Event</li>
                                        <li>Offline</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Date</h6>
                                    <span>July 13th, 2024</span>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Website</h6>
                                    <Link className="link-hover" href="https://lu.ma/h6clgro2">https://lu.ma/h6clgro2</Link>
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
                                    <h4>100 Days of Passion and Collaboration</h4>
                                    <p>It&apos;s been an incredible 100 days since the MeltingHack community was established, and we&apos;re so grateful for the incredible team and members who have made it all possible. To express our heartfelt appreciation and foster further synergy among our passionate dreamers, we hosted a special networking event.</p>
                                </div>
                                <div className="py-3">
                                    <h4>Enhancing Connections Through Transparency</h4>
                                    <p>To encourage meaningful interactions, we encouraged participants to update their self-introduction slides beforehand, increasing transparency and allowing everyone to get a glimpse of the diverse backgrounds and expertise within the community. This approach not only clarified each participant&apos;s motivation but also set the stage for more focused and engaging conversations.</p>
                                </div>
                                <div className="py-3">
                                    <h4>Melting Talk: Igniting Passions</h4>
                                    <p>Adopting the theme &quot;Melting Talk (My passion that melts my heart)&quot; for self-introductions, we aimed to capture the essence of each individual&apos;s burning passion. By sharing visual aids and discussing their work, participants gained a deeper understanding of one another&apos;s approaches and projects, leading to more concrete collaborations.</p>
                                </div>
                                <div className="py-3">
                                    <h4>Inspiring Connections and Shared Dreams</h4>
                                    <p>The event brought together a remarkable group of individuals, including:</p>
                                    <ul>
                                        <li>A UX designer and data analyst with a knack for consistently winning hackathons, eager to share their insights into captivating the judges.</li>
                                        <li>An entrepreneur developing an AI-powered gaming service, collaborating with a 3D artist to bring their vision to life. Their complementary skills promise the creation of truly innovative products.</li>
                                        <li>A community organizer fostering connections for overseas members residing in Japan, and a student bridging the gap between aspiring global citizens and international residents in Japan. Their shared experiences promise to create even greater value.</li>
                                        <li>And many more passionate individuals driven by hackathons, development, and entrepreneurship.</li>
                                    </ul>
                                    <p>The enthusiasm extended far beyond the event&apos;s official duration, with lively discussions and networking continuing late into the night.</p>
                                </div>
                                <div className="py-3">
                                    <h4>Looking Ahead: Year-End Gathering</h4>
                                    <p>Overwhelmed by the positive response, we would like to organize another meetup event around the end of the year. Stay tuned for more details!</p>
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

export default Event240713