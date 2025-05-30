import Head from 'next/head'
import { mainData } from '@/lib/data'
import { Header, Footer, ScrollToTop, BackgroundVerticalLines } from '@/components'

export default function Guide() {
    const themeData = {
        title: 'First-time Hackathon Guide',
        description: 'Essential tips and mindset guidance for hackathon newcomers',
        keywords: 'hackathon, guide, first-time, tips, preparation, teamwork'
    };

    const guideSteps = [
        {
            number: "01",
            title: "Check Theme & Rules",
            description: "Every hackathon is different!",
            content: "Read the event guidelines and make sure you understand the theme, rules, and judging criteria. If you're unsure about anything, don't hesitate to ask the organizers.",
            icon: "📋",
            color: "primary"
        },
        {
            number: "02", 
            title: "Team Up & Make Friends",
            description: "Hackathons are great for meeting new people.",
            content: "Focus on finding teammates who share your mindset, not just skills. Share your ideas openly and discuss goals together. Don't be shy—working with new people can be the best part!",
            icon: "🤝",
            color: "success"
        },
        {
            number: "03",
            title: "Prepare Your Development Environment", 
            description: "Preparation is half the work!",
            content: "Bring your laptop and charger, set up your programming tools, and make sure you have access to version control (like GitHub). Install any needed libraries, AI tools (like ChatGPT), and communication apps (Slack, Discord, Zoom) in advance.",
            icon: "💻",
            color: "info"
        },
        {
            number: "04",
            title: "Practice Idea Generation",
            description: "Great ideas are your real superpower!",
            content: "Think of a few project ideas before the event, and write them down. Be ready to build on each other's ideas and show your passion. Stay open to flexible and creative solutions.",
            icon: "💡",
            color: "warning"
        },
        {
            number: "05",
            title: "Be Curious & Enjoy Networking",
            description: "Hackathons are more than a competition—they're a celebration!",
            content: "Ask questions, talk to other participants, and don't worry about your experience level. Everyone is here to learn, connect, and have fun.",
            icon: "🌟",
            color: "danger"
        }
    ];

    const summaryPoints = [
        "Review the rules and schedule",
        "Find teammates you vibe with", 
        "Set up your environment in advance",
        "Bring creative ideas and good energy",
        "Don't be afraid to connect with new people!"
    ];

    return (
        <>
            <Head>
                <title>{`${mainData.websiteTitle} - ${themeData.title}`}</title>
                <meta name="description" content={themeData.description} />
                <meta name="keywords" content={themeData.keywords} />
            </Head>
            <main>
                {/* Header section */}
                <Header />
                
                {/* Hero section */}
                <div className="section-lg bg-gradient-primary">
                    <div className="container">
                        <div className="row justify-content-center text-center">
                            <div className="col-12 col-lg-8">
                                <div className="guide-hero-content">
                                    <span className="guide-badge">🚀 Your Journey Starts Here</span>
                                    <h1 className="display-3 fw-bold text-white mb-4">
                                        First-time Hackathon Guide
                                    </h1>
                                    <p className="lead text-white-75 mb-5">
                                        Essential mindset tips and guidance for people attending a hackathon for the first time
                                    </p>
                                    <div className="guide-scroll-indicator">
                                        <span className="text-white-50">Scroll to explore</span>
                                        <div className="guide-arrow-down"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Guide Steps Section */}
                <div className="section-lg">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="guide-steps">
                                    {guideSteps.map((step, index) => (
                                        <div key={index} className="guide-step-card">
                                            <div className="row g-4 align-items-center">
                                                <div className="col-12 col-md-2">
                                                    <div className={`guide-step-number bg-${step.color}`}>
                                                        <span className="guide-step-icon">{step.icon}</span>
                                                        <span className="guide-step-num">{step.number}</span>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-10">
                                                    <div className="guide-step-content">
                                                        <h3 className="guide-step-title">{step.title}</h3>
                                                        <p className="guide-step-description mb-3">
                                                            {step.description}
                                                        </p>
                                                        <p className="guide-step-text">
                                                            {step.content}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Summary Section */}
                <div className="section-lg">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-10">
                                <div className="guide-summary-card">
                                    <div className="text-center mb-5">
                                        <h2 className="display-5 fw-bold mb-3">Summary</h2>
                                        <p className="lead text-primary fw-semibold">
                                            Preparation and a positive attitude are key!
                                        </p>
                                    </div>
                                    
                                    <div className="row">
                                        <div className="col-12 col-md-8 mx-auto">
                                            <div className="guide-checklist">
                                                {summaryPoints.map((point, index) => (
                                                    <div key={index} className="guide-checklist-item">
                                                        <div className="guide-check-icon">✓</div>
                                                        <span>{point}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action Section */}
                <div className="section-lg bg-dark text-white">
                    <div className="container">
                        <div className="row justify-content-center text-center">
                            <div className="col-12 col-lg-8">
                                <div className="guide-cta">
                                    <h2 className="display-6 fw-bold mb-4">
                                        Let&apos;s build something great together.
                                    </h2>
                                    <p className="lead mb-5">
                                        We wish you an amazing first hackathon experience—enjoy every moment!
                                    </p>
                                    <div className="guide-cta-decoration">
                                        <span className="guide-sparkle">✨</span>
                                        <span className="guide-rocket">🚀</span>
                                        <span className="guide-sparkle">✨</span>
                                    </div>
                                </div>
                            </div>
                        </div>
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