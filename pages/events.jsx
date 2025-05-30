import React from 'react'
import { BackgroundVerticalLines, Footer, Header, PortfolioTwo, ScrollToTop } from '@/components'
import { mainData } from '@/lib/data'
import Head from 'next/head'
import { portfolioData } from '@/components/Portfolio/PortfolioData'
import OGPMeta from '@/components/SEO/OGPMeta'

export default function Events() {
    const themeData = mainData.pagePortfolioListDark;

    return (
        <>
            <OGPMeta
                title="イベント一覧"
                description="MeltingHackが主催・参加するハッカソンイベントの一覧です。世界中の技術者と交流し、イノベーションを創出しましょう。"
                url={`${mainData.siteUrl}/events`}
                image="/api/og-image?title=イベント一覧&description=ハッカソンイベントで技術者と交流"
                type="website"
            />
            <main>
                {/* Header section */}
                <Header />
                {/* Portfolio section */}
                <div className="section-lg pb-0">
                    <PortfolioTwo data={portfolioData.portfolioList} />
                </div>
                {/* Footer section */}
                <Footer />
                {/* Scroll To Top */}
                <ScrollToTop />
                {/* Background Vertical Lines */}
                <BackgroundVerticalLines />
            </main >
        </>
    )
}
