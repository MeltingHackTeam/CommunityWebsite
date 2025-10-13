import React, { useState } from 'react'
import { BackgroundVerticalLines, Footer, Header, Lightbox, ScrollToTop } from '@/components'
import Head from 'next/head'
import { blogData } from '@/components/Blog/BlogData'
import Image from 'next/image';
import Link from 'next/link';
import SmallImage1 from '@/public/images/events/event251012_small1.png'
import SmallImage2 from '@/public/images/events/event251012_small2.png'
import SmallImage3 from '@/public/images/events/event251012_small3.png'
import BigImage1 from '@/public/images/events/event251012_big1.png'
import BigImage2 from '@/public/images/events/event251012_big2.png'

const Event251012 = ({ post }) => {
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
                <title>Bringing the Future a Little Closer: Apple Foundation Models Framework Hackathon</title>
                <meta name="description" content="A special hackathon dedicated to pushing the boundaries of Apple's Foundation Models framework, where developers and creators designed memorable experiences." />
                <meta name="keywords" content="Hackathon, Mobile, Offline, AI, Apple" />
            </Head>

            <main>
                {/* Header section */}
                <Header />
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                <h1 className="display-4 fw-normal">Bringing the Future a Little Closer: Apple Foundation Models Framework Hackathon</h1>
                                <p>A day dedicated to designing &quot;memorable experiences&quot; by pushing the boundaries of Apple&apos;s Foundation Models framework.</p>
                            </div>
                        </div> {/* end row */}
                        <div className="row g-4 mt-4">
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Category</h6>
                                    <ul className="list-inline-dot">
                                        <li>Hackathon</li>
                                        <li>Mobile</li>
                                        <li>Offline</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Date</h6>
                                    <span>October 12th, 2025</span>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Website</h6>
                                    <Link className="link-hover" href="https://melting-hack.connpass.com/event/368743/">https://melting-hack.connpass.com/event/368743/</Link>
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
                                <div className="py-3">
                                    <p>On a day dedicated to &quot;bringing the future a little closer,&quot; developers and creators gathered for a special hackathon. The event&apos;s mission was not just to build applications but to design &quot;memorable experiences&quot; by pushing the boundaries of Apple&apos;s Foundation Models framework. The challenge was clear: don&apos;t just use the framework&apos;s simple three-line implementation. Instead, dive deep, challenge its limits—or your own—and rediscover the joy of creation. The result was an inspiring showcase of innovation, where the fusion of Apple&apos;s ecosystem and powerful on-device AI brought truly exciting ideas to life.</p>
                                </div>
                                <div className="py-3">
                                    <h4>A Showcase of Creative Fusion</h4>
                                    <p>The hackathon produced a diverse range of applications, each demonstrating a unique blend of creativity and technical skill. These projects went far beyond simple tech demos, aiming to create genuine connections with users.</p>
                                    <p>One of the most charming creations was an app that delivered weather forecasts in the adorable, meowing language of a cat. By combining <strong>WeatherKit</strong>, <strong>CoreLocation</strong>, and the <strong>AVSpeechSynthesizer</strong>, the team created a delightful user experience that transformed a mundane daily check into a moment of joy.</p>
                                    <p>Another team focused on privacy and convenience, developing a &quot;memories&quot; app that works entirely offline in airplane mode. Users could select multiple photos from a trip, and the app would use the <strong>Vision</strong> framework to automatically tag them. By simply asking a natural language question like, &quot;When was the most memorable moment?&quot;, travelers could relive their journey on the flight home, without needing an internet connection.</p>
                                    <p>For language enthusiasts, one team built a powerful learning tool. The app used the <strong>Vision</strong> framework to extract text from a user&apos;s photos, then leveraged Foundation Models to identify the language and automatically tag it. Finally, it organized these images into language-specific albums in <strong>PhotoKit</strong>, creating a personalized, real-world vocabulary builder.</p>
                                    <p>Gamers were treated to a modern take on a classic Japanese card game with a multiplayer Karuta app. Using <strong>Multipeer Connectivity</strong>, the app allowed friends to compete against each other with cards that were generated on the spot by Foundation Models, ensuring a fresh and unique game every time.</p>
                                    <p>Another project tapped into pure creative fun: a prompt-based image battle arena. Leveraging the <strong>Image Playground API</strong>, this app allowed users to generate imaginative visuals and then pit them against each other in a battle of AI-generated art, fulfilling what the creators called a &quot;nerd&apos;s dream.&quot;</p>
                                    <p>Pop culture also made an appearance with an app that recreated the &quot;Lovely Ghostwriter&quot; Nen ability from the popular manga series <em>Hunter x Hunter</em>. Using Foundation Models, the app took a person&apos;s name, birthdate, and blood type to generate a four-line poetic prophecy about their future, perfectly capturing the spirit of the original source material.</p>
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

                        {/* Content */}
                        <div className="row mt-5">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                <div className="py-3">
                                    <h4>The Star of the Show: A Personalized Daily Podcast</h4>
                                    <p>While every project was impressive, one app truly captivated the audience and embodied the spirit of the hackathon. This team created a &quot;Daily Podcast&quot; generator that delivered a personalized audio briefing for the user&apos;s day ahead.</p>
                                    <p>The application was a masterclass in ecosystem integration. It pulled data from <strong>HealthKit</strong> (sleep and workout data), <strong>EventKit</strong> (calendar appointments), and <strong>WeatherKit</strong> (local forecast) to build a complete picture of the user&apos;s context. The true genius, however, was in how it handled this sensitive information. The app first used Apple&apos;s Foundation Models on-device to <strong>anonymize and mask all personal data</strong>. This privacy-first step was crucial.</p>
                                    <p>Only after the data was secured was a script sent to <strong>OpenAI</strong> to generate a compelling podcast narrative. The final touch was using <strong>ElevenLabs</strong> to convert this text into a natural, engaging voice. The result was a daily podcast tailored specifically to you, delivered securely and seamlessly.</p>
                                    <p>What made this project even more remarkable was the teamwork. In just four hours, a team of four divided their roles, tackling everything from UI design to model implementation. Their achievement was a powerful testament to the strengths of both Apple&apos;s developer tools and its integrated ecosystem, showcasing how complex, data-rich experiences can be built quickly and responsibly.</p>
                                </div>
                            </div>
                        </div> 
                        {/* end row */}

                        {/* Conclusion */}
                        <div className="row mt-5">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                <div className="py-3">
                                    <h4>The Power of Apple Foundation Models</h4>
                                    <p>This hackathon highlighted the transformative potential of Apple&apos;s Foundation Models. Unlike cloud-based alternatives, these models are designed to run <strong>on-device</strong>, directly on Apple silicon. This approach offers three distinct advantages: <strong>privacy</strong>, <strong>performance</strong>, and <strong>offline capability</strong>. Because user data never has to leave the device to be processed, it remains fundamentally private. It also results in faster, more responsive experiences that work even without an internet connection.</p>
                                    <p>The framework is built for accessibility, allowing developers to integrate sophisticated features like text summarization, question answering, and language identification with remarkable ease. It works seamlessly with other tools like <strong>Core ML</strong> and <strong>Create ML</strong>, enabling developers to fine-tune models with their own data for specialized tasks. This combination of power and simplicity empowers the creation of intelligent, personal, and secure applications, as demonstrated by the incredible projects born from this single day of creative exploration. The event successfully proved that by leveraging these tools, the future isn&apos;t a distant dream—it&apos;s something we can build, right here, right now.</p>
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

export default Event251012
