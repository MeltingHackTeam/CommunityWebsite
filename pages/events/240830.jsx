import React, { useState } from 'react'
import { BackgroundVerticalLines, Footer, Header, Lightbox, ScrollToTop } from '@/components'
import Head from 'next/head'
import { blogData } from '@/components/Blog/BlogData'
import Image from 'next/image';
import Link from 'next/link';
import SmallImage1 from '@/public/images/events/event240830_small1.png'
import SmallImage2 from '@/public/images/events/event240830_small2.png'
import SmallImage3 from '@/public/images/events/event240830_small3.png'
import SmallImage4 from '@/public/images/events/event240830_small4.png'
import SmallImage5 from '@/public/images/events/event240830_small5.png'
import SmallImage6 from '@/public/images/events/event240830_small6.png'
import BigImage1 from '@/public/images/events/event240830_big1.png'
import BigImage2 from '@/public/images/events/event240830_big2.png'


const Event240830 = ({ post }) => {
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
                <title>SubscriptionApp Hackathon with RevenueCat</title>
                <meta name="description" content="&quot;RevenueCat Ship-a-ton&quot; is an international online hackathon hosted by RevenueCat. We co-hosted a special Japanese edition of the &quot;Subscription App Hackathon&quot; with RevenueCat." />
                <meta name="keywords" content="Hackathon, Offline, Mobile" />
            </Head>

            <main>
                {/* Header section */}
                <Header />
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                <h1 className="display-4 fw-normal">SubscriptionApp Hackathon with RevenueCat</h1>
                                <p>&quot;RevenueCat Ship-a-ton&quot; is an international online hackathon hosted by RevenueCat. We co-hosted a special Japanese edition of the &quot;Subscription App Hackathon&quot; with RevenueCat.</p>
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
                                    <span>August 30th, 2024</span>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Website</h6>
                                    <Link className="link-hover" href="https://melting-hack.connpass.com/event/327248/">https://melting-hack.connpass.com/event/327248/</Link>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Participants</h6>
                                    <span>50 members</span>
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
                                    <h4>A Symphony of Innovation and Collaboration</h4>
                                    <p>What began as a dream within a vibrant hackathon community has now become a reality. MeltingHack, a passionate community of creators, in collaboration with the global online hackathon RevenueCat Ship-a-ton, has successfully launched a special Japanese initiative: &quot;Turning Hackathon Ideas into Real Products.&quot;</p>
                                    <p>Despite the challenges of scheduling a hackathon in September, a month already saturated with various events, coupled with long weekends, student internships, and an unexpected typhoon, an impressive 40 participants eagerly joined this ambitious project. Driven by a shared passion for innovation, they embarked on a journey to transform their hackathon ideas into revenue-generating products.</p>
                                </div>
                                <div className="py-3">
                                    <h4>A Supportive and Inclusive Environment</h4>
                                    <p>MeltingHack is committed to fostering an inclusive environment where anyone, regardless of their background or skill set, can thrive. By providing bilingual support (Japanese and English) and welcoming participants from diverse fields such as engineering, design, and marketing, MeltingHack ensures that every individual can contribute their unique talents.</p>
                                    <p>This wasn&apos;t just a typical development event. Participants enjoyed access to physical development spaces, networked with individuals from various backgrounds, and benefited from the Guest Hacker/Designer program. Additionally, each team received a development fund of 20,000 yen, further fueling their creativity and innovation. With a shared goal of turning their ideas into profitable ventures, participants forged lasting connections and created unforgettable memories.</p>
                                </div>
                                <div className="py-3">
                                    <h4>A 17-Day Journey of Passion and Discovery</h4>
                                    <ul>
                                        <li><b>A Harmony of Diverse Perspectives:</b> Teams, both new and established, collaborated seamlessly, fostering a culture of respect and mutual support. This collaborative spirit gave rise to innovative and groundbreaking ideas.</li>
                                        <li><b>Cross-Team Collaboration:</b> Technical challenges, such as integrating Apple Developer Program and RevenueCat SDK, were overcome through collective effort. Team members helped each other, demonstrating the true power of teamwork.</li>
                                        <li><b>A Shared Vision:</b> By focusing on a common goal of monetization, participants cultivated a supportive and collaborative atmosphere, where competition was replaced by cooperation.</li>
                                        <li><b>The Power of Physical Spaces:</b> By providing access to the offices of artience, Money Forward, Mercari, and DeNA, MeltingHack inspired participants and boosted their development enthusiasm.</li>
                                        <li><b>The Strength of Community:</b> The vibrant MeltingHack community server played a crucial role in maintaining participant motivation and ensuring that everyone stayed on track until the end.</li>
                                    </ul>
                                </div>
                            </div>
                        </div> 
                        {/* end row */}

                        {/* Media */}
                        <div className="row g-4">
                            <div className="col-12 col-lg-4">
                                <Image className="border-radius-1" src={SmallImage4} alt="event" placeholder="blur" />
                            </div>
                            <div className="col-12 col-lg-4">
                                <Image className="border-radius-1" src={SmallImage5} alt="event" placeholder="blur" />
                            </div>
                            <div className="col-12 col-lg-4">
                                <Image className="border-radius-1" src={SmallImage6} alt="event" placeholder="blur" />
                            </div>
                        </div> 
                        {/* end row */}

                        {/* Content */}
                        <div className="row mt-5">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                {/* <div dangerouslySetInnerHTML={{ __html: post.content }} /> */}
                                <div className="py-3">
                                    <h4>Unveiling the Top 5 Award-Winning Apps!</h4>
                                </div>
                                <div className="py-3">
                                    <h4>1st: Artomo</h4>
                                    <ul>
                                        <li><b>Category:</b> Art discovery platform</li>
                                        <li><b>Team:</b> ARTIZANS</li>
                                        <li><b>AppStore:</b> <Link className="link-hover" href="https://apps.apple.com/jp/app/artomo/id6670409705">https://apps.apple.com/jp/app/artomo/id6670409705</Link></li>
                                    </ul>
                                </div>
                                <div className="py-3">
                                    <h4>2nd: HeartLinker</h4>
                                    <ul>
                                        <li><b>Category:</b> Relationship Management Hub</li>
                                        <li><b>Team:</b> Buddies</li>
                                    </ul>
                                </div>
                                <div className="py-3">
                                    <h4>3rd: Lawie</h4>
                                    <ul>
                                        <li><b>Category:</b> AI-powered legal document processing platform</li>
                                        <li><b>Team:</b> AKATSUKI</li>
                                        <li><b>AppStore:</b> <Link className="link-hover" href="https://apps.apple.com/app/lawie/id6670359342">https://apps.apple.com/app/lawie/id6670359342</Link></li>
                                    </ul>
                                </div>
                                <div className="py-3">
                                    <h4>4th: TaskAlly</h4>
                                    <ul>
                                        <li><b>Category:</b> AI-powered task prioritization</li>
                                        <li><b>Team:</b> TASKALLY</li>
                                        <li><b>AppStore:</b> <Link className="link-hover" href="https://apps.apple.com/app/taskally-ai/id6683297750">https://apps.apple.com/app/taskally-ai/id6683297750</Link></li>
                                    </ul>
                                </div>
                                <div className="py-3">
                                    <h4>5th: Cat Comm</h4>
                                    <ul>
                                        <li><b>Category:</b> Cat communication</li>
                                        <li><b>Team:</b> BreakFree Subs</li>
                                        <li><b>AppStore:</b> <Link className="link-hover" href="https://apps.apple.com/app/cat-comm-meow/id6673915410">https://apps.apple.com/app/cat-comm-meow/id6673915410</Link></li>
                                    </ul>
                                </div>
                                <div className="py-3">
                                    <h4>A Testament to the Power of Collaboration and Innovation</h4>
                                    <p>This initiative is a testament to the power of collaboration and innovation. By providing a supportive and inclusive environment, MeltingHack has empowered participants to turn their hackathon ideas into reality. This successful collaboration with RevenueCat Ship-a-ton has set a new benchmark for hackathons, demonstrating that with passion, dedication, and a shared vision, even the most ambitious goals can be achieved.</p>
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

export default Event240830