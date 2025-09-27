import React from 'react'
import { BackgroundVerticalLines, Footer, Header, ScrollToTop } from '@/components'
import Head from 'next/head'
import Link from 'next/link'

const Event250915 = () => {
    return (
        <>
            <Head>
                <title>AWS AI Agent 1Day Hackathon Tokyo – Build an AI Employee in 4 Hours</title>
                <meta name="description" content="Event recap: AWS AI Agent 1Day Hackathon in Tokyo. 50 participants built AI agents with Amazon Bedrock AgentCore in just hours. Winning project Timey auto-blocked travel time in Google Calendar." />
                <meta name="keywords" content="Hackathon, Offline, AI" />
            </Head>

            <main>
                {/* Header section */}
                <Header />
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                <h1 className="display-4 fw-normal">AWS AI Agent 1Day Hackathon Tokyo – Build an AI Employee in 4 Hours</h1>
                                <p>We gave Tokyo’s top AI engineers four hours to build an AI employee. The results were a glimpse into the near future of work.</p>
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
                                    <span>September 15th, 2025</span>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading">Website</h6>
                                    <Link className="link-hover" href="https://luma.com/f67fgtnc">https://luma.com/f67fgtnc</Link>
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
                        {/* Content */}
                        <div className="row mt-5">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                <div className="py-3">
                                    <h4>Event Report</h4>
                                    <p>What if you could <strong>build</strong> a fully functional employee in just four hours—not train them, but build them from scratch? That was the challenge at the <strong>AWS AI Agent 1Day Hackathon</strong> in Tokyo. The room was buzzing with some of the city’s sharpest AI engineers. The mission: use AWS’s brand-new <strong>Amazon Bedrock AgentCore</strong> to create a working AI agent before the day was out.</p>
                                    <p>The results weren’t just impressive; they felt like a fast-forward into how teams will work very soon.</p>
                                </div>

                                <div className="py-3">
                                    <h4>The Winner That Stole Everyone’s Heart (and Calendar)</h4>
                                    <p>When the final demos wrapped, one project—<strong>Timey ⌛</strong>—took home first place. It won not only on code quality but on narrative clarity. As the team shared, the biggest lesson of the day was <strong>“Story Telling &gt; Tech Implementation.”</strong></p>
                                    <p>Timey’s story was universal: <strong>time is our most valuable resource</strong>, and attention is how we spend it. Their agent protects that time so you can spend it on what truly matters—family, friends, and personal passions.</p>
                                    <p>So what does it do? <strong>Timey connects to Google Calendar</strong>. Whenever you add an event that requires travel, it <strong>calculates transit time and automatically blocks a buffer</strong> before and after the appointment. No more scrambling with Google Maps and manually creating “Travel to meeting” blocks. It’s a small, elegant fix to a daily frustration. The team—a mix of masterminds and dedicated coders—pushed their demo until the very last second (<em>jikan girigiri</em>) to get it just right.</p>
                                </div>

                                <div className="py-3">
                                    <h4>An Army of Agents Born in a Day</h4>
                                    <p>Genius didn’t stop with Timey. In only four hours, participants shipped a lineup of surprisingly polished, practical agents—a testament to their skill and to Bedrock AgentCore’s speed.</p>
                                    <ul>
                                        <li><strong>AI Magazine Editor</strong>: Scours social media for trends and curates them into a polished, readable magazine.</li>
                                        <li><strong>Slack Translator</strong>: Lives in Slack, instantly translating between Japanese and English for global teams.</li>
                                        <li><strong>Insurance Navigator</strong>: Simplifies international insurance signup by asking plain-language questions and handling paperwork.</li>
                                        <li><strong>Product Hunt Scout</strong>: Monitors Product Hunt to spot breakout products and analyze why they’re winning.</li>
                                    </ul>
                                    <p>These weren’t just cool demos—they were <strong>deployable, hireable agents</strong> solving real problems.</p>
                                </div>

                                <div className="py-3">
                                    <h4>The Future is Now</h4>
                                    <p>This hackathon was more than an event—it was a statement. With powerful frameworks like <strong>Amazon Bedrock AgentCore</strong> and a room full of brilliant minds, the gap between bold ideas and working prototypes is <strong>shrinking fast</strong>. As <strong>Valerio Salvucci</strong>, the mastermind behind the winning project, put it, “The agents are coming 😎.” After seeing what Tokyo’s AI community built in a few hours, we agree. The only question is: <strong>what job will you hire your first AI agent for?</strong></p>
                                </div>
                            </div>
                        </div> 
                        {/* end row */}
                    </div>
                </div>

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

export default Event250915


