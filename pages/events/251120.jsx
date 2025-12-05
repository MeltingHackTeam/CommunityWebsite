import React, { useState } from 'react'
import { BackgroundVerticalLines, Footer, Header, Lightbox, ScrollToTop } from '@/components'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import SmallImage1 from '@/public/images/events/event251120_small1.png'
import SmallImage2 from '@/public/images/events/event251120_small2.png'
import SmallImage3 from '@/public/images/events/event251120_small3.png'
import SmallImage4 from '@/public/images/events/event251120_small4.png'
import SmallImage5 from '@/public/images/events/event251120_small5.png'
import SmallImage6 from '@/public/images/events/event251120_small6.png'
import BigImage1 from '@/public/images/events/event251120_big1.png'
import BigImage2 from '@/public/images/events/event251120_big2.png'

const Event251120 = () => {
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
                <title>Meta Llama Academy in Japan 2025</title>
                <meta name="description" content="A premier two-day official Meta event brought together top developers and experts in Tokyo to harness open-source Llama technology for solving critical Japanese industry and social challenges." />
                <meta name="keywords" content="Hackathon, Offline, AI, Meta, Llama" />
            </Head>

            <main>
                {/* Header section */}
                <Header />
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                <h1 className="display-4 fw-normal">Meta Llama Academy in Japan 2025</h1>
                                <p>A premier two-day official Meta event brought together top developers and experts in Tokyo to harness open-source Llama technology for solving critical Japanese industry and social challenges.</p>
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
                                    <span>November 20th, 2025</span>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Website</h6>
                                    <Link className="link-hover" href="https://luma.com/q6q73ztw">https://luma.com/q6q73ztw</Link>
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
                                <Image className="border-radius-1" src={SmallImage1} alt="Meta Llama Academy Event" placeholder="blur" />
                            </div>
                            <div className="col-12 col-lg-4">
                                <Image className="border-radius-1" src={SmallImage2} alt="Meta Llama Academy Event" placeholder="blur" />
                            </div>
                            <div className="col-12 col-lg-4">
                                <Image className="border-radius-1" src={SmallImage3} alt="Meta Llama Academy Event" placeholder="blur" />
                            </div>
                        </div> 
                        {/* end row */}

                        {/* Content */}
                        <div className="row mt-5">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                <div className="py-3">
                                    <h4>Accelerating Generative AI Implementation: The &quot;Llama for Japan&quot; Vision</h4>
                                    <p>The <strong>Meta Llama Academy in Japan 2025</strong>, hosted officially by Meta and operated by Cynthialy Co., Ltd., marked the largest Llama hands-on workshop and hackathon in the country. Held on <strong>November 20th and 21st, 2025</strong>, at the Meta Tokyo office, the event was explicitly designed to accelerate the social implementation of generative AI by focusing on the &quot;Llama for Japan&quot; concept. This vision aimed to generate innovative use cases targeting Japan&apos;s unique industrial and societal issues, such as <strong>Manufacturing DX</strong>, disaster prevention, regional challenges, and internal AI utilization. Participants, typically skilled practitioners with experience in Web application/API implementation (Python/Javascript) and foundational knowledge of LLM techniques like RAG or fine-tuning, were tasked with condensing the entire development lifecycle—Learn, Design, Create, and Present—into two highly intense days.</p>
                                </div>
                                <div className="py-3">
                                    <h4>Day 1: Mastering the Open Source Frontier</h4>
                                    <p>Day 1, dedicated to &quot;Learn & Design,&quot; established the technical and conceptual groundwork. The day began with a keynote address that introduced the latest advancements in the Llama family. <strong>Riandy Riandy</strong>, Partner Engineer at Meta specializing in generative AI, covered critical topics including the <strong>MoE structure of Llama 4</strong>, its multimodal capabilities, and Meta&apos;s safety tool suites, underscoring the strategic importance of open source development.</p>
                                    <p>The subsequent Use Case Lecture sessions provided attendees with concrete, field-based examples of AI implementation. Speakers included <strong>Yūki Minami</strong>, CEO of Algomatic Robotics, who lectured on ideation using generative AI. Crucially, <strong>Satoshi Nakamura</strong> of Ricoh&apos;s AI Service Division shared insights into the development of Japanese-specialized LLMs and on-premise RAG solutions. <strong>Norihide Mikami</strong>, CEO of Three-Up Technology, showcased real-world Factory DX and robot control examples leveraging Vision Language Models (VLM). The day also featured an international perspective from Kenny Yee, Head of AI & Transformation at MyRepublic and winner of the Singapore Meta Llama Incubator Program, who discussed sales automation tools for small to medium-sized enterprises (SMEs).</p>
                                    <p>Before teams launched into the hackathon, they received a special message from <strong>Takuya Watanabe</strong>, Director of METI&apos;s AI Industry Strategy Office, who emphasized that open-source AI is fundamental for accelerating innovation and solving Japan&apos;s challenges.</p>
                                </div>
                            </div>
                        </div> 
                        {/* end row */}

                        {/* Media */}
                        <div className="row g-4 mt-4">
                            <div className="col-12 col-lg-4">
                                <Image className="border-radius-1" src={SmallImage4} alt="Meta Llama Academy Event" placeholder="blur" />
                            </div>
                            <div className="col-12 col-lg-4">
                                <Image className="border-radius-1" src={SmallImage5} alt="Meta Llama Academy Event" placeholder="blur" />
                            </div>
                            <div className="col-12 col-lg-4">
                                <Image className="border-radius-1" src={SmallImage6} alt="Meta Llama Academy Event" placeholder="blur" />
                            </div>
                        </div> 
                        {/* end row */}

                        {/* Content */}
                        <div className="row mt-5">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                <div className="py-3">
                                    <h4>Day 2: High-Stakes Development and Expert Review</h4>
                                    <p>Day 2 culminated in the &quot;Mini Hack & Pitch&quot;. Teams engaged in focused development, benefiting from continuous mentorship provided by experts like <strong>Kohei Ogawa</strong>, Principal AI Data Software Solution Developer at Oracle, who offered guidance on data, ML infrastructure, and generative AI projects.</p>
                                    <p>The final pitch session saw all ten teams present their Llama-powered prototypes in a demanding format involving a 3-minute presentation, a live demo, and a critical Q&A session. The standard of projects addressing &quot;field-based issues in Japan&quot; was remarkably high, often possessing a completeness unexpected from such a short development period. The evaluation process involved multiple awards—Grand Prix, Manufacturing DX Award, Social Impact Award, and Meta Special Award—and judged solutions based on social impact, industrial DX relevance, and technical originality.</p>
                                    <p>The elite panel of seven judges, whose passionate feedback boosted participant satisfaction to its highest point, included leaders in technology and academia: <strong>Dr. Naoki Okazaki</strong> (Professor, Tokyo Tech) and <strong>Akira Shibata</strong> (Country Manager, Weights & Biases Japan). Representing Meta were <strong>Riandy</strong> (Partner Engineer) and <strong>Christopher Dewan</strong> (Software Engineer, Recommendation Systems).</p>
                                </div>
                                <div className="py-3">
                                    <h4>The Grand Prix Winner: &quot;Yoshiko-san&quot; Pioneers Safety DX</h4>
                                    <p>The <strong>Grand Prix</strong> was unanimously awarded to <strong>Team 9</strong> for their creation: <strong>Manufacturing Copilot &quot;Yoshiko-san&quot;</strong> (formally, the &quot;Pointing and Calling Copilot Yoshiko-san&quot;). This project addressed a key challenge in Manufacturing DX by digitizing Japan&apos;s traditional safety practice, <em>指差呼称</em> (pointing and calling).</p>
                                    <p><em>Yoshiko-san</em> transforms the audible confirmation <strong>&quot;Yoshi!&quot; (よし!)</strong> into the &quot;strongest safety device&quot;. It uses multimodal AI to simultaneously record video and audio when the confirmation phrase is triggered, then cross-references this data against registered Standard Operating Procedures (SOPs). The result is automatic recording of work content, real-time audio feedback if steps are skipped, and comprehensive traceability for management. The system utilized a technical stack featuring Next.js 16/React 19, FastAPI, PostgreSQL, and integration with <strong>SambaNova LLM</strong> for SOP structuring and <strong>Hume AI</strong> for Empathic Text-to-Speech (TTS) guidance.</p>
                                    <p>Judge <strong>Toshiki Miyake</strong> (DEEPCORE) highly praised the team for respectfully integrating the human &quot;feeling&quot; and culture of manufacturing safety into the modern technological framework. Team 9 reflected that their goal was to use Llama to connect Japan&apos;s vital safety culture to the next generation.</p>
                                </div>
                            </div>
                        </div> 
                        {/* end row */}

                        {/* Images */}
                        <div className="row g-4 mt-4">
                            <div className="col-12 col-md-6">
                                <div className="lightbox-image">
                                    <Image src={BigImage1} alt="Meta Llama Academy Event" placeholder="blur" />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="lightbox-image">
                                    <Image src={BigImage2} alt="Meta Llama Academy Event" placeholder="blur" />
                                </div>
                            </div>
                        </div>
                        {/* end row */}

                        {/* Content */}
                        <div className="row mt-5">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                <div className="py-3">
                                    <h4>A Spectrum of High-Impact Solutions</h4>
                                    <p>The event showcased the Llama ecosystem&apos;s versatility across multiple categories, with several other teams receiving recognition:</p>
                                    <ul>
                                        <li><strong>Social Impact Award:</strong> <strong>Team 7&apos;s &quot;Class Llama&quot;</strong>. This AI agent platform tackles teacher overwork, a significant societal issue, by providing educators with support points derived from analyzing daily student dialogue and records. The system features a <strong>Student Dialogue Agent</strong> using a 3D llama avatar and leverages models like <strong>Meta-Llama-3.3-70B-Instruct</strong> via the SambaNova AI API.</li>
                                        <li><strong>Technology Innovation Award:</strong> <strong>Team 10&apos;s &quot;Easy Japanese&quot; Conversion Tool</strong>. This tool automatically converts complex Japanese text (like administrative documents) into &quot;Easy Japanese&quot; (Simplified Japanese), adhering strictly to the guidelines set by Japan&apos;s Agency for Cultural Affairs. The app is built with Streamlit and Python and achieves its fast, high-quality translation using the <strong>Groq API</strong> with <strong>Llama 3.3</strong>.</li>
                                        <li><strong>Manufacturing DX Award:</strong> <strong>Team 4&apos;s &quot;Llama LAMA&quot;</strong> (Live assembly and Maintenance Assistant), offering real-time AI guidance for assembly and maintenance tasks (See it, segment it, solve it).</li>
                                        <li><strong>Meta Special Award:</strong> <strong>Team 8&apos;s &quot;Llama Socrates,&quot;</strong> a Python Coding Learning Tool designed to support programming reskilling by providing hints, not direct answers, through an LLM consultation function.</li>
                                    </ul>
                                    <p>Furthermore, projects like <strong>SurgiLlama</strong> (Team 2) accelerated surgical skill inheritance using ultra-fast vision analysis (SambaNova Cloud Llama 3.2 90B Vision), and <strong>CrowdCompass</strong> (Team 1) monitored real-time train congestion using LLM-based intelligent analysis, incorporating robust multi-provider architecture (AWS Bedrock and SambaNova) with automatic fallback and key rotation.</p>
                                </div>
                                <div className="py-3">
                                    <h4>Conclusion</h4>
                                    <p>Eiichiro Omata, Public Policy Director at Facebook Japan, concluded the event by commending the participants for facing real social issues. He emphasized that the convergence of field-based challenges and AI technology during the two days generated significant inspiration for improving Japanese society, hinting at future use cases powered by Meta&apos;s open-source AI and wearable devices.</p>
                                    <p>The event demonstrated that open-source AI, when focused on specific local needs, can act as a powerful engine for rapid, high-quality societal and industrial transformation, much like a precision lens focusing light into a powerful, directed beam of innovation.</p>
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
                {/* Background Vertical Lines */}
                <BackgroundVerticalLines />
            </main>
        </>
    )
}

export default Event251120

