import React, { useState } from 'react'
import { BackgroundVerticalLines, Footer, Header, Lightbox, ScrollToTop } from '@/components'
import Head from 'next/head'
import { blogData } from '@/components/Blog/BlogData'
import Image from 'next/image';
import Link from 'next/link';
import SmallImage1 from '@/public/images/events/event240427_small1.png'
import SmallImage2 from '@/public/images/events/event240427_small2.png'
import SmallImage3 from '@/public/images/events/event240427_small3.png'
import BigImage1 from '@/public/images/events/event240427_big1.png'
import BigImage2 from '@/public/images/events/event240427_big2.png'


const Event240427 = ({ post }) => {
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
                <title>Generative AI 1DAY Hackathon supported by StabilityAI</title>
                <meta name="description" content="" />
                <meta name="keywords" content="Hackathon, Offline, AI" />
            </Head>

            <main>
                {/* Header section */}
                <Header />
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                <h1 className="display-4 fw-normal">Generative AI 1DAY Hackathon supported by StabilityAI</h1>
                                {/* <p>A hackathon was held where even beginners could create an AR app in 1 day with support from Meracri and Apple.</p> */}
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
                                    <span>April 27th, 2024</span>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Website</h6>
                                    <Link className="link-hover" href="https://lu.ma/08xn8tud">https://lu.ma/08xn8tud</Link>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Participants</h6>
                                    <span>15 members</span>
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
                                    <p>MeltingHack recently hosted its inaugural hackathon, a thrilling event that brought together tech enthusiasts and artists to explore the boundless possibilities of generative AI. Thanks to the generous support of Stability.AI, the creators of Stable Diffusion, participants were able to dive headfirst into the world of AI-powered image generation, completely free of charge.</p>
                                </div>
                                <div className="py-3">
                                    <h4>Timing is Everything: The Power of Stable Diffusion 3</h4>
                                    <p>The hackathon was perfectly timed to coincide with the release of Stable Diffusion 3, a groundbreaking update that significantly enhanced the model&apos;s capabilities. Participants were among the first in the world to experiment with this new version and were immediately impressed by its advanced features:</p>
                                    <ul>
                                        <li><b>Multi-concept prompts:</b> The model demonstrated a remarkable ability to understand and combine multiple concepts within a single prompt, resulting in highly creative and nuanced images.</li>
                                        <li><b>Enhanced image quality:</b> The generated images exhibited a level of detail, realism, and artistic flair that was unprecedented.</li>
                                        <li><b>Improved text-to-image generation:</b> The model&apos;s understanding of natural language was refined, allowing users to generate images that more closely aligned with their textual descriptions.</li>
                                    </ul>
                                </div>
                                <div className="py-3">
                                    <h4>A Playground for Creativity</h4>
                                    <p>With Stability.AI providing easy-to-use Google Colab notebooks, participants were able to quickly get started with Stable Diffusion. The API-based nature of the model offered a high degree of flexibility, allowing participants to integrate it into their own projects.</p>
                                    <p>Some of the standout projects from the hackathon included:</p>
                                    <ul>
                                        <li><b>Sakura Everywhere:</b> An app that could add cherry blossoms to any photo, perfect for those who missed Japan&apos;s cherry blossom season.</li>
                                        <li><b>Swipe-worthy Selfies:</b> An app that transformed ordinary photos into eye-catching profile pictures, ideal for dating apps.</li>
                                        <li><b>Photo to Movie:</b> An app that could create short documentary-style videos from a collection of personal photos.</li>
                                        <li><b>Time Traveler:</b> An app that allowed users to adjust the time of day in their photos.</li>
                                        <li><b>Story to Comic:</b> An app that generated comic book panels based on a written story.</li>
                                    </ul>
                                </div>
                                <div className="py-3">
                                    <h4>A Global Community</h4>
                                    <p>While the majority of participants were native Japanese speakers, the hackathon was conducted in a bilingual format. This encouraged participants to challenge themselves and communicate their ideas in English, fostering a more inclusive and international atmosphere. It was inspiring to see how even those who were less confident in their English skills were eager to participate and contribute to the community.</p>
                                </div>
                                <div className="py-3">
                                    <h4>Conclusion</h4>
                                    <p>MeltingHack&apos;s first hackathon was a resounding success. By providing participants with access to the latest AI technology and a supportive community, the event fostered creativity and innovation. The projects created during the hackathon demonstrate the immense potential of generative AI to revolutionize the way we create and consume content. As AI continues to evolve, we can only imagine what incredible things will be achieved in the future.</p>
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

export default Event240427