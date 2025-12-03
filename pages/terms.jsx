import { useState, useEffect } from 'react'
import Head from 'next/head'
import { mainData } from '@/lib/data'
import { Header, Footer, ScrollToTop, BackgroundVerticalLines } from '@/components'
import OGPMeta from '@/components/SEO/OGPMeta'

const termsContent = {
    ja: {
        title: '注意事項',
        sections: [
            {
                content: '提出されたエントリーシートおよび各種資料などは返却いたしかねます。事前に各社内において許可・内諾を得た上でエントリーしてください。'
            },
            {
                content: 'エントリー情報に不備があった場合、内容に応じて事務局からご連絡させていただく場合がございます。'
            },
            {
                content: '審査結果については通過の場合のみ、ご連絡いたします。審査内容や結果に関するお問い合わせにはお答えいたしかねます。'
            },
            {
                content: 'エントリー情報に虚偽があった場合や、第三者の権利を侵害する恐れがあると判断される場合は、表彰を取り消す場合がございます。'
            },
            {
                content: '反社会的勢力と関わりのある企業・団体によるエントリーは受付できません。本アワードの受賞後、反社会的勢力との関係が明らかとなった場合には、表彰を取り消す場合がございます。'
            },
            {
                content: '提出されたエントリー情報に関する知的財産権は各企業・団体に帰属します。著作権や肖像権などに関する必要な権利処理は、各企業・団体の責任にてご対応ください。なお、主催者・共催者は、本アワードにおける審査・運営のため必要な範囲において、エントリー情報や各種資料を無償で利用できるものとします。'
            },
            {
                content: '本アワードにて受賞した企業・団体のエントリー情報や各種資料、プレゼン時の映像・写真・音声などは、主催者・共催者の各種広報活動（公式Webサイト、SNS、プレスリリースなど）および各種メディア（テレビ、新聞、雑誌、Webなど）、各種イベントにおいて紹介・掲載させていただく場合がございます。その際は、内容の本質を損なわない範囲で編集・加工を行う可能性があります。'
            }
        ]
    },
    en: {
        title: 'Important Notes / Terms and Conditions',
        sections: [
            {
                content: 'Submitted entry forms and materials will not be returned. Please ensure you obtain prior permission or internal approval within your respective company before submitting your entry.'
            },
            {
                content: 'The Secretariat may contact you regarding your entry if there are any deficiencies or issues with the provided information.'
            },
            {
                content: 'Only successful entrants will be contacted regarding the screening results. We cannot respond to inquiries regarding the details or outcome of the selection process.'
            },
            {
                content: 'We reserve the right to revoke an award if the entry information is found to be false or if it is determined that the entry may infringe upon the rights of a third party.'
            },
            {
                content: 'Entries from companies or organizations associated with anti-social forces will not be accepted. Should a relationship with anti-social forces become evident after the award, the award may be revoked.'
            },
            {
                content: 'Intellectual property rights regarding the submitted entry information belong to the respective company or organization. Each company or organization is responsible for securing the necessary rights clearances concerning copyrights, portrait rights, and other intellectual properties. However, the Organizers and Co-Organizers shall be entitled to utilize the entry information and materials without compensation, to the extent necessary for the screening and operation of this award.'
            },
            {
                content: 'The entry information, materials, and presentation video footage, photographs, and audio of the award-winning companies or organizations may be featured or published in the public relations activities of the Organizers and Co-Organizers (e.g., official website, social media, press releases) and in various media (e.g., TV, newspapers, magazines, web) and events. In such cases, the content may be edited or processed, provided that the essential nature of the information is not compromised.'
            }
        ]
    }
}

export default function Terms() {
    const [language, setLanguage] = useState('ja')

    useEffect(() => {
        // Load language preference from localStorage
        const savedLanguage = localStorage.getItem('termsLanguage')
        if (savedLanguage === 'en' || savedLanguage === 'ja') {
            setLanguage(savedLanguage)
        } else {
            // Default to Japanese
            setLanguage('ja')
        }
    }, [])

    const handleLanguageChange = (lang) => {
        setLanguage(lang)
        localStorage.setItem('termsLanguage', lang)
    }

    const content = termsContent[language]

    return (
        <>
            <OGPMeta
                title={content.title}
                description={`${content.title} - ${mainData.description}`}
                url={`${mainData.siteUrl}/terms`}
                image={mainData.ogImage}
                type="article"
            />
            <main>
                {/* Header section */}
                <Header />
                
                {/* Hero section */}
                <div className="section-lg bg-gradient-primary">
                    <div className="container">
                        <div className="row justify-content-center text-center">
                            <div className="col-12 col-lg-8">
                                <h1 className="display-3 fw-bold text-white mb-4">
                                    {content.title}
                                </h1>
                                <div className="d-flex justify-content-center gap-3 mb-4">
                                    <button
                                        onClick={() => handleLanguageChange('ja')}
                                        className={`btn ${language === 'ja' ? 'btn-light' : 'btn-outline-light'}`}
                                    >
                                        日本語
                                    </button>
                                    <button
                                        onClick={() => handleLanguageChange('en')}
                                        className={`btn ${language === 'en' ? 'btn-light' : 'btn-outline-light'}`}
                                    >
                                        English
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Terms Content */}
                <div className="section-lg">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-10 col-xl-8">
                                <div className="terms-content">
                                    {/* Sections */}
                                    {content.sections.map((section, index) => (
                                        <div key={index} className="terms-section">
                                            <div className="terms-item">
                                                <div className="terms-number">{index + 1}</div>
                                                <div className="terms-text">
                                                    <p>{section.content}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
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

