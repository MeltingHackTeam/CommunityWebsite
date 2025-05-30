import Favicon from '@/public/images/meltinghack_favicon.png';

const defaultMetaData = {
    title: '',
    description: 'ハッカソン愛好家のネットワーク。貴重な学びを抽出し、発信することに専念しています。',
    keywords: 'ハッカソン, hackathon, 国際, international, グローバル, global, 東京, tokyo, プログラミング, エンジニア, 開発者, コミュニティ',
    ogImage: '/images/meltinghack_logo_bg_clear.png',
};

const themes = {
    home: { 
        title: 'ホーム', 
        description: 'MeltingHackは世界中のハッカソン愛好家が集まるコミュニティです。技術的な学びを共有し、イノベーションを促進します。', 
        keywords: 'ハッカソン, コミュニティ, 技術, イノベーション, プログラミング, 開発者',
        ogImage: '/api/og-image?title=MeltingHack&description=ハッカソン愛好家のグローバルコミュニティ'
    },
    agencyDark: { 
        title: 'エージェンシー | ダーク', 
        description: 'MeltingHackのエージェンシーサービス - ダークテーマ版', 
        keywords: 'エージェンシー, サービス, ダークテーマ' 
    },
    agencyLight: { 
        title: 'エージェンシー | ライト', 
        description: 'MeltingHackのエージェンシーサービス - ライトテーマ版', 
        keywords: 'エージェンシー, サービス, ライトテーマ' 
    },
    businessDark: { 
        title: 'ビジネス | ダーク', 
        description: 'ハッカソンを通じたビジネス創出とイノベーション - ダークテーマ版', 
        keywords: 'ビジネス, イノベーション, スタートアップ, ダークテーマ' 
    },
    businessLight: { 
        title: 'ビジネス | ライト', 
        description: 'ハッカソンを通じたビジネス創出とイノベーション - ライトテーマ版', 
        keywords: 'ビジネス, イノベーション, スタートアップ, ライトテーマ' 
    },
    corporateDark: { 
        title: 'コーポレート | ダーク', 
        description: 'MeltingHackの企業向けサービスとソリューション - ダークテーマ版', 
        keywords: 'コーポレート, 企業, ソリューション, ダークテーマ' 
    },
    corporateLight: { 
        title: 'コーポレート | ライト', 
        description: 'MeltingHackの企業向けサービスとソリューション - ライトテーマ版', 
        keywords: 'コーポレート, 企業, ソリューション, ライトテーマ' 
    },
    marketingDark: { 
        title: 'マーケティング | ダーク', 
        description: 'ハッカソンコミュニティのマーケティング戦略 - ダークテーマ版', 
        keywords: 'マーケティング, 戦略, コミュニティ, ダークテーマ' 
    },
    marketingLight: { 
        title: 'マーケティング | ライト', 
        description: 'ハッカソンコミュニティのマーケティング戦略 - ライトテーマ版', 
        keywords: 'マーケティング, 戦略, コミュニティ, ライトテーマ' 
    },
    portfolioDark: { 
        title: 'ポートフォリオ | ダーク', 
        description: 'MeltingHackのプロジェクトとポートフォリオ - ダークテーマ版', 
        keywords: 'ポートフォリオ, プロジェクト, 作品, ダークテーマ' 
    },
    portfolioLight: { 
        title: 'ポートフォリオ | ライト', 
        description: 'MeltingHackのプロジェクトとポートフォリオ - ライトテーマ版', 
        keywords: 'ポートフォリオ, プロジェクト, 作品, ライトテーマ' 
    },
    startupDark: { 
        title: 'スタートアップ | ダーク', 
        description: 'ハッカソンから生まれるスタートアップとイノベーション - ダークテーマ版', 
        keywords: 'スタートアップ, イノベーション, 起業, ダークテーマ' 
    },
    startupLight: { 
        title: 'スタートアップ | ライト', 
        description: 'ハッカソンから生まれるスタートアップとイノベーション - ライトテーマ版', 
        keywords: 'スタートアップ, イノベーション, 起業, ライトテーマ' 
    },
    pageNotFoundDark: { 
        title: '404 | ダーク', 
        description: 'ページが見つかりません - ダークテーマ版', 
        keywords: '404, エラー, ページ, ダークテーマ' 
    },
    pageNotFoundLight: { 
        title: '404 | ライト', 
        description: 'ページが見つかりません - ライトテーマ版', 
        keywords: '404, エラー, ページ, ライトテーマ' 
    },
    pageAboutUsDark: { 
        title: '私たちについて | ダーク', 
        description: 'MeltingHackの理念とチームについて - ダークテーマ版', 
        keywords: '私たちについて, チーム, 理念, ダークテーマ' 
    },
    pageAboutUsLight: { 
        title: '私たちについて | ライト', 
        description: 'MeltingHackの理念とチームについて - ライトテーマ版', 
        keywords: '私たちについて, チーム, 理念, ライトテーマ' 
    },
    pageContactDark: { 
        title: 'お問い合わせ | ダーク', 
        description: 'MeltingHackへのお問い合わせとコンタクト情報 - ダークテーマ版', 
        keywords: 'お問い合わせ, コンタクト, 連絡, ダークテーマ' 
    },
    pageContactLight: { 
        title: 'お問い合わせ | ライト', 
        description: 'MeltingHackへのお問い合わせとコンタクト情報 - ライトテーマ版', 
        keywords: 'お問い合わせ, コンタクト, 連絡, ライトテーマ' 
    },
    pagePricingDark: { 
        title: '料金 | ダーク', 
        description: 'MeltingHackのサービス料金とプラン - ダークテーマ版', 
        keywords: '料金, プラン, 価格, ダークテーマ' 
    },
    pagePricingLight: { 
        title: '料金 | ライト', 
        description: 'MeltingHackのサービス料金とプラン - ライトテーマ版', 
        keywords: '料金, プラン, 価格, ライトテーマ' 
    },
    pageServicesDark: { 
        title: 'サービス | ダーク', 
        description: 'MeltingHackが提供するサービスとソリューション - ダークテーマ版', 
        keywords: 'サービス, ソリューション, 提供, ダークテーマ' 
    },
    pageServicesLight: { 
        title: 'サービス | ライト', 
        description: 'MeltingHackが提供するサービスとソリューション - ライトテーマ版', 
        keywords: 'サービス, ソリューション, 提供, ライトテーマ' 
    },
    pageTeamDark: { 
        title: 'チーム | ダーク', 
        description: 'MeltingHackのチームメンバーと専門家 - ダークテーマ版', 
        keywords: 'チーム, メンバー, 専門家, ダークテーマ' 
    },
    pageTeamLight: { 
        title: 'チーム | ライト', 
        description: 'MeltingHackのチームメンバーと専門家 - ライトテーマ版', 
        keywords: 'チーム, メンバー, 専門家, ライトテーマ' 
    },
    pageBlogListFullWidthDark: { 
        title: 'ブログ記事一覧 | ダーク', 
        description: 'ハッカソンとテクノロジーに関するブログ記事 - ダークテーマ版', 
        keywords: 'ブログ, 記事, テクノロジー, ダークテーマ' 
    },
    pageBlogListFullWidthLight: { 
        title: 'ブログ記事一覧 | ライト', 
        description: 'ハッカソンとテクノロジーに関するブログ記事 - ライトテーマ版', 
        keywords: 'ブログ, 記事, テクノロジー, ライトテーマ' 
    },
    pageBlogListSidebarDark: { 
        title: 'ブログ記事（サイドバー付き） | ダーク', 
        description: 'サイドバー付きブログ記事一覧 - ダークテーマ版', 
        keywords: 'ブログ, サイドバー, 記事, ダークテーマ' 
    },
    pageBlogListSidebarLight: { 
        title: 'ブログ記事（サイドバー付き） | ライト', 
        description: 'サイドバー付きブログ記事一覧 - ライトテーマ版', 
        keywords: 'ブログ, サイドバー, 記事, ライトテーマ' 
    },
    pagePortfolioListDark: { 
        title: 'ポートフォリオ一覧 | ダーク', 
        description: 'MeltingHackのプロジェクトポートフォリオ一覧 - ダークテーマ版', 
        keywords: 'ポートフォリオ, プロジェクト, 一覧, ダークテーマ' 
    },
    pagePortfolioListLight: { 
        title: 'ポートフォリオ一覧 | ライト', 
        description: 'MeltingHackのプロジェクトポートフォリオ一覧 - ライトテーマ版', 
        keywords: 'ポートフォリオ, プロジェクト, 一覧, ライトテーマ' 
    },
};

export const mainData = {
    websiteTitle: 'MeltingHack',
    description: 'ハッカソン愛好家のネットワーク。貴重な学びを抽出し、発信することに専念しています。',
    keywords: 'ハッカソン, hackathon, 国際, international, グローバル, global, 東京, tokyo, プログラミング, エンジニア, 開発者, コミュニティ',
    favicon: Favicon,
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://melting-hack.tokyo',
    ogImage: '/images/meltinghack_logo_bg_clear.png',
    twitterSite: '@meltinghack',
    ...Object.fromEntries(
        Object.entries(themes).map(([key, value]) => [
            key,
            { ...defaultMetaData, ...value },
        ])
    ),
};