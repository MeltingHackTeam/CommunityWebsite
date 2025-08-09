import React, { useState } from 'react'
import { BackgroundVerticalLines, Footer, Header, Lightbox, ScrollToTop } from '@/components'
import Head from 'next/head'
import { blogData } from '@/components/Blog/BlogData'
import Image from 'next/image';
import Link from 'next/link';
import SmallImage1 from '@/public/images/events/event250807_small1.png'
import SmallImage2 from '@/public/images/events/event250807_small2.png'
import SmallImage3 from '@/public/images/events/event250807_small3.png'
import BigImage1 from '@/public/images/events/event250807_big1.png'
import BigImage2 from '@/public/images/events/event250807_big2.png'

const Event250807 = ({ post }) => {
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
                <title>Unlock the Future of Coding with Qwen3-Coder</title>
                <meta name="description" content="A landmark workshop co-hosted by Alibaba Cloud and MeltingHack demonstrating how AI can transform development for everyone, regardless of technical background." />
                <meta name="keywords" content="Workshop, Offline, AI" />
            </Head>

            <main>
                {/* Header section */}
                <Header />
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                <h1 className="display-4 fw-normal">Unlock the Future of Coding with Qwen3-Coder</h1>
                                <p>A landmark workshop co-hosted by Alibaba Cloud and MeltingHack demonstrating how AI can transform development for everyone, regardless of technical background.</p>
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
                                    <span>August 7th, 2025</span>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Website</h6>
                                    <Link className="link-hover" href="https://lu.ma/lhv9ngf3">https://lu.ma/lhv9ngf3</Link>
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
                                <div className="py-3">
                                    <h4>Introduction</h4>
                                    <p>On July 22, 2025, technology enthusiasts, from seasoned developers to curious marketers and students, gathered for a landmark event co-hosted by <Link className="link-hover" href="https://alibabacloud.com">Alibaba Cloud</Link> and MeltingHack. The workshop, &quot;Make AI Your Coding Partner,&quot; offered a deep dive into the capabilities of the newly released Qwen3-Coder, a revolutionary AI model poised to redefine our relationship with software development. The event&apos;s core mission was to demonstrate that with the right AI partner, anyone can transform an idea into functional code, regardless of their technical background.</p>
                                </div>
                                <div className="py-3">
                                    <h4>The Magic of AI-Powered Development</h4>
                                    <p>The event kicked off with a captivating live demonstration that immediately grabbed the audience&apos;s attention. The presenter simply spoke a request: &quot;Create an AI drawing quiz.&quot; In a matter of seconds, Qwen3-Coder generated the complete HTML, CSS, and JavaScript code, including the Canvas element, for a fully functional web-based quiz. This was followed by another impressive feat: creating a polished landing page for the Qwen3-Coder model itself, just by providing the AI with a link to its GitHub repository.</p>
                                    <p>These demonstrations served as a powerful introduction to what makes Qwen3-Coder revolutionary. The presenters explained the three core secrets behind its intelligence:</p>
                                    <ul>
                                        <li><strong>The &quot;Agent&quot; Concept:</strong> Qwen3-Coder operates like an AI development manager. Given a high-level task like &quot;make a TODO app,&quot; it can independently plan the necessary components (frontend, backend, database), and execute the development step-by-step.</li>
                                        <li><strong>Long Text Context:</strong> The model possesses the remarkable ability to understand vast amounts of code—over 100,000 tokens at once. This allows it to grasp the entire context of large-scale projects, remembering variables, functions, and their relationships without needing constant reminders.</li>
                                        <li><strong>Self-Correction:</strong> Much like a human programmer, Qwen3-Coder can test its own code, identify bugs, and correct them autonomously. It can even suggest more efficient or elegant ways to write the code, learning and improving as it goes.</li>
                                    </ul>
                                </div>
                            </div>
                        </div> 
                        {/* end row */}

                        {/* Content */}
                        <div className="row mt-5">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                <div className="py-3">
                                    <h4>Hands-On with a New Coding Partner</h4>
                                    <p>After witnessing the AI&apos;s capabilities, it was the participants&apos; turn to experience it firsthand. The workshop was thoughtfully structured into three hands-on tracks catering to different skill levels.</p>
                                </div>
                                <div className="py-3">
                                    <h4>For Beginners</h4>
                                    <p>The challenge was to create a simple webpage introducing a favorite food. Guided by the principle of "talking to the AI," participants used Qwen Chat's Web Dev mode. They started with a basic prompt, such as "Create a webpage about takoyaki," and then iteratively refined the design through conversational commands like "Make the background matcha green," or "Center the photo and add a shadow." It was a powerful illustration of how ideas could be visually shaped without writing a single line of code.</p>
                                </div>
                                <div className="py-3">
                                    <h4>For Learners</h4>
                                    <p>Those with some coding experience were tasked with creating a classic Othello game. By providing a clear prompt specifying the use of HTML, CSS, and JavaScript, they watched as the AI generated the entire game logic and interface. They then customized their games by requesting changes to the design, victory messages, and even adding sound effects.</p>
                                </div>
                                <div className="py-3">
                                    <h4>For Experienced Developers</h4>
                                    <p>This track focused on using Qwen Code, the command-line interface, for more advanced content creation. Participants explored generating technical documentation, interactive learning materials, and project proposals, showcasing the AI's versatility beyond simple web apps.</p>
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

                        {/* Conclusion */}
                        <div className="row mt-5">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                <div className="py-3">
                                    <h4>Conclusion: A New Era of Collaboration</h4>
                                    <p>The event concluded with participants sharing their creations and experiences. The overwhelming sentiment was one of excitement and empowerment. The workshop successfully broke down the barrier to coding, proving that the future of development is collaborative. Tools like Qwen3-Coder are not replacing human developers but are augmenting their abilities, handling tedious tasks and allowing creators to focus on the bigger picture.</p>
                                    <p>As one of the final slides stated, "Your idea + AI = A future that takes shape." The "Unlock the Future of Coding" event was a compelling glimpse into that very future, where the only prerequisite for creation is an idea.</p>
                                </div>
                            </div>
                        </div> 
                        {/* end row */}
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

export default Event250807