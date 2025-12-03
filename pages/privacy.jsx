import { useState, useEffect } from 'react'
import Head from 'next/head'
import { mainData } from '@/lib/data'
import { Header, Footer, ScrollToTop, BackgroundVerticalLines } from '@/components'
import OGPMeta from '@/components/SEO/OGPMeta'

const privacyContent = {
    ja: {
        title: 'プライバシーポリシー',
        lastRevised: '最終改定日：2025年12月3日',
        sections: [
            {
                title: '1. 収集する情報と収集方法',
                content: '当社は、以下の方法でお客様に関する情報を取得します。',
                subsections: [
                    {
                        title: 'お客様ご本人による入力',
                        items: [
                            'お問い合わせフォームへの入力（氏名、メールアドレス、電話番号、会社名など）',
                            'アンケートやイベント応募フォームへの入力',
                            'MeltingPotキャリア登録フォームからの入力'
                        ]
                    },
                    {
                        title: '自動的に取得される情報',
                        items: [
                            'お問い合わせフォーム送信時のIPアドレス、閲覧端末情報（ブラウザ種別やOS情報等）',
                            'クッキー（Cookie）などを利用して取得される情報（詳細は「7. クッキー等の利用」参照）'
                        ]
                    }
                ]
            },
            {
                title: '2. 個人情報等の利用目的',
                content: '当社が取得した個人情報等は、以下の目的のために利用します。',
                items: [
                    'お問い合わせ内容の確認および対応・返信のため',
                    '本サービスに関するご案内やサポート提供のため',
                    '当社サービスの向上、新サービスの開発およびマーケティング活動のため',
                    '利用者に対して必要に応じた連絡（重要なお知らせ等）を行うため',
                    '利用規約や法令等に違反する行為に対応するため',
                    '個人を識別できない形式に加工した統計データを作成し、サービス改善や広告配信に活用するため',
                    'イベント運営および参加者管理',
                    'イベントに関する連絡、情報提供',
                    '今後の採用イベントや関連情報の案内',
                    '参加者の就職活動およびキャリア支援',
                    '上記利用目的に付随する事項を行うため'
                ]
            },
            {
                title: '3. 個人情報等の第三者提供',
                content: '当社は、以下の場合を除き、お客様の同意なく個人情報等を第三者に提供しません。',
                items: [
                    'お客様の同意がある場合',
                    '法令に基づき開示・提供を求められた場合',
                    '人の生命、身体または財産の保護のために必要であり、お客様の同意を得ることが困難である場合',
                    '国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行するうえで協力が必要な場合',
                    'その他法令で認められる場合'
                ]
            },
            {
                title: '4. 業務委託',
                content: '当社は、利用目的の達成に必要な範囲で、個人情報等の取扱いの全部または一部を第三者に委託する場合があります。この場合、当社は委託先に対して適切な個人情報保護体制を求めるとともに、契約等により必要な事項を定め、適切な監督を行います。'
            },
            {
                title: '5. 個人情報等の管理',
                content: '当社は、お客様の個人情報等を保護するため、以下の措置を講じます。',
                items: [
                    '個人情報等の正確性・最新性の確保',
                    '個人情報等の漏えい、滅失またはき損を防止するためのセキュリティ対策',
                    '個人情報等を取り扱う従業員や委託先に対する、秘密保持義務の遵守や適切な教育・監督'
                ]
            },
            {
                title: '6. 個人情報等の開示・訂正・利用停止・削除',
                subsections: [
                    {
                        title: '開示等の請求',
                        content: 'お客様が当社に対して、当社が保有する自身の個人情報等の開示、訂正、利用停止または削除等を希望される場合は、下記お問い合わせ窓口までご連絡ください。当社は、本人確認を行ったうえで法令に基づき速やかに対応いたします。'
                    },
                    {
                        title: '手数料',
                        content: '個人情報等の開示請求にあたり、手数料をいただく場合があります。手数料が必要な場合には、事前にご案内いたします。'
                    }
                ]
            },
            {
                title: '7. クッキー（Cookie）等の利用',
                content: '当社は、本サービスにおいてクッキーや類似の技術を利用して、お客様のブラウザを識別し、利用状況を分析・把握する場合があります。お客様はブラウザの設定を変更することでクッキーの受け取りを拒否することができますが、その場合、一部機能をご利用いただけない場合があります。'
            },
            {
                title: '8. 保管期間',
                content: '当社は、個人情報等を利用目的が達成されるまでの必要な期間、または法令に基づき定められた期間保管します。保管期間を経過した個人情報等については、速やかに消去または匿名化等を行います。'
            },
            {
                title: '10. プライバシーポリシーの変更',
                content: '当社は、法令等の定めまたは事業上の必要に応じて、本ポリシーを随時見直し、予告なく変更する場合があります。重要な変更を行う場合には、当社ウェブサイト等でお知らせいたします。'
            },
            {
                title: '11. お問い合わせ',
                content: '本ポリシーに関するご質問や、個人情報等の開示・訂正・利用停止・削除等のお申し出は、下記フォームまでご連絡ください。',
                contactLink: 'https://forms.gle/HNc7ww5fZAYa5pGG6'
            }
        ],
        intro: '一般社団法人MeltingPot（以下「当社」といいます。）は、当社の提供するサービス（以下「本サービス」といいます。）におけるお問い合わせフォームの利用に関連して取得する個人情報を含む利用者情報（以下「個人情報等」といいます。）の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます。）を定めます。'
    },
    en: {
        title: 'Privacy Policy',
        lastRevised: 'Last Revised: December 3, 2025',
        sections: [
            {
                title: '1. Information We Collect and Methods of Collection',
                content: 'The Company acquires information about customers through the following methods:',
                subsections: [
                    {
                        title: 'Information Input by the Customer',
                        items: [
                            'Input into the inquiry form (name, email address, telephone number, company name, etc.)',
                            'Input into survey or event application forms',
                            'Input via the MeltingPot Career Registration Form'
                        ]
                    },
                    {
                        title: 'Information Collected Automatically',
                        items: [
                            'IP address and browsing device information (browser type, OS information, etc.) at the time of sending the inquiry form',
                            'Information collected using Cookies or similar technologies (refer to "7. Use of Cookies and Similar Technologies" for details)'
                        ]
                    }
                ]
            },
            {
                title: '2. Purposes of Using Personal Data',
                content: 'The Personal Data acquired by the Company will be used for the following purposes:',
                items: [
                    'To confirm, respond to, and reply to inquiries',
                    'To provide information and support related to the Services',
                    'For the improvement of the Company\'s services, development of new services, and marketing activities',
                    'To contact users as necessary (e.g., important notifications)',
                    'To address acts that violate the Terms of Service or laws and regulations',
                    'To create statistical data processed into a format that cannot identify individuals, for the purpose of service improvement and advertising distribution',
                    'For event management and participant administration:',
                    'Communication and provision of information related to events',
                    'Guidance on future recruitment events and related information',
                    'Career support and job-seeking assistance for participants',
                    'To perform matters incidental to the above purposes of use'
                ]
            },
            {
                title: '3. Disclosure of Personal Data to Third Parties',
                content: 'The Company will not provide Personal Data to any third party without the customer\'s consent, except in the following cases:',
                items: [
                    'When the customer has given consent',
                    'When disclosure or provision is required based on laws and regulations',
                    'When it is necessary for the protection of a person\'s life, body, or property, and it is difficult to obtain the customer\'s consent',
                    'When it is necessary to cooperate with a national agency, local government, or a party entrusted by them in executing the affairs prescribed by law',
                    'Other cases permitted by law'
                ]
            },
            {
                title: '4. Outsourcing of Business Operations',
                content: 'The Company may outsource all or part of the handling of Personal Data to a third party to the extent necessary to achieve the purpose of use. In such cases, the Company will require the outsourced party to establish an appropriate personal data protection system, define necessary matters through contracts, and conduct appropriate supervision.'
            },
            {
                title: '5. Management of Personal Data',
                content: 'The Company will take the following measures to protect the customer\'s Personal Data:',
                items: [
                    'Ensuring the accuracy and up-to-dateness of Personal Data',
                    'Implementing security measures to prevent leakage, loss, or damage of Personal Data',
                    'Providing appropriate education and supervision, and requiring adherence to confidentiality obligations for employees and outsourced parties handling Personal Data'
                ]
            },
            {
                title: '6. Disclosure, Correction, Suspension of Use, and Deletion of Personal Data',
                subsections: [
                    {
                        title: 'Requests for Disclosure, etc.',
                        content: 'If a customer wishes to request the disclosure, correction, suspension of use, or deletion of their own Personal Data held by the Company, please contact the inquiry desk below. The Company will verify the identity of the requester and respond promptly in accordance with laws and regulations.'
                    },
                    {
                        title: 'Fees',
                        content: 'A fee may be charged for requests for the disclosure of Personal Data. If a fee is required, the customer will be notified in advance.'
                    }
                ]
            },
            {
                title: '7. Use of Cookies and Similar Technologies',
                content: 'The Company may use cookies and similar technologies in the Services to identify the customer\'s browser and analyze/understand usage status. Customers can refuse to accept cookies by changing their browser settings, but in that case, some functions may become unavailable.'
            },
            {
                title: '8. Retention Period',
                content: 'The Company will retain Personal Data for the necessary period until the purpose of use is achieved, or for the period stipulated by laws and regulations. Personal Data that has passed the retention period will be promptly deleted or anonymized.'
            },
            {
                title: '10. Amendments to the Privacy Policy',
                content: 'The Company will review and may change this Policy as needed in accordance with legal requirements or business necessity, without prior notice. Important changes will be announced on the Company\'s website or other appropriate means.'
            },
            {
                title: '11. Contact Information',
                content: 'For questions regarding this Policy or requests for disclosure, correction, suspension of use, or deletion of Personal Data, please contact us via the following form:',
                contactLink: 'https://forms.gle/HNc7ww5fZAYa5pGG6'
            }
        ],
        intro: 'General Incorporated Association MeltingPot (hereinafter referred to as "the Company") has established the following Privacy Policy (hereinafter referred to as "this Policy") regarding the handling of user information, including personal information (hereinafter referred to as "Personal Data"), acquired in connection with the use of inquiry forms provided by the Company\'s services (hereinafter referred to as "the Services").'
    }
}

export default function Privacy() {
    const [language, setLanguage] = useState('ja')

    useEffect(() => {
        // Load language preference from localStorage
        const savedLanguage = localStorage.getItem('privacyLanguage')
        if (savedLanguage === 'en' || savedLanguage === 'ja') {
            setLanguage(savedLanguage)
        } else {
            // Default to Japanese
            setLanguage('ja')
        }
    }, [])

    const handleLanguageChange = (lang) => {
        setLanguage(lang)
        localStorage.setItem('privacyLanguage', lang)
    }

    const content = privacyContent[language]

    return (
        <>
            <OGPMeta
                title={content.title}
                description={`${content.title} - ${mainData.description}`}
                url={`${mainData.siteUrl}/privacy`}
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

                {/* Privacy Policy Content */}
                <div className="section-lg">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-10 col-xl-8">
                                <div className="privacy-content">
                                    {/* Introduction */}
                                    <div className="privacy-intro mb-5">
                                        <p className="lead">{content.intro}</p>
                                    </div>

                                    {/* Sections */}
                                    {content.sections.map((section, index) => (
                                        <div key={index} className="privacy-section mb-5">
                                            <h2 className="h3 fw-bold mb-3">{section.title}</h2>
                                            
                                            {section.content && (
                                                <p className="mb-3">{section.content}</p>
                                            )}

                                            {section.subsections && section.subsections.map((subsection, subIndex) => (
                                                <div key={subIndex} className="privacy-subsection mb-4">
                                                    <h3 className="h5 fw-semibold mb-3">{subsection.title}</h3>
                                                    {subsection.content && (
                                                        <p className="mb-3">{subsection.content}</p>
                                                    )}
                                                    {subsection.items && (
                                                        <ul className="privacy-list">
                                                            {subsection.items.map((item, itemIndex) => (
                                                                <li key={itemIndex} className="mb-2">{item}</li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>
                                            ))}

                                            {section.items && !section.subsections && (
                                                <ul className="privacy-list">
                                                    {section.items.map((item, itemIndex) => (
                                                        <li key={itemIndex} className="mb-2">{item}</li>
                                                    ))}
                                                </ul>
                                            )}

                                            {section.contactLink && (
                                                <div className="mt-4">
                                                    <a 
                                                        href={section.contactLink} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="btn btn-primary"
                                                    >
                                                        {language === 'ja' ? 'お問い合わせフォーム' : 'Contact Form'}
                                                        <i className="bi bi-arrow-right ms-2"></i>
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    ))}

                                    {/* Last Revised Date */}
                                    <div className="privacy-footer mt-5 pt-4 border-top">
                                        <p className="text-muted small mb-0">{content.lastRevised}</p>
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

