import React, { useState } from 'react'
import { BackgroundVerticalLines, Footer, Header, Lightbox, ScrollToTop } from '@/components'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import SmallImage1 from '@/public/images/events/event250823_small1.png'
import SmallImage2 from '@/public/images/events/event250823_small2.png'
import SmallImage3 from '@/public/images/events/event250823_small3.png'
import BigImage1 from '@/public/images/events/event250823_big1.png'
import BigImage2 from '@/public/images/events/event250823_big2.png'

const Event250823 = ({ post }) => {
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
                <title>Vibe Coding: 1-Day Ship Challenge in Tokyo – Japan's Hub for RevenueCat Shipaton 2025</title>
                <meta name="description" content="Event recap: Vibe Coding 1-Day Ship Challenge in Kawasaki, Japan's hub for RevenueCat Shipaton 2025. 21 apps shipped, AI-as-coder workflow, and RevenueCat integration." />
                <meta name="keywords" content="Hackathon, Offline, Mobile" />
            </Head>

            <main>
                {/* Header section */}
                <Header />
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                <h1 className="display-4 fw-normal">Vibe Coding: 1-Day Ship Challenge in Tokyo – Japan's Hub for RevenueCat Shipaton 2025</h1>
                                <p>Japan hub event for the global RevenueCat Shipaton 2025, showcasing AI-driven "Vibe Coding" and rapid app shipping.</p>
                            </div>
                        </div> {/* end row */}
                        <div className="row g-4 mt-4">
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Category</h6>
                                    <ul className="list-inline-dot">
                                        <li>Hackathon</li>
                                        <li>Offline</li>
                                        <li>Mobile</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Date</h6>
                                    <span>August 23rd, 2025</span>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Website</h6>
                                    <Link className="link-hover" href="https://lu.ma/43esivo3">https://lu.ma/43esivo3</Link>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Participants</h6>
                                    <span>80 members</span>
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
                                <Image className="border-radius-1" src={SmallImage1} alt="Vibe Coding Ship Challenge" placeholder="blur" />
                            </div>
                            <div className="col-12 col-lg-4">
                                <Image className="border-radius-1" src={SmallImage2} alt="Vibe Coding Ship Challenge" placeholder="blur" />
                            </div>
                            <div className="col-12 col-lg-4">
                                <Image className="border-radius-1" src={SmallImage3} alt="Vibe Coding Ship Challenge" placeholder="blur" />
                            </div>
                        </div> 
                        {/* end row */}

                        {/* Content */}
                        <div className="row mt-5">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                <div className="py-3">
                                    <h4>Event Report</h4>
                                    <p>On August 23rd, 2025, the <strong>Vibe Coding: 1-Day Ship Challenge</strong> took place at the Uvance Innovation Studio in Kawasaki, Kanagawa, Japan. Hosted by MeltingHack, a vibrant Tokyo-based hackathon community, this event served as <strong>Japan's official hub for the global RevenueCat Shipaton 2025</strong>. The challenge, supported by RevenueCat, aimed to leverage the growing trend of "Vibe Coding" to enable participants to rapidly build and launch mobile applications, reflecting a global surge in interest for easily implementing mobile apps and fostering new entrepreneurial ventures.</p>
                                    <p>The <strong>RevenueCat Shipaton 2025</strong> is a global mobile hackathon, now in its second year, focused on "shipping apps and starting making money". It invites developers from all corners of the globe to <strong>ship brand-new apps to the iOS, Android, or Mac App Store between August 1st and September 30th, 2025</strong>. A core requirement for participation is to <strong>integrate the RevenueCat SDK to power at least one in-app or web purchase</strong>. With over <strong>$350,000 in cash prizes</strong> and unique rewards like apps being featured on the iconic Times Square billboard, the Shipaton aims to provide the final push for developers to bring their project ideas to life. RevenueCat's mission is to support developers in building and monetizing amazing apps, handling complex backend infrastructure for in-app purchases, and providing tools for managing subscriptions, tracking performance, and analyzing revenue.</p>
                                </div>
                                <div className="py-3">
                                    <h4>Vibe Coding: AI as Your Coding Partner</h4>
                                    <p>The Tokyo event specifically championed <strong>"Vibe Coding,"</strong> a modern development style where <strong>AI acts as the "code writer" and humans serve as "product managers,"</strong> providing instructions and focusing on creative problem-solving and business value. This approach dramatically accelerates development, turning weeks of traditional coding into just a few hours, while also enhancing code quality by generating consistent, best-practice-aligned code. Participants at the Vibe Coding: 1-Day Ship Challenge were guided to master a game-changing tech stack including <strong>Bolt, Expo, and the RevenueCat SDK</strong>, which are crucial for transforming prototypes into revenue-generating applications.</p>
                                </div>
                                <div className="py-3">
                                    <h4>Ship Fast, Learn Faster</h4>
                                    <p>The challenge emphasized a <strong>"Ship Fast, Learn Faster" philosophy</strong>, advocating for rapid release and iteration over aiming for initial perfection. The event's schedule included a kickoff with an overview of Shipaton 2025 and a technical hands-on workshop, followed by <strong>four hours of intensive hacking time</strong> with mentor support. Participants were required to have an app idea and the drive to build an app in one day. The development process outlined for Vibe Coding included seven key steps: idea brainstorming and market research with AI as a "thinking partner," creating comprehensive technical specifications, implementing the app from scratch using AI for feature units, connecting backend services like Firebase or Supabase, <strong>integrating RevenueCat for billing functions</strong>, distributing beta apps via Expo Application Services (EAS), and finally, presenting and receiving feedback. Essential "AI conversation tips" were shared, such as giving concrete instructions, maintaining context, iterating, and splitting large tasks into smaller sessions. A key mindset reinforced was viewing <strong>AI as a partner, not merely a tool</strong>, and embracing a learning attitude while verifying AI outputs.</p>
                                </div>
                                <div className="py-3">
                                    <h4>What Participants Built</h4>
                                    <p>Despite the short, four-hour development period, the event was an overwhelming success, leading to the creation of <strong>21 incredibly impressive mobile applications</strong>. The diversity and quality of the projects were remarkable, showcasing the power of Vibe Coding and the creativity of the participants. Notable examples included:</p>
                                    <ul>
                                        <li>An app for <strong>language learning through karaoke</strong>, displaying lyrics for study [user].</li>
                                        <li>A <strong>bonsai simulation app</strong> allowing users to virtually try out bonsai in their rooms and purchase them within the app [user].</li>
                                        <li>A <strong>gamified task management app</strong> designed to help users establish daily habits [user].</li>
                                        <li>A <strong>voice-activated medical concierge app</strong> for consulting on health issues and receiving advice [user].</li>
                                        <li>Apps aimed at <strong>sustaining training and workout routines</strong> [user].</li>
                                    </ul>
                                    <p>These services were so compelling that many felt they would willingly pay to use them [user]. The workshop, refined by MeltingHack's experience, successfully captivated attendees, making them believe that even beginners could develop an app. Feedback like, <strong>"I wish I had known this Vibe Coding method sooner!"</strong> highlighted the impact of the shared techniques [user]. The participants' engagement was palpable, with many leaning into the presentation screens, eager to absorb every piece of information [user].</p>
                                </div>
                                <div className="py-3">
                                    <h4>Conclusion</h4>
                                    <p>The Vibe Coding: 1-Day Ship Challenge in Tokyo perfectly demonstrated the current excitement around Vibe Coding and the ease with which mobile applications can now be developed. It underscored the increasing accessibility of entrepreneurship for small teams, with the explicit goal of seeing hackathon-born ideas evolve directly into monetizable services. Through the support of RevenueCat and the innovative approach of Vibe Coding, this event not only inspired but also empowered a new generation of developers to ship amazing apps and contribute to the global innovation landscape.</p>
                                </div>
                            </div>
                        </div> 
                        {/* end row */}

                        {/* Images */}
                        <div className="row g-4 mt-4">
                            {/* Images Lightbox */}
                            <div className="col-12 col-md-6">
                                <div className="lightbox-image">
                                    <Image src={BigImage1} alt="Vibe Coding Ship Challenge" placeholder="blur" />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="lightbox-image">
                                    <Image src={BigImage2} alt="Vibe Coding Ship Challenge" placeholder="blur" />
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

export default Event250823


