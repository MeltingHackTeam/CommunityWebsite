import { useState, useEffect } from 'react'
import Link from 'next/link'
import { mainData } from '@/lib/data'
import { guideData } from '@/lib/guideData'
import { Header, Footer, ScrollToTop } from '@/components'
import OGPMeta from '@/components/SEO/OGPMeta'

export default function Guide() {
    const { themeData, sections } = guideData;
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const observers = [];
        sections.forEach((section) => {
            const el = document.getElementById(section.id);
            if (!el) return;
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(section.id);
                    }
                },
                { rootMargin: '-30% 0px -60% 0px' }
            );
            observer.observe(el);
            observers.push(observer);
        });
        return () => observers.forEach((o) => o.disconnect());
    }, [sections]);

    const renderSection = (section) => {
        switch (section.id) {
            case 'mindset':
            case 'team':
                return (
                    <div className="row g-4 mt-1">
                        {section.points.map((point, i) => (
                            <div key={i} className="col-12 col-md-4">
                                <div className="guide-card">
                                    <h4 className="guide-card-title">{point.title}</h4>
                                    <p className="guide-card-text">{point.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                );

            case 'ai-tools':
                return (
                    <>
                        <div className="row g-4 mt-1">
                            {section.categories.map((cat, i) => (
                                <div key={i} className="col-12 col-md-6">
                                    <div className="guide-tool-category">
                                        <div className="guide-tool-category-name">{cat.name}</div>
                                        {cat.tools.map((tool, j) => (
                                            <div key={j} className="guide-tool">
                                                <div className="guide-tool-name">{tool.name}</div>
                                                <div className="guide-tool-desc">{tool.desc}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="guide-workflow">
                            <div className="guide-workflow-title">{section.workflow.title}</div>
                            <div className="guide-workflow-desc">{section.workflow.description}</div>
                            <div className="guide-workflow-steps">
                                {section.workflow.steps.map((step, i) => (
                                    <div key={i} className="guide-workflow-step">
                                        <span className="step-num">{String(i + 1).padStart(2, '0')}</span>
                                        {step}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                );

            case 'execution':
                return (
                    <div className="row g-4 mt-1">
                        <div className="col-12 col-lg-7">
                            <div className="guide-timeline">
                                {section.timeline.map((item, i) => (
                                    <div key={i} className="guide-timeline-item">
                                        <div className="guide-timeline-time">
                                            {item.time}
                                            <span className={`guide-timeline-phase guide-timeline-phase--${item.phase}`}>
                                                {item.phase}
                                            </span>
                                        </div>
                                        <div className="guide-timeline-task">{item.task}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-12 col-lg-5">
                            <ul className="guide-rules">
                                {section.rules.map((rule, i) => (
                                    <li key={i} className="guide-rule">{rule}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                );

            case 'judging':
                return (
                    <div className="guide-criteria mt-4">
                        {section.criteria.map((item, i) => (
                            <div key={i} className="guide-criteria-item">
                                <div className="guide-criteria-weight">{item.weight}</div>
                                <div>
                                    <div className="guide-criteria-name">{item.name}</div>
                                    <div className="guide-criteria-desc">{item.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                );

            case 'pitch':
                return (
                    <div className="guide-slides mt-4">
                        {section.slides.map((slide, i) => (
                            <div key={i} className="guide-slide">
                                <div className="guide-slide-marker">{String(i + 1).padStart(2, '0')}</div>
                                <div>
                                    <div className="guide-slide-name">
                                        {slide.name}
                                        <span className="guide-slide-duration">{slide.duration}</span>
                                    </div>
                                    <div className="guide-slide-desc">{slide.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                );

            case 'mistakes':
                return (
                    <div className="row g-4 mt-1">
                        {section.mistakes.map((group, i) => (
                            <div key={i} className="col-12 col-md-4">
                                <div className="guide-mistakes-category">
                                    <div className="guide-mistakes-label">{group.category}</div>
                                    {group.items.map((item, j) => (
                                        <div key={j} className="guide-mistake-item">{item}</div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <>
            <OGPMeta
                title="The Hackathon Playbook — Winning Strategies for the AI Era"
                description="World-class hackathon winners share battle-tested strategies. From ideation to pitch, master the art of building something extraordinary in 48 hours."
                url={`${mainData.siteUrl}/guide`}
                image={mainData.ogImage}
                type="article"
            />
            <main>
                <Header />

                {/* Hero */}
                <div className="guide-hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-8">
                                <div className="guide-hero-tag">Hackathon Playbook</div>
                                <h1 className="guide-hero-title">
                                    {themeData.title}<br />
                                    <span>{themeData.subtitle}</span>
                                </h1>
                                <p className="guide-hero-desc">{themeData.description}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section Nav */}
                <div className="guide-nav">
                    <div className="container">
                        <div className="guide-nav-inner">
                            {sections.map((section) => (
                                <a
                                    key={section.id}
                                    href={`#${section.id}`}
                                    className={`guide-nav-item${activeSection === section.id ? ' guide-nav-item--active' : ''}`}
                                >
                                    {section.tag} {section.title}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sections */}
                {sections.map((section) => (
                    <div key={section.id} id={section.id} className="guide-section">
                        <div className="container">
                            <div className="guide-section-tag">{section.tag}</div>
                            <h2 className="guide-section-title">{section.title}</h2>
                            <p className="guide-section-subtitle">{section.subtitle}</p>
                            <p className="guide-section-lead">{section.lead}</p>
                            {renderSection(section)}
                        </div>
                    </div>
                ))}

                {/* CTA */}
                <div className="guide-cta">
                    <div className="container">
                        <h2 className="guide-cta-title">Ready to build something extraordinary?</h2>
                        <p className="guide-cta-text">
                            Join MeltingHack and put these strategies to the test at our next hackathon.
                        </p>
                        <Link href="https://discord.gg/74WJ455uWw" target="_blank" className="guide-cta-btn">
                            Join Discord
                        </Link>
                    </div>
                </div>

                <Footer />
                <ScrollToTop />
            </main>
        </>
    )
}
