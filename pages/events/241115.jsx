import React, { useState } from 'react'
import { BackgroundVerticalLines, Footer, Header, Lightbox, ScrollToTop } from '@/components'
import Head from 'next/head'
import { blogData } from '@/components/Blog/BlogData'
import Image from 'next/image';
import Link from 'next/link';
import SmallImage1 from '@/public/images/events/event241115_small1.png'
import SmallImage2 from '@/public/images/events/event241115_small2.png'
import SmallImage3 from '@/public/images/events/event241115_small3.png'
import SmallImage4 from '@/public/images/events/event241115_small4.png'
import SmallImage5 from '@/public/images/events/event241115_small5.png'
import SmallImage6 from '@/public/images/events/event241115_small6.png'
import BigImage1 from '@/public/images/events/event241115_big1.png'
import BigImage2 from '@/public/images/events/event241115_big2.png'


const Event241115 = ({ post }) => {
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
                <title>AI Buildathon by Inception Studio</title>
                <meta name="description" content="It challenged participants to develop scalable AI products capable of making a global impact." />
                <meta name="keywords" content="Hackathon, Offline, AI" />
            </Head>

            <main>
                {/* Header section */}
                <Header />
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                <h1 className="display-4 fw-normal">AI Buildathon by Inception Studio</h1>
                                <p>It challenged participants to develop scalable AI products capable of making a global impact.</p>
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
                                    <span>November 15th, 2024</span>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Website</h6>
                                    <Link className="link-hover" href="https://lu.ma/tewjarc9">https://lu.ma/tewjarc9</Link>
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
                                    <h4>Introduction</h4>
                                    <p><Link className="link-hover" href="https://www.inceptionstudio.org/">Inception Studio</Link> hosted its inaugural AI Buildathon, aimed at fostering Japan&apos;s AI startup ecosystem and identifying exceptional AI talent. Aligned with Inception Studio&apos;s vision of nurturing the next generation of AI companies, the event challenged participants to develop scalable AI products capable of making a global impact.</p>
                                </div>
                                <div className="py-3">
                                    <h4>The Challenge and Participants</h4>
                                    <p>Partnering with <Link className="link-hover" href="https://global.fujitsu/ja-jp">Fujitsu</Link>, the hackathon presented participants with two real-world business challenges: optimizing handover processes during parental leave and integrating online and offline retail operations. These challenges required participants to not only demonstrate technical proficiency but also a deep understanding of the business context and the ability to communicate their ideas effectively.</p>
                                    <p>Fifty carefully selected participants, comprising AI engineers and entrepreneurs, joined the event. With a diverse range of skills and experiences, participants were well-equipped to tackle the complex challenges presented.</p>
                                </div>
                                <div className="py-3">
                                    <h4>Mentorship and Support</h4>
                                    <p>To foster a supportive and collaborative environment, the event featured a keynote session by Inception Studio founder John, as well as dedicated mentorship from Fujitsu&apos;s Nozoe. Additionally, a team of experienced technical mentors and supporters provided guidance and feedback throughout the hackathon. A panel of six judges evaluated the projects based on their creativity, technical feasibility, and potential for market impact.</p>
                                </div>
                                <div>
                                    <h4>Judges and Experiences</h4>
                                    <p>Our esteemed panel of judges included <Link className="link-hover" href="https://www.linkedin.com/in/joewhaley/">John Whaley</Link>, Co-founder of Inception Studio; <Link className="link-hover" href="https://www.linkedin.com/in/takeaki-dohda-ph-d-244a184/">Takeaki Dohda</Link>, Head of Venture Capital Business Development; <Link className="link-hover" href="https://www.linkedin.com/in/chisatokunimoto/">Chisato Kunimoto</Link>, CEO of Cynthialy; <Link className="link-hover" href="https://www.linkedin.com/in/hirokazu-nagano-a7aba034/">Hirokazu Nagano</Link>, General Partner of ANOBAKA; <Link className="link-hover" href="https://www.facebook.com/hiro.nozoe">Hiro Nozoe</Link> of FUJITSU Accelerator; and <Link className="link-hover" href="https://www.linkedin.com/in/shingo-tomoto-46842823a/">Shingo Tomoto</Link>, Overseas Strategy Associate at MIXI. Beyond the typical hackathon experience, these industry leaders provided participants with specific feedback on a global scale, fostering an environment where participants could co-found companies or further enhance their skills.</p>
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
                                    <h4>Unveiling the Top 3 Award-Winning Outputs!</h4>
                                </div>
                                <div className="py-3">
                                    <h4>Grand Winner: Long Island Ice Team</h4>
                                    <ul>
                                        <li><b>Service Name:</b> Lisa AI</li>
                                        <li><b>Punchline:</b> Your guard for your safer digital future</li>
                                        <li><b>Description:</b> Using OCR and LLMs to detect complex scams across any app at any time</li>
                                        <li><b>Demo:</b> <Link className="link-hover" href="https://youtube.com/shorts/bLlkb5HU2GU">https://youtube.com/shorts/bLlkb5HU2GU</Link></li>
                                        <li><b>PitchDeck:</b> <Link className="link-hover" href="https://pitch.com/v/lisa-5ydijj">https://pitch.com/v/lisa-5ydijj</Link></li>
                                    </ul>
                                </div>
                                <div className="py-3">
                                    <h4>2nd Award: Esper</h4>
                                    <ul>
                                        <li><b>Service Name:</b> Esper.com</li>
                                        <li><b>Punchline:</b> New AI-powered Shopping OS, designed to deliver exactly what you desire, precisely when you need it.</li>
                                        <li><b>Description:</b> troducing Esper: an AI-powered shopping OS that creates hyper-personalized recommendations by understanding you—your conversations, voice commands, and even visual inputs.</li>
                                        <li><b>Demo:</b> <Link className="link-hover" href="https://esper-one.vercel.app/">https://esper-one.vercel.app/</Link></li>
                                        <li><b>PitchDeck:</b> <Link className="link-hover" href="https://docs.google.com/presentation/d/1TsEnVihPt5OZCfM8qpsAr_XB8Ts9bVYl">https://docs.google.com/presentation/d/1TsEnVihPt5OZCfM8qpsAr_XB8Ts9bVYl</Link></li>
                                    </ul>
                                </div>
                                <div className="py-3">
                                    <h4>3rd Award: Verne Technologies</h4>
                                    <ul>
                                        <li><b>Service Name:</b> IntHub</li>
                                        <li><b>Punchline:</b> 社員一人一人について、情報を集約 (Integrate) し、知見 (Insight) のHubを作る</li>
                                        <li><b>Description:</b> 社員1人1人のRAGデータベースを作ります。引き継ぎの本質的な問題である暗黙知を形式知にすることで、引き継ぎ問題だけでなく、オンボーディング・キャッチアップ・人材マッチングなどの課題まで解決できるソリューションです。</li>
                                        <li><b>Demo:</b> <Link className="link-hover" href="https://github.com/t0y0chi/inthub-backend">https://github.com/t0y0chi/inthub-backend</Link></li>
                                        <li><b>PitchDeck:</b> <Link className="link-hover" href="https://www.canva.com/design/DAGWs96wNDI/M5EXstfIJ8t53zV63gm-mQ/edit">https://www.canva.com/design/DAGWs96wNDI/M5EXstfIJ8t53zV63gm-mQ/edit</Link></li>
                                    </ul>
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

export default Event241115