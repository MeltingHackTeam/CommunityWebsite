import React, { useState } from 'react'
import { BackgroundVerticalLines, Footer, Header, Lightbox, ScrollToTop } from '@/components'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import SmallImage1 from '@/public/images/events/event250601_small1.png'
import SmallImage2 from '@/public/images/events/event250601_small2.png'
import SmallImage3 from '@/public/images/events/event250601_small3.png'
import BigImage1 from '@/public/images/events/event250601_big1.png'
import BigImage2 from '@/public/images/events/event250601_big2.png'

const Event250601 = () => {
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
                <title>AI Agent Hackathon: Revolutionizing Health Concierge and Fostering Innovation</title>
                <meta name="description" content="A recap of the 1-Day AI Agent Hackathon themed &quot;Health Concierge&quot; and its impact on Japan&apos;s tech and healthcare communities." />
                <meta name="keywords" content="Hackathon, Offline, AI" />
            </Head>

            <main>
                {/* Header section */}
                <Header />
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                <h1 className="display-4 fw-normal">AI Agent Hackathon: Revolutionizing Health Concierge and Fostering Innovation</h1>
                                <p>The 1-Day AI Agent Hackathon, themed &quot;Health Concierge&quot;, made a significant impact in Japan&apos;s tech and healthcare communities.</p>
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
                                    <span>June 1st, 2025</span>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Website</h6>
                                    <Link className="link-hover" href="https://lu.ma/913igze9">https://lu.ma/913igze9</Link>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Participants</h6>
                                    <span>70 members</span>
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
                                <div className="py-3">
                                    <p>The recent 1-Day AI Agent Hackathon, themed &quot;Health Concierge,&quot; made a significant impact in Japan&apos;s tech and healthcare communities. This event transcended the typical hackathon format, fostering a uniquely collaborative and inclusive environment while pushing the boundaries of what can be achieved in a short timeframe. With a focus on real-world applications and societal benefit, the hackathon showcased the immense potential of AI to address pressing health challenges.</p>
                                </div>
                                <div className="py-3">
                                    <h4>A Distinctive Approach to Rapid Prototyping</h4>
                                    <p>Unlike many hackathons that emphasize intense competition, this event prioritized mutual effort and practical skill acquisition. The structured format—a 1-hour workshop, 30 minutes of brainstorming, and a 4-hour coding sprint—was specifically designed to help participants rapidly develop cutting-edge AI skills. As one organizer aptly put it, &quot;Is 4 hours enough to develop a working product? Probably not—but that&apos;s part of the magic!&quot; This brief but intense period encouraged teams to focus on core functionalities and innovative problem-solving, rather than striving for perfection.</p>
                                    <p>The &quot;Health Concierge&quot; theme attracted a diverse group of participants, including many professionals from the healthcare industry. This inclusion of real-world perspectives was a key differentiator, ensuring that the AI solutions developed were grounded in genuine needs and challenges. Seasoned mentors provided crucial support, enabling even those with limited medical or technical backgrounds to quickly grasp new concepts and contribute meaningfully. This emphasis on inclusivity and support cultivated an environment where &quot;everyone supports each other&apos;s ideas and technical hurdles.&quot;</p>
                                </div>
                                <div className="py-3">
                                    <h4>&quot;Kiki Chat&quot;: A Beacon of Proactive Suicide Prevention</h4>
                                    <p>One standout project, &quot;Kiki Chat,&quot; exemplifies the hackathon&apos;s commitment to creating impactful solutions. This team tackled the critical issue of suicide prevention in Japan, recognizing that many individuals don&apos;t identify their deteriorating mental health until it&apos;s too late. Their idea was to develop an AI journaling companion that &quot;listens to your thoughts daily for 30 days,&quot; aiming to intervene before individuals reach a crisis point.</p>
                                    <p>The team&apos;s rapid development process for Kiki Chat highlighted the effectiveness of the hackathon&apos;s structure. They leveraged n8n for low-code automation, integrated with the LINE app via its Developer API for widespread accessibility in Japan, and utilized Google Gemini AI for context retention and response generation. Crucially, they incorporated a Kaggle NLP dataset derived from Reddit users in suicidal and depression groups, demonstrating a data-driven approach to understanding and addressing mental health concerns. The project&apos;s simplicity in design, contrasted with its profound purpose, resonated deeply with the hackathon&apos;s underlying philosophy: &quot;the most effective tools are not the ones that are technically complex, but those that meet real needs.&quot;</p>
                                </div>
                                <div className="py-3">
                                    <h4>Beyond Kiki Chat: A Spectrum of Innovation</h4>
                                    <p>While Kiki Chat was a powerful example, the hackathon saw a wide array of innovative prototypes addressing various aspects of health. Teams explored solutions for sleep improvement, optimized patient-doctor matching, AI-driven skincare advice, and online medical consultations. These diverse projects underscored the versatility of AI agents in the healthcare sector and demonstrated how even short development cycles can yield promising foundational prototypes. The collective spirit and shared goal of solving societal problems with AI were palpable throughout the event.</p>
                                </div>
                                <div className="py-3">
                                    <h4>Fostering Diversity and Community</h4>
                                    <p>A particularly noteworthy aspect of this hackathon was its success in fostering diversity. With over 75 registrations and the highest female participation in any hackathon one of the co-organizers had ever witnessed, the event made significant strides towards creating a more inclusive environment. This diverse representation brought a richer array of perspectives to the table, leading to more comprehensive and innovative solutions. The organizers are committed to continuing this progress, recognizing that diverse teams are essential for groundbreaking innovation.</p>
                                    <p>The hackathon wasn&apos;t just about building AI agents; it was about building a vibrant community. The consistent feedback from participants eager for another round speaks volumes about the collaborative and engaging atmosphere. This event served as a powerful reminder that hackathons can be more than just competitions; they can be platforms for mutual learning, networking, and collective impact.</p>
                                </div>
                                <div className="py-3">
                                    <h4>Looking Ahead</h4>
                                    <p>The success of the &quot;Health Concierge&quot; hackathon has set a high bar for future events. With plans for the next hackathon in October, the organizers are keen to continue exploring new formats and ideas, &quot;re-imagining the whole concept of a &apos;Hackathon.&apos;&quot; The enthusiasm from participants and the clear societal benefit demonstrated by projects like Kiki Chat solidify the value of these initiatives. As the AI landscape continues to evolve, events like this hackathon are crucial for cultivating the talent and fostering the collaborative spirit needed to harness AI&apos;s full potential for societal good in Japan and beyond.</p>
                                </div>
                            </div>
                        </div> 
                        {/* end row */}

                        {/* Images */}
                        <div className="row g-4 mt-4">
                            {/* Images Lightbox */}
                            <div className="col-12 col-md-6">
                                <div className="lightbox-image" onClick={() => openLightbox(BigImage1)} style={{ cursor: 'pointer' }}>
                                    <Image src={BigImage1} alt="event" placeholder="blur" />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="lightbox-image" onClick={() => openLightbox(BigImage2)} style={{ cursor: 'pointer' }}>
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

export default Event250601 