import React, { useState } from 'react'
import { Footer, Header, Lightbox, ScrollToTop } from '@/components'
import Head from 'next/head'
import { blogData } from '@/components/Blog/BlogData'
import Image from 'next/image';
import Link from 'next/link';
import SmallImage1 from '@/public/images/events/event250219_small1.png'
import SmallImage2 from '@/public/images/events/event250219_small2.png'
import SmallImage3 from '@/public/images/events/event250219_small3.png'
import BigImage1 from '@/public/images/events/event250219_big1.png'
import BigImage2 from '@/public/images/events/event250219_big2.png'


const Event250219 = ({ post }) => {
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
                <title>Tokyo GameJam Community Night</title>
                <meta name="description" content="This special event serves as a pre-event for a GameJam in April." />
                <meta name="keywords" content="FunEvent, Offline, Game" />
            </Head>

            <main>
                {/* Header section */}
                <Header />
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                <h1 className="display-4 fw-normal">Tokyo GameJam Community Night</h1>
                                <p>This special event serves as a pre-event for a GameJam in April.</p>
                            </div>
                        </div> {/* end row */}
                        <div className="row g-4 mt-4">
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Category</h6>
                                    <ul className="list-inline-dot">
                                        <li>FunEvent</li>
                                        <li>Offline</li>
                                        <li>Game</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Date</h6>
                                    <span>February 19th, 2025</span>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Website</h6>
                                    <Link className="link-hover" href="https://lu.ma/734x4y5v">https://lu.ma/734x4y5v</Link>
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
                                {/* <div dangerouslySetInnerHTML={{ __html: post.content }} /> */}
                                <div className="py-3">
                                    <p>Alibaba Cloud, a global technology powerhouse within the Alibaba Group, and MeltingHack are teaming up to host the Tokyo Game Jam Spring 2025, scheduled for April 25–27 📆. Ahead of the main event, the &quot;Tokyo Game Jam Community Night&quot; pre-event took place on February 19th, diving into how AI impacts game development, prominent gaming industry trends, and hands-on advice from seasoned hackathon winners 🔥.</p>
                                </div>
                                <div className="py-3">
                                    <h4>📢 Key Insights from the Pre-event &quot;Community Night&quot;:</h4>
                                    <p>At Tokyo Game Jam Community Night, leading industry speakers shared their perspectives about the latest industry trends and AI-related developments, highlighting both exciting opportunities and ongoing industry concerns.</p>
                                </div>
                                <div className="py-3">
                                    <h4>🚀 AI in Game Development — Opportunities and Considerations</h4>
                                    <p>During the talk session, experts described AI as not merely a threat (such as replacing artists 👩‍🎨) but also an incredible opportunity for innovation 🔬. For instance, companies like Meta have successfully leveraged AI for their Meta Quest VR headset 🎧, seamlessly building immersive mixed-reality worlds and virtual avatars that dynamically interact with real environments.</p>
                                    <p>Other exciting uses of generative AI include rapidly creating procedurally generated worlds 🌎, tailored uniquely to each individual player&apos;s experience—opening entirely new creative possibilities for immersive games and virtual interactions.</p>
                                </div>
                                <div className="py-3">
                                    <h4>🎯 Transparency & Responsible AI Use</h4>
                                    <p>Alibaba Cloud&apos;s AI and Big Data expert emphasized the importance of transparency and trust 🤝 when integrating AI into game development. Clear communication with creators and players about precisely how AI technologies are being used is essential to build trust and maintain goodwill within the gaming community 🗣️.</p>
                                    <p>Creators need assurance that AI aims to complement—not replace—their work. For players, openly explaining how AI is enhancing the gameplay experience encourages acceptance and improves the game&apos;s long-term prospects 📈.</p>
                                </div>
                                <div className="py-3">
                                    <h4>🌟 Current Gaming Industry Trends</h4>
                                    <p>Industry experts also discussed major trends shaping today&apos;s gaming landscape:</p>
                                    <h6>🔹 Shift Toward Live-Service Gaming Models 🎮</h6>
                                    <p>Many studios, including Microsoft with Halo Infinite, are moving beyond traditional single-purchase and DLC models to continuous live-service games, delivering frequent updates and long-term player engagement 📅.</p>
                                    <h6>🔹 Growth of User-Generated Content (UGC) Platforms 🌐</h6>
                                    <p>Platforms like Roblox underline the popularity and potential of shared experiences and communities. User-created content is driving engagement and helping players become developers, enriching the gaming ecosystem 👨‍💻👩‍💻.</p>
                                    <h6>🔹 Rising Indie Game Success 🚀</h6>
                                    <p>The rise of indie developers continues to thrive, driven by wider accessibility to affordable game engines, AI support tools, and cloud infrastructure like those provided by Alibaba Cloud, reducing barriers and leveling the playing field for indie creators 🎲.</p>
                                </div>
                                <div className="py-3">
                                    <h4>⚠️ Industry Challenges & Opportunities</h4>
                                    <p>However, there were discussions on industry challenges as well. Notably, persistent inflation and global economic uncertainty have fueled layoffs at larger studios, and the mobile gaming market tends toward heavy reliance on existing IP 📉.</p>
                                    <p>Experts advised indie developers facing these challenges to explore more flexible partnerships, retaining IP ownership when possible, and selectively collaborating with partners on marketing, distribution, or other aspects of publishing 🎯.</p>
                                </div>
                                <div className="py-3">
                                    <h4>🌟 Winning Advice from a Game Jam Champion 🥇</h4>
                                    <p>McIsiah Kendema—CEO of indie game studio Borderless Studios and past winner of MeltingHack&apos;s hackathon—shared valuable, actionable recommendations for aspiring Tokyo Game Jam participants:</p>
                                    <h6>1️⃣ Watch Out for &quot;Scope Creep&quot; 📌</h6>
                                    <p>&quot;Scope creep,&quot; or uncontrolled growth of your game&apos;s ambitions, is your biggest enemy during a brief 48-hour hackathon. From the start, have a strictly defined and manageable scope. Regularly re-evaluate if your project stays on track relative to your goal 🎯.</p>
                                    <h6>2️⃣ Clear Communication & Collaboration Tools 🗣️📁</h6>
                                    <p>Use shared platforms like Google Drive, Discord, or Trello to stay organized. Ensure that clear and open communication is established immediately after team formation. Understanding each teammate&apos;s strengths and role assignments is critical for success 👥.</p>
                                    <h6>3️⃣ Choosing the Right Team 🎲</h6>
                                    <p>Pick teammates who share similar interests and enthusiasm for your game concept. Successful hackathons often depend more on team chemistry and collaborative interests than prior skill or past experiences ✨.</p>
                                    <h6>4️⃣ Experiment & Stretch Your Comfort Zone 🙌</h6>
                                    <p>Hackathons are a rare opportunity to experiment freely. Don&apos;t be afraid to try something out of your typical expertise, but make sure your team understands and supports this exploration mindset 🔍🚀.</p>
                                    <h6>5️⃣ Early & Regular Project Submissions 🕐</h6>
                                    <p>Set up and familiarize yourself early with the game-hosting platform (such as itch.io) to avoid last-minute confusion. To protect against submission failures, continuously update/upload prototype builds in advance—not just in the final minutes 📝.</p>
                                </div>
                                <div className="py-3">
                                    <h4>🚩 Your Next Step: Join Tokyo Game Jam Spring 2025! 🎲✨</h4>
                                    <p>Whether you&apos;re an experienced game developer, a creative artist, a design-driven student, or totally new to hackathons—this event offers you an incredible chance to show your creativity, learn valuable new skills, and connect deeply with passionate creators and industry experts worldwide 🌎🤝.</p>
                                    <h6>👾 Quick Event Summary:</h6>
                                    <ul>
                                        <li>📅 Date: April 25 (Fri) - 27 (Sun), 2025</li>
                                        <li>📍 Venue: Prex Hamamatsucho, Minato-ku, Tokyo</li>
                                        <li>🎟️ Cost: Completely free!</li>
                                        <li>💰 Prize Pool: ¥1,400,000 (~$10,000 USD)</li>
                                        <li>🎓 Participants: Developers, designers, artists, composers, students—everyone passionate about games!</li>
                                        <li>🚀 Special Opportunity: Winning teams meet face-to-face with professional publishers and industry mentors.</li>
                                        <li>🛠️ Tech Support: Provided onsite by Alibaba Cloud specialists throughout the entire event.</li>
                                    </ul>
                                    <p>See you at Tokyo Game Jam — where great games begin! 🚀🌟</p>
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
            </main>
        </>
    )
}

export default Event250219