import React, { useState } from 'react'
import { Footer, Header, Lightbox, ScrollToTop } from '@/components'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import SmallImage1 from '@/public/images/events/event260427_small1.png'
import SmallImage2 from '@/public/images/events/event260427_small2.png'
import SmallImage3 from '@/public/images/events/event260427_small3.png'
import BigImage1 from '@/public/images/events/event260427_big1.png'
import BigImage2 from '@/public/images/events/event260427_big2.png'

const Event260427 = () => {
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
                <title>AI Agent Night — Where Anxiety Becomes Your Weapon</title>
                <meta
                    name="description"
                    content="On April 27, 2026, MeltingHack and Alibaba Cloud hosted AI Agent Night at Tunnel Tokyo — a 2-hour hands-on lab where 60 participants flipped their hesitation into real Agents built with Qoder Work and WAN 2.7."
                />
                <meta name="keywords" content="Workshop, Offline, AI, Agent, Qoder Work, WAN 2.7, Alibaba Cloud" />
            </Head>

            <main>
                {/* Header section */}
                <Header />

                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                <h1 className="display-4 fw-normal">AI Agent Night</h1>
                                <p>
                                    はじめてのAI Agent体験 — Where Anxiety Becomes Your Weapon. A 2-hour hands-on lab
                                    that turned 60 first-timers and veterans alike into Agent builders, in one evening.
                                </p>
                            </div>
                        </div> {/* end row */}
                        <div className="row g-4 mt-4">
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Category</h6>
                                    <ul className="list-inline-dot">
                                        <li>Workshop</li>
                                        <li>Offline</li>
                                        <li>AI</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Date</h6>
                                    <span>April 27th, 2026</span>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Website</h6>
                                    <Link className="link-hover" href="https://luma.com/5dqd8dao">https://luma.com/5dqd8dao</Link>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Partners</h6>
                                    <span>Alibaba Cloud, MeltingHack</span>
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
                                <Image className="border-radius-1" src={SmallImage1} alt="AI Agent Night" placeholder="blur" />
                            </div>
                            <div className="col-12 col-lg-4">
                                <Image className="border-radius-1" src={SmallImage2} alt="AI Agent Night" placeholder="blur" />
                            </div>
                            <div className="col-12 col-lg-4">
                                <Image className="border-radius-1" src={SmallImage3} alt="AI Agent Night" placeholder="blur" />
                            </div>
                        </div>
                        {/* end row */}

                        {/* Content */}
                        <div className="row mt-5">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                <div className="py-3">
                                    <h4>Overview: From &quot;Not For Me&quot; to &quot;I Just Built That&quot;</h4>
                                    <p>
                                        In 2026, AI Agents quietly crossed the line from &quot;tool the few use&quot; to &quot;tool with no
                                        reason not to use.&quot; And yet — a lot of people still hesitate. Terminals feel scary. Trusting
                                        an autonomous Agent with real work feels reckless. The vocabulary alone can be exhausting before
                                        you&apos;ve typed a single prompt.
                                    </p>
                                    <p>
                                        On April 27, MeltingHack and <strong>Alibaba Cloud</strong> hosted <strong>AI Agent Night</strong> at
                                        Tunnel Tokyo to flip exactly that hesitation. 115 people registered on Luma; 60 packed into the 9F
                                        venue at Sumitomo Fudosan Osaki Garden Tower. The brief was simple — 2 hours, hands on the keyboard,
                                        leave with an Agent you actually built. Engineers who use Claude Code daily sat next to marketers,
                                        PMs, and students who had never touched an Agent before. Staff density was deliberate: 1 per 3 to 4
                                        attendees, so nobody got stuck.
                                    </p>
                                    <p>
                                        The framing for the night was what we kept calling the <strong>30% rule</strong>. You don&apos;t need
                                        to delegate 100% of your work to AI to win. If an Agent finishes a 1-hour task in 5 minutes — even a
                                        rough first draft — you&apos;ve already won the trade. The whole evening was designed around proving
                                        that, not arguing it.
                                    </p>
                                </div>

                                <div className="py-3">
                                    <h4>Featured: Qoder Work — Your Desktop Agent</h4>
                                    <p>
                                        The hands-on portion ran on <strong>Qoder Work</strong>, Alibaba Cloud&apos;s desktop AI Agent
                                        application. The opening 20 minutes were a tight lecture — &quot;the true identity of an AI Agent&quot;
                                        — making one thing crisp: an Agent is not a chatbot. It runs an autonomous loop of indicate, execute,
                                        verify, and fix. We mapped where that loop fits inside actual day-to-day work, then handed everyone
                                        the keyboard.
                                    </p>
                                    <p>
                                        The next 70 minutes were structured as four steps. <strong>Step 1</strong>: type your first
                                        instruction into Qoder Work — and try the same prompt three ways (casual, business, English) to feel
                                        how phrasing changes output. <strong>Step 2</strong>: build your own Agent by writing a System Prompt,
                                        choosing from four scenarios — meeting-minutes summarizer, email drafter, daily-report writer, or
                                        research synthesizer. By the time the second step closed, the room had gone quiet in the good way —
                                        the way a room goes quiet when people are actually shipping something.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* end row */}

                        {/* Images */}
                        <div className="row g-4 mt-4">
                            <div className="col-12 col-md-6">
                                <div className="lightbox-image" onClick={() => openLightbox(BigImage1)} style={{ cursor: 'pointer' }}>
                                    <Image src={BigImage1} alt="AI Agent Night" placeholder="blur" />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="lightbox-image" onClick={() => openLightbox(BigImage2)} style={{ cursor: 'pointer' }}>
                                    <Image src={BigImage2} alt="AI Agent Night group photo" placeholder="blur" />
                                </div>
                            </div>
                        </div>
                        {/* end row */}

                        {/* Content */}
                        <div className="row mt-5">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                <div className="py-3">
                                    <h4>Featured: WAN 2.7 — When Your Agent Can Draw</h4>
                                    <p>
                                        <strong>Step 3</strong> brought visuals into the mix using <strong>WAN 2.7</strong>, Alibaba
                                        Cloud&apos;s image generation model released on April 3, 2026. Participants generated business-grade
                                        visuals on demand — slide imagery, SNS banner art, article cover graphics. The point wasn&apos;t to
                                        make pretty pictures; it was to feel how fast a usable first asset can land in your hands when you
                                        stop treating image generation as a separate creative task and start treating it as another Agent
                                        capability.
                                    </p>
                                    <p>
                                        <strong>Step 4</strong> was the payoff: combine text and visuals into one composite Agent. The
                                        canonical example everyone tried — a weekly-report Agent that writes the body of the report and
                                        generates a chart-style cover image to go with it. Two capabilities, one prompt, one click.
                                        That&apos;s when the &quot;wait, that&apos;s it?&quot; reactions started landing across the room. We
                                        wrapped with 15 minutes of show-and-tell, 5 minutes of closing, and 60 minutes of food, drinks, and
                                        the kind of networking that only happens after people have just built something together.
                                    </p>
                                </div>

                                <div className="py-3">
                                    <h4>Best Practices the Room Discovered</h4>
                                    <p>
                                        <strong>Be specific in image prompts, and name the use case inside the prompt itself.</strong> &quot;An
                                        image for a slide&quot; or &quot;an image for an SNS banner&quot; consistently produced more usable
                                        output than abstract descriptions. The model isn&apos;t guessing what aspect ratio, density, or
                                        composition you need — tell it.
                                    </p>
                                    <p>
                                        <strong>Generate 3 to 5 variations, not one perfect shot.</strong> Chasing the one-shot perfect image
                                        burns time. Generating a small batch and picking the best one is faster, cheaper in attention, and
                                        almost always lands somewhere stronger than a single retry-and-tweak loop.
                                    </p>
                                    <p>
                                        <strong>Leave the actual text overlays to Canva.</strong> AI-rendered text inside images is still
                                        unreliable in 2026 — the typography goes sideways, the kerning gets weird, and proper nouns mutate.
                                        Generate the visual in WAN 2.7, then layer the real text on top in Canva (or any layout tool you
                                        already trust). It&apos;s a 30-second pipeline that saves hours of frustration.
                                    </p>
                                </div>

                                <div className="py-3">
                                    <h4>Closing</h4>
                                    <p>
                                        AI Agent Night was built on a single bet — that the gap between &quot;AI Agents are not for me&quot;
                                        and &quot;I just shipped one&quot; is much smaller than it feels from the outside. 60 people spent
                                        2 hours proving that bet right.
                                    </p>
                                    <p>
                                        Huge thanks to <strong>Alibaba Cloud Japan</strong> for partnering with us, to the <strong>Qoder
                                        Work</strong> and <strong>WAN 2.7</strong> teams for putting their tools in everyone&apos;s hands,
                                        and to <strong>Tunnel Tokyo</strong> for the venue. Thanks also to <strong>SCYLOG</strong> and <strong>Neeew
                                        Local</strong> for the support that made the night land. To every participant who showed up curious
                                        and left building — you&apos;re the reason we do this.
                                    </p>
                                    <p>
                                        Next MeltingHack event is already in motion. Come hang out in our Discord — and if tonight was your
                                        first Agent, it definitely won&apos;t be your last.
                                    </p>
                                    <p><strong>See you at the next one.</strong></p>
                                </div>
                            </div>
                        </div>
                        {/* end row */}
                    </div>
                    {/* end container */}
                </div>

                {lightboxImage && (
                    <Lightbox image={lightboxImage} closeLightbox={closeLightbox} />
                )}

                {/* Footer section */}
                <Footer />
                {/* Scroll To Top */}
                <ScrollToTop />
            </main>
        </>
    )
}

export default Event260427
