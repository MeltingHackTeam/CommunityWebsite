import React, { useState } from 'react'
import { BackgroundVerticalLines, Footer, Header, Lightbox, ScrollToTop } from '@/components'
import Head from 'next/head'
import { blogData } from '@/components/Blog/BlogData'
import Image from 'next/image';
import Link from 'next/link';
import SmallImage1 from '@/public/images/events/event250425_small1.png'
import SmallImage2 from '@/public/images/events/event250425_small2.png'
import SmallImage3 from '@/public/images/events/event250425_small3.png'
import SmallImage4 from '@/public/images/events/event250425_small4.png'
import SmallImage5 from '@/public/images/events/event250425_small5.png'
import SmallImage6 from '@/public/images/events/event250425_small6.png'
import BigImage1 from '@/public/images/events/event250425_big1.png'
import BigImage2 from '@/public/images/events/event250425_big2.png'
import BigImage3 from '@/public/images/events/event250425_big3.png'

const Event250425 = ({ post }) => {
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
                <title>Tokyo Game Jam - Spring 2025</title>
                <meta name="description" content="A challenging 3day game development hackathon focused on leveraging AI technology and provided participants with Alibaba Cloud&apos;s AI resources" />
                <meta name="keywords" content="Hackathon, Offline, Game" />
            </Head>

            <main>
                {/* Header section */}
                <Header />
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                <h1 className="display-4 fw-normal">Tokyo Game Jam - Spring 2025</h1>
                                <p>A challenging 3day game development hackathon focused on leveraging AI technology and provided participants with Alibaba Cloud&apos;s AI resources</p>
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
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Date</h6>
                                    <span>April 25th-27th, 2025</span>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Website</h6>
                                    <Link className="link-hover" href="https://lu.ma/e22gsvak">https://lu.ma/e22gsvak</Link>
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
                                    <p>The Tokyo Game Jam 2025 Spring, a collaboration between Alibaba Cloud and MeltingHack, ran from April 25th to 27th, 2025. </p>
                                    <p>Focused on &quot;Utilizing AI technology in development or games,&quot; the hackathon saw teams rapidly develop game concepts to demos. </p>
                                    <p>Alibaba Cloud, a leader in cloud services and AI with its Qwen models, provided the technical backbone. </p>
                                    <p>The intensive three-day event culminated in &apos;Big Brother,&apos; a card game by a team of five, winning the ¥1,000,000 grand prize for its groundbreaking use of AI.</p>
                                </div>
                                <div className="py-3">
                                    <p>While many teams leveraged generative AI for assets or dialogue, &apos;Big Brother&apos; stood out by having AI dynamically alter the game&apos;s rules during play, a core innovation. </p>
                                    <p>Participants, ranging from industry vets to students, formed 12 teams to compete under judging criteria that heavily weighted AI innovation. Access to Alibaba Cloud&apos;s AI environment was provided.</p>
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
                                    <h4>Here are some notable projects showcased:</h4>
                                </div>
                                <div className="py-3">
                                    <h4>🥇 1st Place: Big Brother</h4>
                                    <p><b>Project Page:</b> <Link className="link-hover" href="https://sushibytes.itch.io/big-brother">https://sushibytes.itch.io/big-brother</Link></p>
                                    <p>Inspired by &apos;1984&apos; and &apos;Mao,&apos; this psychological card game uses a standard deck but hides the rules. Players must infer rules from gameplay, with AI dynamically generating new rules as Python scripts throughout the game.</p>
                                </div>
                                <div className="py-3">
                                    <h4>🥈 2nd Place: The Normal Dating Game</h4>
                                    <p><b>Project Page:</b> <Link className="link-hover" href="https://bt-games-mac.itch.io/the-normal-dating-game">https://bt-games-mac.itch.io/the-normal-dating-game</Link></p>
                                    <p>A blend of visual novel dating sim and &apos;Werewolf,&apos; featuring a horror twist among potential dates. AI powered character conversations and judgments, allowing players free-text responses tailored to personalities.</p>
                                </div>
                                <div className="py-3">
                                    <h4>🥉 3rd Place: Lost and Found</h4>
                                    <p><b>Project Page:</b> <Link className="link-hover" href="https://kenrio.itch.io/lost-and-found">https://kenrio.itch.io/lost-and-found</Link></p>
                                    <p>An isometric exploration game where players, as a robot, find lost items for city inhabitants. It included generating &quot;memories&quot; as videos from player actions via AI.</p>
                                </div>
                                <div className="py-3">
                                    <h4>Alibaba Award & Audience Award: Cosmic Diner</h4>
                                    <p><b>Project Page:</b> <Link className="link-hover" href="https://redbluebird.itch.io/cosmic-diner">https://redbluebird.itch.io/cosmic-diner</Link></p>
                                    <p>A crafting/horror game where players make AI-generated dishes from various items and serve them to Lovecraftian customers. AI assisted in crafting and customer evaluation, noted for its unsettling visuals and atmosphere.</p>
                                </div>
                                <div className="py-3">
                                    <h4>Alibaba Award: PromptVision</h4>
                                    <p><b>Project Page:</b> <Link className="link-hover" href="https://gimu-ai.itch.io/promptvision">https://gimu-ai.itch.io/promptvision</Link></p>
                                    <p>A party game using image generation AI. Players guess the bizarre keyword combinations (like &apos;Napoleon,&apos; &apos;surfing,&apos; &apos;Antarctica&apos;) used to generate AI images without seeing the prompts.</p>
                                </div>
                                <div className="py-3">
                                    <p>&apos;Big Brother&apos; was the champion, despite strong competition. Judge Mr. Horikoshi of Mynet highlighted the crucial difference: while others used AI within the game, &apos;Big Brother&apos; had AI create the game&apos;s fundamental rules. </p>
                                    <p>He called this a glimpse into &quot;the future of gaming.&quot; The concept of AI-determined, unrevealed rules also powerfully matched the game&apos;s dystopian themes of surveillance and control, adding depth despite the potential stress, contributing to its high score in gameplay and thematic unity.</p>
                                </div>
                                <div className="py-3">
                                    <p>This Tokyo Game Jam demonstrated the diverse and innovative ways AI is beginning to reshape game development and the gaming experience itself.</p>
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

                        {/* Images */}
                        <div className="row g-4 mt-4">
                            {/* Images Lightbox */}
                            <div className="lightbox-image">
                                <Image src={BigImage3} alt="event" placeholder="blur" />
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

export default Event250425