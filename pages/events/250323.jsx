import React, { useState } from 'react'
import { BackgroundVerticalLines, Footer, Header, Lightbox, ScrollToTop } from '@/components'
import Head from 'next/head'
import { blogData } from '@/components/Blog/BlogData'
import Image from 'next/image';
import Link from 'next/link';
import SmallImage1 from '@/public/images/events/Event250323_small1.png'
import SmallImage2 from '@/public/images/events/Event250323_small2.png'
import SmallImage3 from '@/public/images/events/Event250323_small3.png'
import SmallImage4 from '@/public/images/events/Event250323_small4.png'
import SmallImage5 from '@/public/images/events/Event250323_small5.png'
import SmallImage6 from '@/public/images/events/Event250323_small6.png'
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
                <title>Apple Vision Pro Hackathon</title>
                <meta name="description" content="" />
                <meta name="keywords" content="Hackathon, Offline, VR" />
            </Head>

            <main>
                {/* Header section */}
                <Header />
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                <h1 className="display-4 fw-normal">Apple Vision Pro Hackathon</h1>
                                <p>TODO</p>
                            </div>
                        </div> {/* end row */}
                        <div className="row g-4 mt-4">
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Category</h6>
                                    <ul className="list-inline-dot">
                                        <li>Hackathon</li>
                                        <li>Offline</li>
                                        <li>VR</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Date</h6>
                                    <span>March 21st-23rd, 2025</span>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Website</h6>
                                    <Link className="link-hover" href="https://melting-hack.connpass.com/event/341206/">https://melting-hack.connpass.com/event/341206/</Link>
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
                                    <p>From March 21–23, 2023, we hosted "Apple Vision Pro Hackathon", a special three-day hackathon focused entirely on Apple's Vision Pro platform.</p>
                                    <p>55 participants from across Japan joined this exciting event, including 20 university students, 30% women. We were delighted and deeply moved to welcome participants traveling from as far as Hokkaido, Gifu, and Nagoya, making this a truly nationwide event.</p>
                                </div>
                                <div className="py-3">
                                    <h4>Day 1 ✨</h4>
                                    <p>The hackathon began on a high note with an inspiring technical session led by an Apple evangelist.</p>
                                    <p>Participants got their first hands-on glimpse of Vision Pro technology, quickly becoming filled with excitement and anticipation upon discovering the remarkable possibilities it unlocks.</p>
                                    <p>We then transitioned into introductions, where each of our special judges and our diverse attendees shared their backgrounds, interests, and ambitions. This naturally sparked conversations that smoothly led into team formation. By the end of Day 1, fourteen innovative teams had already emerged, enthusiastically diving into ideation and networking sessions.</p>
                                </div>
                                <div className="py-3">
                                    <p>One unique highlight of MeltingHack was the rare opportunity for participants to borrow and use actual Apple Vision Pro devices in their project development. Paired with delicious catering provided during the day, it created an ideal atmosphere for fostering creativity and collaboration.</p>
                                    <p>The name "MeltingHack" was inspired by our hope that participants would become so immersed—almost melting away—due to excitement and sheer passion. Witnessing everyone's enthusiasm throughout this initial day truly energized and motivated our entire organizing team.</p>
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
                                    <h4>Day 3 (Final Day) 🚀🏆</h4>
                                    <p>After deepening their ideas on Day 1 and intensely working through Day 2's development phase, all fourteen teams confidently presented their projects on our final day.</p>
                                    <p>Impressively, most participants had never experienced Vision Pro prior to the event, yet each team showcased highly innovative prototypes, clearly demonstrating Vision Pro's full potential. The pitches were captivating and dynamic, resulting in animated conversations among the judges and a truly difficult deliberation for awards. Ultimately, three outstanding teams stood out to claim the top prizes:</p>
                                </div>
                                <div className="py-3">
                                    <h4>🎉 Winners Announcement 🎉</h4>
                                </div>
                                <div className="py-3">
                                    <h4>🥇 1st Place: Vision Pro Beginners</h4>
                                    <p><b>Project Name:</b> "Omoide Bubble" (Memory Bubble)</p>
                                    <p>A next-generation immersive photo album app that allows users to relive special memories in virtual spaces. Its inclusive UI enables people located far away or individuals with limited mobility to effortlessly enjoy their precious moments in an entirely new, immersive context. Vision Pro Beginners earned the highest praise for their thoughtful approach.</p>
                                </div>
                                <div className="py-3">
                                    <h4>🥈 2nd Place: EZO</h4>
                                    <p><b>Project Name:</b> "BONSAI"</p>
                                    <p>An engaging visual management tool that grows a virtual bonsai plant as your GitHub commits progress. Its delightful interface and creative approach to project visualization charmed judges and audience alike, leaving everyone excited about its future possibilities.</p>
                                </div>
                                <div className="py-3">
                                    <h4>🥉 3rd Place: Seals</h4>
                                    <p><b>Project Name:</b> "Doco Camp"</p>
                                    <p>An immersive camping-experience app that lets anyone easily enjoy the sounds, scenery, and seasonal ambience of camping at home. The judges hailed Seals' work as an exceptional utilization of Vision Pro capabilities, admiring its vivid audio-visual fidelity and imaginative representation of outdoor environments.</p>
                                </div>
                                <div className="py-3">
                                    <p>After the awards ceremony, participants enjoyed chatting, networking, and relaxing together over delicious catering. The atmosphere throughout was lively, full of excitement, accomplishment, and friendly conversations. Witnessing the satisfied smiles and sense of achievement from all participants made our organizing team incredibly grateful and fulfilled.</p>
                                    <p>We sincerely thank every participant who shared their creativity, passion, and determination with us for these inspiring three days. A huge thank-you also goes to our partners and sponsors for their incredible support and generosity, without whom this ambitious event would not have been possible.</p>
                                    <p>We look forward to continuing our journey of exploring the limitless possibilities of Apple Vision Pro. As we wrap up MeltingHack for this time, we eagerly anticipate the chance to welcome you all again at future events and hackathons!</p>
                                    <p>Thank you once again, from all of us here at MeltingHack! 🍎🥽✨🚀</p>
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