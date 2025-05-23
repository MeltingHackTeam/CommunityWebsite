import React, { useState } from 'react'
import { BackgroundVerticalLines, Footer, Header, Lightbox, ScrollToTop } from '@/components'
import Head from 'next/head'
import { blogData } from '@/components/Blog/BlogData'
import Image from 'next/image';
import Link from 'next/link';
import SmallImage1 from '@/public/images/events/event250517_small1.png'
import SmallImage2 from '@/public/images/events/event250517_small2.png'
import SmallImage3 from '@/public/images/events/event250517_small3.png'
import BigImage1 from '@/public/images/events/event250517_big1.png'
import BigImage2 from '@/public/images/events/event250517_big2.png'

const Event250517 = ({ post }) => {
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
                <title>&quot;4 Hours to Viral!&quot; Short Video Creation Hackathon</title>
                <meta name="description" content="HERO&apos;ZZ University&apos;s &quot;4 Hours to Viral!&quot; hackathon: intense, collaborative, effective." />
                <meta name="keywords" content="Hackathon, Offline, Creator" />
            </Head>

            <main>
                {/* Header section */}
                <Header />
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                <h1 className="display-4 fw-normal">&quot;4 Hours to Viral!&quot; Short Video Creation Hackathon</h1>
                                <p>HERO&apos;ZZ University&apos;s &quot;4 Hours to Viral!&quot; hackathon: intense, collaborative, effective.</p>
                            </div>
                        </div> {/* end row */}
                        <div className="row g-4 mt-4">
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Category</h6>
                                    <ul className="list-inline-dot">
                                        <li>Hackathon</li>
                                        <li>Offline</li>
                                        <li>Creator</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Date</h6>
                                    <span>May 17th, 2025</span>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Website</h6>
                                    <Link className="link-hover" href=""></Link>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Participants</h6>
                                    <span>40 members</span>
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
                                    <p><b>Tokyo, Japan – May 17, 2025 –</b> The air crackled with creative energy as HEROZZ University hosted its groundbreaking &apos;4 Hours to Viral!&apos; Short Video Creation Hackahton.</p>
                                    <p>Held at Hamamatsucho PREX in Minato-ku, Tokyo, this unique event brought together a vibrant mix of creators with a shared ambition: to master the art of producing explosive short-form video content.</p>
                                    <p>Far from a typical hackathon, this was a high-octane sprint designed to equip participants with the hands-on skills needed to go viral, all within a tight four-hour window.</p>
                                </div>
                                <div className="py-3">
                                    <h4>A Melting Pot of Talent and Ambition</h4>
                                    <p>The hackathon attracted a diverse cohort of HERO&apos;ZZ University students, all eager to supercharge their social media presence.</p>
                                    <p>From complete novices who hadn&apos;t even set up their first account to seasoned content creators boasting hundreds of thousands of followers, the room was a testament to the broad spectrum of talent within the university.</p>
                                    <p>And the variety didn&apos;t stop there. Participants represented an incredibly wide array of genres, including dental hygiene, educational content, personal branding, makeup artistry, aesthetic clinics, business, skincare, beauty, culinary schools, daily vlogs, &apos;slice of life&apos; content, &apos;gacha&apos; unboxings, mental health awareness, psychiatric insights, spiritual guidance, food reviews, international gastronomy, beauty for over-50s, physical therapy, home workouts, street interviews, mixology, video production, concept cafe dates, bars, shisha lounges, violin performances, instrumental covers, singing, dancing, &apos;quit my job&apos; vlogs, hunting, short video production agencies, family vlogs, RV life, comics, DIY home renovation, gaming streams, VTubers, and live streaming.</p>
                                </div>
                                <div className="py-3">
                                    <p>To foster collaboration and diverse perspectives, the organizing team thoughtfully grouped participants into teams of three (with a few four-person teams), taking into account their interests and existing social media niches.</p>
                                    <p>This intentional team formation proved invaluable, sparking fresh ideas and connections between creators who might never have collaborated otherwise.</p>
                                </div>
                                <div className="py-3">
                                    <h4>The Adrenaline-Fueled Sprint to Viral Content</h4>
                                    <p>The hackathon kicked off at 1:00 PM, immediately diving into the core mission. After a brief overview, a renowned instructor delivered a special lecture on &apos;Tips for Creating Short Videos,&apos; arming participants with essential knowledge on everything from conceptualization to shooting and editing for maximum impact.</p>
                                </div>
                                <div className="py-3">
                                    <p>Then, the clock started ticking. At 1:30 PM, the &apos;Ideation Session&apos; began. For a focused 30 minutes, teams brainstormed concepts for their viral short videos.</p>
                                    <p>This critical planning phase was strictly for strategizing – no filming or editing allowed – ensuring a solid foundation for the creative burst that followed.</p>
                                </div>
                                <div className="py-3">
                                    <p>At 2:00 PM, the energy in the room surged as the &apos;Short Video Creation Time&apos; commenced. For a full four hours, teams immersed themselves in shooting and editing. While some members, given the varied skill levels, might have contributed more to planning or editing, everyone enthusiastically participated in the filming process.</p>
                                    <p>It was inspiring to witness the collective effort and joy on display. Even those less involved in the technical aspects gained immense value by observing their teammates, picking up countless tips, techniques, and tool insights simply by watching the creative process unfold.</p>
                                </div>
                                <div className="py-3">
                                    <h4>Instant Feedback, Accelerated Growth</h4>
                                    <p>At 6:00 PM, the moment of truth arrived: the &apos;Presentation and Feedback Session.&apos; Every single team, despite the incredibly tight deadline, successfully created a compelling one-minute short video.</p>
                                    <p>Though their genres were wildly different, each team showcased the skills and knowledge they&apos;d honed at HERO&apos;ZZ University, demonstrating remarkable creativity and execution under pressure.</p>
                                </div>
                                <div className="py-3">
                                    <p>What truly elevated this hackathon was the immediate and invaluable feedback provided by instructor Mr. Shibata and HERO&apos;ZZ alumnus Tamago 3℃. Each team received direct, actionable insights on their three-minute presentation, allowing for an incredibly dense and effective &apos;High-Speed PDCA Cycle.&apos;</p>
                                    <p>This instant validation and constructive criticism turned the four-hour sprint into an intensely rich learning experience, perfectly embodying HERO&apos;ZZ University&apos;s &apos;hyper-practical&apos; approach.</p>
                                </div>
                                <div className="py-3">
                                    <h4>Connections That Lingered</h4>
                                    <p>As the hackathon concluded, the atmosphere shifted to one of joyous camaraderie. The networking reception kicked off at 7:30 PM, providing refreshments and an opportunity for participants to unwind and connect.</p>
                                    <p>The shared experience of creating under pressure had forged strong bonds, and the lively discussions extended late into the evening. It was clear no one wanted to leave, with many expressing how refreshing it was to push their limits and achieve maximum results within such a constrained timeframe.</p>
                                    <p>This sentiment perfectly encapsulates the spirit of the hackathon – pushing boundaries, fostering collaboration, and igniting a passion for creation.</p>
                                </div>
                                <div className="py-3">
                                    <p>The &apos;4 Hours to Viral!&apos; Short Video Creation Hackathon was an undeniable success, showcasing the talent within HERO&apos;ZZ University and reinforcing its commitment to empowering the next generation of social media creators.</p>
                                    <p>The energy, the learning, and the connections made are sure to fuel countless viral videos in the future!</p>
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

export default Event250517