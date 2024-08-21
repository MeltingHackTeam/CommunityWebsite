import React, { useState } from 'react'
import { BackgroundVerticalLines, Footer, Header, Lightbox, ScrollToTop } from '@/components'
import Head from 'next/head'
import { blogData } from '@/components/Blog/BlogData'
import Image from 'next/image';
import Link from 'next/link';
import SmallImage1 from '@/public/images/events/event240818_small1.png'
import SmallImage2 from '@/public/images/events/event240818_small2.png'
import SmallImage3 from '@/public/images/events/event240818_small3.png'
import BigImage1 from '@/public/images/events/event240818_big1.png'
import BigImage2 from '@/public/images/events/event240818_big2.png'


const Event240818 = ({ post }) => {
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
                <title>Game Jam vol.1</title>
                <meta name="description" content="Melting Hack organized a game-focused hackathon in collaboration with three startup founders. Participants successfully submitted their games on itch.io within the designated timeframe." />
                <meta name="keywords" content="Hackathon, Offline, Game, AI" />
            </Head>

            <main>
                {/* Header section */}
                <Header />
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                <h1 className="display-4 fw-normal">Game Jam vol.1</h1>
                                <p>Melting Hack organized a game-focused hackathon in collaboration with three startup founders. Participants successfully submitted their games on itch.io within the designated timeframe.</p>
                            </div>
                        </div> {/* end row */}
                        <div className="row g-4 mt-4">
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Category</h6>
                                    <ul className="list-inline-dot">
                                        <li>Hackathon</li>
                                        <li>Offline</li>
                                        <li>Game</li>
                                        <li>AI</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Date</h6>
                                    <span>August 16-18th, 2024</span>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Website</h6>
                                    <Link className="link-hover" href="https://itch.io/jam/meltinghack-gamejam-vol1">https://itch.io/jam/meltinghack-gamejam-vol1</Link>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Participants</h6>
                                    <span>26 members</span>
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
                                    <p>We are excited to share the highlights of Game Jam vol.1, held from August 16th to 18th at the Mercari office in Tokyo. This in-person, three-day hackathon brought together a diverse group of game creators and enthusiasts, marking the first of many events aimed at building a vibrant, international community of game developers in Tokyo.</p>
                                </div>
                                <div className="py-3">
                                    <h4>Innovative Game Development:</h4>
                                    <p>Throughout the three days, teams worked tirelessly to bring their game ideas to life. The use of both well-known tools like Unity and Unreal Engine, as well as cutting-edge generative AI tools like ChatGPT and Whisper, led to a variety of innovative and exciting game concepts. The diversity of approaches highlighted the potential of blending different technologies in game development.</p>
                                </div>
                                <div className="py-3">
                                    <h4>Engagement and Participation:</h4>
                                    <p>With a wide variety of registered participants, the event had a strong turnout and high level of engagement. The mix of experienced developers and newcomers created a dynamic learning environment where knowledge and skills were freely shared. The language barrier was effectively managed, with English as the primary medium and Japanese support available, ensuring that everyone could fully participate.</p>
                                </div>
                                <div className="py-3">
                                    <h4>Showcase and Feedback:</h4>
                                    <p>On the final day, each team presented their game to the group, showcasing the results of their hard work. The presentations were met with enthusiastic feedback from peers and judges, highlighting the creativity and technical skills on display. The event concluded with an awards ceremony, recognizing outstanding achievements in categories such as Grand Prize, and Audience Awards.</p>
                                </div>
                                <div className="py-3">
                                    <h4>Building a Community:</h4>
                                    <p>Beyond the games created, Game Jam vol.1 succeeded in laying the foundation for a like-minded, international community of game creators in Tokyo. Participants expressed excitement about future events and the potential for ongoing collaboration.</p>
                                </div>
                                <div className="py-3">
                                    <h4>Conclusion:</h4>
                                    <p>Game Jam vol.1 was a resounding success, demonstrating the power of collaboration and innovation in the game development community. We are grateful to all participants and supporters who made this event possible. We look forward to building on this momentum and continuing to foster creativity and connection in the Tokyo game development scene.</p>
                                    <p>Stay tuned for details on upcoming Game Jams and meetup events as we grow this exciting new community!</p>
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

export default Event240818