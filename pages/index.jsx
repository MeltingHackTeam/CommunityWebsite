import Head from 'next/head'
import { mainData } from '@/lib/data'
import { Accordion, Blog, BusinessAbout, MarketingAbout, CorporateHero, About, AgencyHero, BackgroundVerticalLines, Clients, Footer, Header, Portfolio, Pricing, ScrollToTop, Services, Team, Testimonial } from '@/components'
import { clientsData } from '@/components/Clients/ClientsData'
import { portfolioData } from '@/components/Portfolio/PortfolioData'
import { pricingData } from '@/components/Pricing/PricingData'
import { teamData } from '@/components/Team/TeamData'
import { servicesData } from '@/components/Services/ServicesData'
import { testimonialData } from '@/components/Testimonial/TestimonialData'
import { accordionData } from '@/components/Accordion/AccordionData'
import { aboutData } from '@/components/About/AboutData'
import { blogData } from '@/components/Blog/BlogData'

export default function Home() {
    const themeData = mainData.home;

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
                <div style={{marginBottom: "2rem"}}>
                    <CorporateHero />
                </div>
                {/* About section */}
                <BusinessAbout data={aboutData.corporate} />
                {/* About section */}
                {/* <MarketingAbout data={aboutData.marketing} /> */}
                {/* Blog section */}
                <Blog data={blogData.events} />
                {/* Team section */}
                <Team data={teamData.agency} />
                {/* Accordion section */}
                <Accordion data={accordionData.corporate} />
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
