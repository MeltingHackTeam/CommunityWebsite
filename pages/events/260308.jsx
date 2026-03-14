import React, { useState } from 'react'
import { Footer, Header, Lightbox, ScrollToTop } from '@/components'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import SmallImage1 from '@/public/images/events/event260307_small1.png'
import SmallImage2 from '@/public/images/events/event260307_small2.png'
import SmallImage3 from '@/public/images/events/event260307_small3.png'
import BigImage1 from '@/public/images/events/event260307_big1.png'
import BigImage2 from '@/public/images/events/event260307_big2.png'

const Event260308 = () => {
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
                <title>Figma Make 1Day Challenge — From Prompt to Product in One Afternoon</title>
                <meta
                    name="description"
                    content="On March 8, 2026, MeltingHack hosted the Figma Make 1Day Challenge at Mercari's Roppongi Hills office — a full-day creative sprint where 8 teams turned AI-generated scaffolding into soul-filled products using Figma Make."
                />
                <meta name="keywords" content="Hackathon, Offline, Design, Figma, AI, Prototyping" />
            </Head>

            <main>
                {/* Header section */}
                <Header />

                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                <h1 className="display-4 fw-normal">Figma Make 1Day Challenge</h1>
                                <p>
                                    From Prompt to Product in One Afternoon — 8 teams proved that Figma Make turns
                                    creative vision into working prototypes, no coding required.
                                </p>
                            </div>
                        </div> {/* end row */}
                        <div className="row g-4 mt-4">
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Category</h6>
                                    <ul className="list-inline-dot">
                                        <li>Hackathon</li>
                                        <li>Offline</li>
                                        <li>Design</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Date</h6>
                                    <span>March 8th, 2026</span>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Website</h6>
                                    <Link className="link-hover" href="https://luma.com/5jd7ak4l">https://luma.com/5jd7ak4l</Link>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Partners</h6>
                                    <span>Figma Japan, Mercari</span>
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
                                <Image className="border-radius-1" src={SmallImage1} alt="Figma Make 1Day Challenge" placeholder="blur" />
                            </div>
                            <div className="col-12 col-lg-4">
                                <Image className="border-radius-1" src={SmallImage2} alt="Figma Make 1Day Challenge" placeholder="blur" />
                            </div>
                            <div className="col-12 col-lg-4">
                                <Image className="border-radius-1" src={SmallImage3} alt="Figma Make 1Day Challenge" placeholder="blur" />
                            </div>
                        </div>
                        {/* end row */}

                        {/* Content */}
                        <div className="row mt-5">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                <div className="py-3">
                                    <h4>Overview: AI Handles the Scaffolding, Humans Bring the Soul</h4>
                                    <p>
                                        &quot;I can&apos;t code, so I can&apos;t build things that actually work.&quot; — On March 8, MeltingHack hosted
                                        the <strong>Figma Make 1Day Challenge</strong> at Mercari&apos;s Roppongi Hills office to prove that statement wrong.
                                    </p>
                                    <p>
                                        Supported by <strong>Figma Japan</strong> and <strong>Mercari</strong>, the event brought together designers,
                                        engineers, and product thinkers for a full-day creative sprint using Figma&apos;s AI-powered prototyping
                                        feature, <strong>Figma Make</strong>. Over one intense afternoon, 8 teams went from prompt to working
                                        prototype — discovering the shift from <em>AI-driven</em> creation to <em>AI-accelerated</em> creation.
                                    </p>
                                    <p>
                                        Every participant received dedicated AI credit codes from Figma Japan, exclusive Figma swag, and a
                                        hands-on masterclass from <strong>Hiroki Tani</strong> (Designer Advocate, Figma Japan) on prompt best practices.
                                        After the build session, a Demo Party gave teams the stage to share not just their products but their creative
                                        process — the prompts that worked, the ones that spectacularly didn&apos;t, and the happy accidents in between.
                                    </p>
                                </div>

                                <div className="py-3">
                                    <h4>Featured: Two Truths and a Lie — vs. AI</h4>
                                    <p>
                                        Team &quot;Designer Boshuchu&quot; (Lauren, Ai, Tatsu) built a psychological game that flips the classic party
                                        icebreaker into a human-vs-AI battle of wits. Share three personal stories — one is a lie — and convince an
                                        AI that all three are true. The AI asks probing follow-up questions, reading between the lines and looking
                                        for inconsistencies.
                                    </p>
                                    <p>
                                        What made this team stand out was their production workflow: a <strong>design squad</strong> crafted all UI
                                        components in Figma Make while a <strong>dev squad</strong> built backend logic with Claude Code and Gemini API.
                                        They connected everything via <strong>MCP</strong> (Model Context Protocol), effectively using Figma Make as the
                                        frontend design system and Claude Code as the implementation engine. A masterclass in modern AI-assisted
                                        workflow orchestration.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* end row */}

                        {/* Images */}
                        <div className="row g-4 mt-4">
                            <div className="col-12 col-md-6">
                                <div className="lightbox-image" onClick={() => openLightbox(BigImage1)} style={{ cursor: 'pointer' }}>
                                    <Image src={BigImage1} alt="Figma Make 1Day Challenge" placeholder="blur" />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="lightbox-image" onClick={() => openLightbox(BigImage2)} style={{ cursor: 'pointer' }}>
                                    <Image src={BigImage2} alt="Figma Make 1Day Challenge" placeholder="blur" />
                                </div>
                            </div>
                        </div>
                        {/* end row */}

                        {/* Content */}
                        <div className="row mt-5">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                <div className="py-3">
                                    <h4>Featured: Dish to Beat &amp; CamJam</h4>
                                    <p>
                                        Team &quot;EBI CHIRI&quot; (Miwako, Nakayama, Kawai) created <strong>Dish to Beat</strong> — upload a photo of
                                        your meal, and AI analyzes its calories, colors, and textures to compose a unique piece of music. A vibrant
                                        poke bowl produces something bright and rhythmic; a heavy beef stew yields something slow and resonant. Since
                                        every dish photo is one-of-a-kind, every person gets a completely original composition. In a room full of
                                        clever AI applications, this one made everyone stop and smile.
                                    </p>
                                    <p>
                                        Team &quot;Figma Make&quot; (Hayate, Mae, Naoki) reimagined remote meetings with <strong>CamJam</strong> — instead
                                        of the usual grid of floating heads, each participant appears as a camera-equipped sticky note on a FigJam-style
                                        collaborative board. Post sticky notes, drop stamps, send reactions, and communicate through a playful spatial
                                        canvas that lowers the psychological barrier to casual interaction. The team also shipped two bonus creations:
                                        a cedar tree logging game and a WBC prediction market site.
                                    </p>
                                </div>

                                <div className="py-3">
                                    <h4>More from the Day</h4>
                                    <p>
                                        The creativity didn&apos;t stop there. <strong>Hibitsumu</strong> (Team &quot;Apple Juice&quot;) recorded daily habits
                                        as beautiful geological strata, earning spontaneous applause for its polished design. <strong>Emotion Visualizer</strong> (Team
                                        &quot;Chocolate Mommy&quot;) analyzed text input and mapped it to eight emotions with distinct visual expressions.
                                        <strong> Pollen Destroyer</strong> (Team &quot;Kafunshou Tsurapi&quot;) channeled hay fever frustration into a
                                        pollen-fighting action game built entirely in Figma Make. And Team &quot;Onaka Suita&quot; was the day&apos;s
                                        productivity champion, shipping a drawing app, a mood analyzer, a hay fever app, and an AI-generated song on
                                        Suno — all before the demo deadline.
                                    </p>
                                </div>

                                <div className="py-3">
                                    <h4>Key Takeaways</h4>
                                    <p>
                                        <strong>Figma Make as a creative equalizer.</strong> Team members who had never written a line of code were
                                        shipping interactive prototypes within hours. The tool didn&apos;t replace creativity — it amplified it.
                                    </p>
                                    <p>
                                        <strong>The prompt is the new skill.</strong> Output quality correlated directly with prompt craftsmanship.
                                        Teams that invested time in communicating their vision to Figma Make consistently produced stronger results.
                                    </p>
                                    <p>
                                        <strong>Workflow composition is the real power move.</strong> Team &quot;Designer Boshuchu&quot; proved that the
                                        strongest approach isn&apos;t using one tool well — it&apos;s orchestrating a pipeline where Figma Make,
                                        Claude Code, and MCP each play their optimal role.
                                    </p>
                                </div>

                                <div className="py-3">
                                    <h4>Closing</h4>
                                    <p>
                                        The Figma Make 1Day Challenge was a glimpse into a new creative workflow where AI handles the scaffolding
                                        and humans bring the soul. Fueled by pizza, Figma swag, and a remarkable amount of creative energy, the event
                                        wrapped up with networking that ran well past the scheduled 21:00 close.
                                    </p>
                                    <p>
                                        Huge thanks to <strong>Figma Japan</strong> for the AI credits, swag, and mentorship from Hiroki Tani,
                                        and to <strong>Mercari</strong> for hosting at their Roppongi Hills space. To every participant who brought
                                        their curiosity, creativity, and willingness to experiment — see you at the next one.
                                    </p>
                                    <p><strong>See you at the next &quot;Ship&quot;!</strong></p>
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

export default Event260308
