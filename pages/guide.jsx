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

                {/* Custom Styles */}
                <style jsx>{`
                    .guide-hero-content {
                        padding: 4rem 0;
                    }
                    
                    .guide-badge {
                        display: inline-block;
                        background: rgba(255, 255, 255, 0.2);
                        color: white;
                        padding: 0.5rem 1.5rem;
                        border-radius: 50px;
                        font-size: 0.9rem;
                        font-weight: 500;
                        margin-bottom: 2rem;
                        backdrop-filter: blur(10px);
                    }
                    
                    .guide-scroll-indicator {
                        margin-top: 3rem;
                    }
                    
                    .guide-arrow-down {
                        width: 2px;
                        height: 30px;
                        background: rgba(255, 255, 255, 0.5);
                        margin: 1rem auto;
                        position: relative;
                        animation: bounce 2s infinite;
                    }
                    
                    .guide-arrow-down::after {
                        content: '';
                        position: absolute;
                        bottom: 0;
                        left: -3px;
                        width: 0;
                        height: 0;
                        border-left: 4px solid transparent;
                        border-right: 4px solid transparent;
                        border-top: 8px solid rgba(255, 255, 255, 0.5);
                    }
                    
                    @keyframes bounce {
                        0%, 20%, 50%, 80%, 100% {
                            transform: translateY(0);
                        }
                        40% {
                            transform: translateY(-10px);
                        }
                        60% {
                            transform: translateY(-5px);
                        }
                    }
                    
                    .guide-steps {
                        max-width: 1000px;
                        margin: 0 auto;
                    }
                    
                    .guide-step-card {
                        background: rgba(24, 26, 28, 1);
                        border-radius: 20px;
                        padding: 3rem 2rem;
                        margin-bottom: 3rem;
                        box-shadow: 0 10px 40px rgba(24, 26, 28, 0.1);
                        border: 1px solid rgba(24, 26, 28, 0.05);
                        transition: all 0.3s ease;
                        position: relative;
                        overflow: hidden;
                    }
                    
                    .guide-step-card::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        height: 4px;
                        background: linear-gradient(90deg, #007bff, #6f42c1, #e83e8c, #fd7e14, #28a745);
                        opacity: 0;
                        transition: opacity 0.3s ease;
                    }
                    
                    .guide-step-card:hover {
                        transform: translateY(-5px);
                        box-shadow: 0 20px 60px rgba(24, 26, 28, 0.15);
                    }
                    
                    .guide-step-card:hover::before {
                        opacity: 1;
                    }
                    
                    .guide-step-number {
                        width: 80px;
                        height: 80px;
                        border-radius: 50%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        color: white;
                        font-weight: bold;
                        position: relative;
                        margin: 0 auto;
                    }
                    
                    .guide-step-icon {
                        font-size: 2.5rem;
                        margin-bottom: -0.4rem;
                    }
                    
                    .guide-step-num {
                        font-size: 1.2rem;
                        opacity: 0.9;
                    }
                    
                    .guide-step-title {
                        font-size: 1.5rem;
                        font-weight: 700;
                        margin-bottom: 1rem;
                        color: #667eea;
                    }
                    
                    .guide-step-description {
                        font-size: 1.1rem;
                        font-weight: 600;
                        color:rgb(115, 115, 115);
                    }
                    
                    .guide-step-text {
                        font-size: 1rem;
                        line-height: 1.7;
                        color:rgb(255, 255, 255);
                    }
                    
                    .guide-summary-card {
                        background: rgba(24, 26, 28, 1);
                        border-radius: 25px;
                        padding: 4rem 3rem;
                        box-shadow: 0 15px 50px rgba(24, 26, 28, 0.1);
                        border: 1px solid rgba(24, 26, 28, 0.05);
                    }
                    
                    .guide-checklist {
                        text-align: left;
                    }
                    
                    .guide-checklist-item {
                        display: flex;
                        align-items: center;
                        padding: 1rem 0;
                        font-size: 1.1rem;
                        border-bottom: 1px solid rgba(24, 26, 28, 0.1);
                    }
                    
                    .guide-checklist-item:last-child {
                        border-bottom: none;
                    }
                    
                    .guide-check-icon {
                        width: 30px;
                        height: 30px;
                        background: linear-gradient(135deg, #28a745, #20c997);
                        color: white;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-right: 1rem;
                        font-weight: bold;
                        font-size: 0.9rem;
                    }
                    
                    .guide-cta {
                        padding: 2rem 0;
                    }
                    
                    .guide-cta-decoration {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        gap: 2rem;
                        font-size: 2rem;
                    }
                    
                    .guide-sparkle {
                        animation: sparkle 2s ease-in-out infinite;
                    }
                    
                    .guide-rocket {
                        animation: rocket 3s ease-in-out infinite;
                    }
                    
                    @keyframes sparkle {
                        0%, 100% {
                            transform: scale(1) rotate(0deg);
                            opacity: 0.7;
                        }
                        50% {
                            transform: scale(1.2) rotate(180deg);
                            opacity: 1;
                        }
                    }
                    
                    @keyframes rocket {
                        0%, 100% {
                            transform: translateY(0);
                        }
                        50% {
                            transform: translateY(-10px);
                        }
                    }
                    
                    .bg-gradient-primary {
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    }
                    
                    .text-white-75 {
                        color: rgba(255, 255, 255, 0.75) !important;
                    }
                    
                    .text-white-50 {
                        color: rgba(255, 255, 255, 0.5) !important;
                    }
                    
                    @media (max-width: 768px) {
                        .guide-step-card {
                            padding: 2rem 1.5rem;
                        }
                        
                        .guide-summary-card {
                            padding: 3rem 2rem;
                        }
                        
                        .guide-step-title {
                            font-size: 1.3rem;
                        }
                        
                        .guide-hero-content {
                            padding: 2rem 0;
                        }
                    }
                `}</style>
            </main>
        </>
    )
} 