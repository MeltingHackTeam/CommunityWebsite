import React, { useState } from 'react'
import { BackgroundVerticalLines, Footer, Header, Lightbox, ScrollToTop } from '@/components'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import SmallImage1 from '@/public/images/events/event251130_small1.png'
import SmallImage2 from '@/public/images/events/event251130_small2.png'
import SmallImage3 from '@/public/images/events/event251130_small3.png'
import SmallImage4 from '@/public/images/events/event251130_small4.png'
import SmallImage5 from '@/public/images/events/event251130_small5.png'
import SmallImage6 from '@/public/images/events/event251130_small6.png'
import BigImage1 from '@/public/images/events/event251130_big1.png'
import BigImage2 from '@/public/images/events/event251130_big2.png'

const Event251130 = () => {
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
                <title>The ERNIE AI Developer 1-Day Challenge in Tokyo</title>
                <meta name="description" content="A showcase of groundbreaking MVPs using ultra-efficient PaddleOCR-VL and ERNIE to automate high-value, Japanese-specific document processes." />
                <meta name="keywords" content="Hackathon, Offline, AI, ERNIE, PaddleOCR" />
            </Head>

            <main>
                {/* Header section */}
                <Header />
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                <h1 className="display-4 fw-normal">The ERNIE AI Developer 1-Day Challenge in Tokyo</h1>
                                <p>A showcase of groundbreaking MVPs using ultra-efficient PaddleOCR-VL and ERNIE to automate high-value, Japanese-specific document processes.</p>
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
                                    <span>November 30th, 2025</span>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Website</h6>
                                    <Link className="link-hover" href="https://luma.com/ql8aljld">https://luma.com/ql8aljld</Link>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Participants</h6>
                                    <span>50 members</span>
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
                                <Image className="border-radius-1" src={SmallImage1} alt="ERNIE AI Developer Challenge Event" placeholder="blur" />
                            </div>
                            <div className="col-12 col-lg-4">
                                <Image className="border-radius-1" src={SmallImage2} alt="ERNIE AI Developer Challenge Event" placeholder="blur" />
                            </div>
                            <div className="col-12 col-lg-4">
                                <Image className="border-radius-1" src={SmallImage3} alt="ERNIE AI Developer Challenge Event" placeholder="blur" />
                            </div>
                        </div> 
                        {/* end row */}

                        {/* Content */}
                        <div className="row mt-5">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                <div className="py-3">
                                    <p>The &quot;ERNIE AI Developer 1-Day Challenge,&quot; hosted in Tokyo by the vibrant MeltingHack community, served as a highly concentrated local component of <Link href="https://baiduernieai.devpost.com/" className="link-hover">the larger global DevPost &quot;ERNIE AI Developer Challenge&quot;</Link>. This intensive program provided Japan-based developers with a hands-on platform to tackle critical, persistent challenges faced by Japanese enterprises, specifically high costs and inefficiencies in processing complex regulatory documents and forms, often including mixed handwriting.</p>
                                    <p>The core mission of the challenge, titled &quot;Regulatory Document & Form Processing Automation: High-Precision Structured Data Extraction using PaddleOCR-VL and ERNIE,&quot; was to empower participants with practical expertise in <strong>&quot;Document Intelligence&quot;</strong>. This skill set is foundational for high-value industries such as finance, healthcare, and government.</p>
                                    <p>Participants were instructed to leverage Baidu&apos;s cutting-edge technologies: the <strong>PaddleOCR-VL</strong> model and the <strong>ERNIE</strong> ecosystem. The PaddleOCR-VL-0.9B stands out as an ultra-lightweight Vision-Language Model (VLM) with only <strong>0.9 billion parameters</strong>. Despite its size, it has achieved <strong>State-of-the-Art (SOTA) global performance</strong> on document parsing benchmarks, surpassing massive models like GPT-4o and Gemini 2.5 Pro. Critically, PaddleOCR-VL demonstrates &quot;Japanese Document Mastery,&quot; accurately outputting structured data (Markdown/JSON) from complex Japanese forms, including tables, formulas, and essential elements like <strong>stamps (印鑑)</strong>. By combining this lightweight VLM with ERNIE&apos;s advanced reasoning capabilities, teams aimed to move beyond simple extraction toward high-level decision support.</p>
                                    <p>The one-day format emphasized building market-ready MVPs that transform AI usage from mere &quot;experimentation&quot; into &quot;high-impact, practical application&quot;. The challenge successfully attracted both seasoned developers and first-time hackathon participants, drawn by curiosity in AI and the desire for practical development experience, skill enhancement, and networking. The event schedule included a Kickoff & Tech Session, a focused hacking period, Project Demos, and a Networking & Reception, running from 12:30 PM until 9:00 PM. Mentors and guests included Haoran (PaddlePaddle Framework Contributor), Ziyu (Baidu AI Platform & Ecosystem Operation Manager), and Leaf (D-Robotics/Robot Application Development Engineer).</p>
                                </div>
                            </div>
                        </div> 
                        {/* end row */}

                        {/* Media */}
                        <div className="row g-4 mt-4">
                            <div className="col-12 col-lg-4">
                                <Image className="border-radius-1" src={SmallImage4} alt="ERNIE AI Developer Challenge Event" placeholder="blur" />
                            </div>
                            <div className="col-12 col-lg-4">
                                <Image className="border-radius-1" src={SmallImage5} alt="ERNIE AI Developer Challenge Event" placeholder="blur" />
                            </div>
                            <div className="col-12 col-lg-4">
                                <Image className="border-radius-1" src={SmallImage6} alt="ERNIE AI Developer Challenge Event" placeholder="blur" />
                            </div>
                        </div> 
                        {/* end row */}

                        {/* Content */}
                        <div className="row mt-5">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                <div className="py-3">
                                    <h4>Innovative Solutions: From Healthcare to Corporate Efficiency</h4>
                                    <p>The presented projects showcased the versatility and efficiency of the PaddleOCR-VL and ERNIE models in tackling deeply specific Japanese market needs.</p>
                                </div>
                                <div className="py-3">
                                    <h4>Automated Healthcare Management</h4>
                                    <p>Healthcare applications focused on resolving complexities arising from handwritten medical documents. One team addressed the challenge of <strong>illegible handwritten drug prescriptions</strong>. Their solution used PaddleOCR to read the image, extract drug names, and then perform an external web search to verify the existence of the medicine, serving as a powerful <strong>countermeasure against hallucination</strong>. They noted that while messy handwriting was still problematic, fine-tuning the model for specific domains, such as medical scripts, could significantly improve accuracy.</p>
                                    <p>Another standout project, <strong>Doctor PS (Automated Prescription Scheduling via OCR)</strong>, focused on the chronic inefficiency of schedule management. Recognizing that Japan issues over <strong>800 million prescriptions annually</strong> and that managing complex schedules (e.g., specific times, before/after meals, daily/weekly cycles) remains manually intensive, the team developed a system to automate this process. Their application scanned prescription notes, used back-end OCR to extract detailed scheduling factors, and instantly generated timed events and reminders directly into <strong>Google Calendar</strong>. Notifications were set to alert the user, such as 30 minutes before dosage, drastically simplifying patient management.</p>
                                </div>
                                <div className="py-3">
                                    <h4>Transforming Business Operations</h4>
                                    <p>Two teams applied Document Intelligence to streamline daily business data handling. Team YTS presented the <strong>Whiteboard DX Solution</strong>, aimed at improving information flow in Small to Medium Enterprises (SMEs). They sought to digitize information written on physical whiteboards—such as sales figures or schedules—using a camera and AI, allowing external personnel (like sales reps) to know the current status. Their concept centered on &quot;Analog to write, Digital to share&quot;. Although the team faced significant hurdles, including initial difficulty recognizing Japanese text and connection issues accessing the Baidu cloud API from Japan, they proved that lightweight models <em>could</em> recognize simple English text captured by the camera.</p>
                                    <p>A highly polished application was <strong>Receipt Clip (Video Scanning: Structuring Receipts for Tax Filing)</strong>. Addressing the tedium of processing receipts one by one for tax filing, this team developed a service that accepts a <strong>single video containing multiple receipts</strong>. The system segmented the video into frames, used PaddleOCR to extract text, grouped similar frames to identify unique receipts, and finally used ERNIE as an LLM to structure the extracted data into accurate JSON or CSV files. This innovation promised significant relief for sole proprietors, accountants, and finance teams, with the OCR accuracy for key numerical data estimated at <strong>about 90%</strong>.</p>
                                </div>
                            </div>
                        </div> 
                        {/* end row */}

                        {/* Images */}
                        <div className="row g-4 mt-4">
                            <div className="col-12 col-md-6">
                                <div className="lightbox-image">
                                    <Image src={BigImage1} alt="ERNIE AI Developer Challenge Event" placeholder="blur" />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="lightbox-image">
                                    <Image src={BigImage2} alt="ERNIE AI Developer Challenge Event" placeholder="blur" />
                                </div>
                            </div>
                        </div>
                        {/* end row */}

                        {/* Content */}
                        <div className="row mt-5">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                <div className="py-3">
                                    <h4>Culture, Education, and Robotics</h4>
                                    <p>The challenge also inspired solutions targeting unique Japanese cultural and educational contexts.</p>
                                    <p>The <strong>Izakaya Menu Decoding</strong> system tackled the common frustration faced by inbound tourists and locals alike when confronting highly stylized, cursive, or challenging Japanese handwriting on Izakaya menus. The solution captured a photo of the handwritten menu, used AI to extract the text, and then provided detailed explanations in foreign languages (like English), including ingredients and flavor profiles. Furthermore, an <strong>ERNIE-powered AI chat function</strong> allowed users to ask specific questions, such as suitability for dieting or allergies.</p>
                                    <p>In the education sector, the <strong>Tenpi: AI Automation for Descriptive Grading</strong> team proposed a system to reduce teacher workload and improve feedback quality. Tenpi digitized handwritten descriptive test answers using PaddleOCR, successfully handling complex <strong>chemical and mathematical formulas</strong>. It then used the ERNIE Large Language Model to automatically score the answers, assign deduction points, and generate detailed commentary. The team highlighted their use of PaddleOCR-VL and ERNIE as a <strong>&quot;double-check&quot; system</strong> to maintain high accuracy even with rough image quality.</p>
                                    <p>Finally, the flexibility of the RDK X5 development kit was shown by Team G-Living&apos;s <strong>Smart Crowd Density Prediction for Transit</strong>. While primarily a computer vision task, their solution used cameras and the RDK to quantify and visualize crowd density on Tokyo trains in real-time. They recognized the potential to integrate OCR to read station signs, allowing their system to link crowd data with real-time location information, broadening its applicability to buses and other transport systems.</p>
                                </div>
                                <div className="py-3">
                                    <h4>Conclusion</h4>
                                    <p>In summary, the ERNIE AI Developer 1-Day Challenge achieved its goal of propelling developers into the realm of Document Intelligence. By focusing on practical, high-impact problems—from illegible medical notes to tedious corporate paperwork—and leveraging the efficient, SOTA capabilities of PaddleOCR-VL and ERNIE, participants successfully demonstrated how specialized AI models can generate profound real-world value. The event underscored that even within a single day, targeted application of powerful, lightweight technology can lead to truly transformative solutions.</p>
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

export default Event251130

