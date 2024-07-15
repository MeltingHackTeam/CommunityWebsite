import React, { useState } from 'react'
import { BackgroundVerticalLines, Footer, Header, Lightbox, ScrollToTop } from '@/components'
import Head from 'next/head'
import { blogData } from '@/components/Blog/BlogData'
import Image from 'next/image';
import Link from 'next/link';
import SmallImage1 from '@/public/images/events/event240630_small1.png'
import SmallImage2 from '@/public/images/events/event240630_small2.png'
import SmallImage3 from '@/public/images/events/event240630_small3.png'
import BigImage1 from '@/public/images/events/event240630_big1.png'
import BigImage2 from '@/public/images/events/event240630_big2.png'


const Event240630 = ({ post }) => {
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
                <title>MeltingHack Sprint#2 &quot;Card Game Development&quot;</title>
                <meta name="description" content="A two-week, fully online hackathon was held, with 20 participants from around the world divided into 4 teams to create original card games." />
                <meta name="keywords" content="hackathon, online" />
            </Head>

            <main>
                {/* Header section */}
                <Header />
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                <h1 className="display-4 fw-normal">MeltingHack Sprint#2 &quot;Card Game Development&quot;</h1>
                                <p>A two-week, fully online hackathon was held, with 20 participants from around the world divided into 4 teams to create original card games.</p>
                            </div>
                        </div> {/* end row */}
                        <div className="row g-4 mt-4">
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Category</h6>
                                    <ul className="list-inline-dot">
                                        <li>Hackathon</li>
                                        <li>Online</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Date</h6>
                                    <span>June 15th - June 30th, 2024</span>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Website</h6>
                                    <Link className="link-hover" href="https://lu.ma/8ejyefqh">https://lu.ma/8ejyefqh</Link>
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
                                    <h4>Overcoming the Challenges of Online Collaboration</h4>
                                    <p>While offline events had proven successful in building camaraderie among local members, the online space presented unique challenges in maintaining engagement and fostering a sense of community. To address these hurdles, MeltingHack organized its second online hackathon, MeltingHack Sprint 2, meticulously designed to cater to global members.</p>
                                </div>
                                <div className="py-3">
                                    <h4>Designing an Inclusive and Engaging Experience</h4>
                                    <p>Through extensive collaboration with its core online members, MeltingHack meticulously crafted an event that catered to a diverse range of skill levels, from seasoned developers to enthusiastic newcomers. To further engage the community, participants were invited to propose their own hackathon themes, ultimately settling on the exciting topic of &quot;card game development.&quot;</p>
                                </div>
                                <div className="py-3">
                                    <h4>Navigating the Challenges of Online Collaboration</h4>
                                    <p>Online hackathons present unique challenges, particularly in maintaining motivation and momentum amidst the absence of physical interactions and shared enthusiasm. To address these hurdles, MeltingHack assigned a dedicated mentor, <a href='https://www.linkedin.com/in/saenuruki/'>Sae</a>, to each team, providing unwavering support and guidance throughout the hackathon journey. Even first-time participants could successfully navigate the challenges and bring their ideas to life.</p>
                                </div>
                                <div className="py-3">
                                    <h4>Unveiling Exceptional Works of Creativity</h4>
                                    <p>After two weeks of intense collaboration, the teams proudly presented their completed card games, showcasing their ingenuity and passion. The diverse range of games, each with its unique mechanics and captivating storylines, reflected the breadth of talent and creativity within the MeltingHack community.</p>
                                </div>
                                <div className="py-3">
                                    <h4>Team A:</h4>
                                    <ul>
                                        <li>Name: Cards Goetia - A deckbuilding game about summoning demons</li>
                                        <li>GitHub: <a href="https://github.com/soldiersilent/meltingHackSprint2A">https://github.com/soldiersilent/meltingHackSprint2A</a></li>
                                        <li>Demo Video: <a href="https://youtu.be/Wq1S6aDvxEg">https://youtu.be/Wq1S6aDvxEg</a></li>
                                    </ul>
                                </div>
                                <div className="py-3">
                                    <h4>Team B:</h4>
                                    <ul>
                                        <li>Name: Cats n&apos; Cheese</li>
                                        <li>GitHub: <a href="https://github.com/sylfort/cats-n-cheese">https://github.com/sylfort/cats-n-cheese</a></li>
                                        <li>Demo Video: <a href="https://www.youtube.com/watch?v=snKICpJQi_g">https://www.youtube.com/watch?v=snKICpJQi_g</a></li>
                                    </ul>
                                </div>
                                <div className="py-3">
                                    <h4>Team C:</h4>
                                    <ul>
                                        <li>Name: Jo-ka?</li>
                                        <li>GitHub: <a href="https://github.com/hinakkograshi/CardGameHackathon">https://github.com/hinakkograshi/CardGameHackathon</a></li>
                                        <li>Demo Video: <a href="https://youtu.be/psBKO-Zsgs0">https://youtu.be/psBKO-Zsgs0</a></li>
                                    </ul>
                                </div>
                                <div className="py-3">
                                    <h4>Team D:</h4>
                                    <ul>
                                        <li>Name: Uno</li>
                                        <li>GitHub: <a href="https://github.com/MeltingHack-Sprint-2/">https://github.com/MeltingHack-Sprint-2/</a></li>
                                        <li>Demo Video: <a href="https://youtu.be/9VcagfPsIUw?si=cn6N_5VKbqijx582">https://youtu.be/9VcagfPsIUw?si=cn6N_5VKbqijx582</a></li>
                                    </ul>
                                </div>
                                <div className="py-3">
                                    <h4>Celebrating Innovation and Recognizing Excellence</h4>
                                    <p>A panel of esteemed judges, including <a href="https://www.linkedin.com/in/jfukai/">Avie</a> (a MeltingHack&apos;s community manager) and <a href="https://www.linkedin.com/in/florian-bauer-a230b333/">Florian</a> (a seasoned hackathon organizer and judge from Europe), carefully evaluated the submitted projects. After much deliberation, the team that developed a game where players use hints to reveal all cards except for the joker emerged victorious.</p>
                                    <p>The winning team&apos;s dedication and creativity extended beyond the hackathon, as they published <a href="https://apps.apple.com/jp/app/joker-card-game/id6532621202">their game on the App Store</a>.</p>
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

export default Event240630