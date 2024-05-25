import React, { useState } from 'react'
import { BackgroundVerticalLines, Footer, Header, Lightbox, ScrollToTop } from '@/components'
import Head from 'next/head'
import { blogData } from '@/components/Blog/BlogData'
import Image from 'next/image';
import Link from 'next/link';
import Image1 from '@/public/images/blog/yuri_ishitoya/yuri_ishitoya_1.png'
import Image2 from '@/public/images/blog/yuri_ishitoya/yuri_ishitoya_2.png'

const YuriIshitoyaBlog = ({ post }) => {
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
                <title>Yuri Ishitoya</title>
                {/* <meta name="description" content={post.description} />
                <meta name="keywords" content={post.keywords} /> */}
            </Head>

            <main>
                {/* Header section */}
                <Header />
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                <h1 className="display-4 fw-normal">Yuri Ishitoya</h1>
                                <p>ポートフォリオ：<a href='https://yuriishitoya.studio.site/'>https://yuriishitoya.studio.site/</a></p>
                                <p>X (Twitter)：<a href='https://twitter.com/ishity__'>https://twitter.com/ishity__</a></p>
                                <p>Dots to Code公式サイト：<a href='https://dotstocode.studio.site/'>https://dotstocode.studio.site/</a></p>
                                <p>あんしん夜道：<a href='https://anshinyomichi.studio.site/'>https://anshinyomichi.studio.site/</a></p>
                            </div>
                        </div> {/* end row */}
                    </div> {/* end container */}
                </div>

                <div className="section pt-0">
                    <div className="container">
                        {/* Media */}
                        <div className="row justify-content-md-center g-4 m-4">
                            <div className="col-12 col-md-6">
                                <div className="lightbox-image" onClick={() => openLightbox(Image2)}>
                                    <Image src={Image2} alt="yuri_ishitoya_2" placeholder="blur" />
                                </div>
                            </div>
                        </div> 
                        {/* end row */}

                        {/* Content */}
                        <div className="row mt-5">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                {/* <div dangerouslySetInnerHTML={{ __html: post.content }} /> */}
                                <div className="py-3">
                                    <h4>Q: 経歴について教えてください。</h4>
                                    <p>私はお茶の水女子大学の４年生で、エンジニアとしてiOSやモバイルアプリケーションの開発に取り組んでいます。現在は人工知能関係の研究を進めています。</p><p></p>
                                </div>
                                <div className="py-3">
                                    <h4>Q: 現在、溶けちゃうくらい熱中（Melting）していることは何ですか？</h4>
                                    <p>国内最大級の女性＆ノンバイナリー方向けハッカソン「Dots to Code」の組織運営に熱中しています。主に女性やノンバイナリーの方々がIT技術の分野で活躍できる場を提供しています。</p>
                                </div>
                                <div className="py-3">
                                    <h4>Q: なぜ「Dots to Code」を始めたのですか？</h4>
                                    <p>頑張って勇気を出して、初めてハッカソンに参加した際に、ジェンダーギャップに関心があったこともあり、その問題を解決できるようなアプリを開発していました。それがキッカケで経済産業省が行っている未踏IT人材発掘・育成事業にも採択されたりするなど、そういった自分のやりたいことが実現できたり、起業というものが進路選択になかったけれど、アプリ開発で起業という道もあることに気付かされたり、ハッカソンがキッカケで人生において大きな影響がありました。その反面、女性が少ないことも感じていました。しかし、現場では男性がメインだったり、女性が少ない状況に対してアクションが取られている様子もないことがほとんどです。男女に開かれているはずのハッカソンであるのにも関わらず、様々な要因から女性やノンバイナリーの方にとって参加のハードルが高くなり、自分のように可能性が広がるチャンスを逃しているのは、もったいないと感じ、この見逃されている問題を解消するためにDots to Codeのプロジェクトは始まりました。</p>
                                </div>
                                <div className="py-3">
                                    <h4>Q: 今後の目標は何ですか？</h4>
                                    <p>アクションを起こせば、可能性がどんどん広がって行きます。そのことに多くの女性やノンバイナリーの方が気づいて、新しい可能性に踏み込んでいって欲しいと思っています。前回主催したハッカソンも自分が思い描くような良い影響を与えられた感触がありました。今後は、ハッカソンに参加した方々から得た課題やフィードバックをもとに、より良い方向に進めていきながら、もっと数値的に明確な成果を示せるようにしたいです。</p>
                                </div>
                                <div className="py-3">
                                    <h4>Q: 参加者からのフィードバックにはどのようなものがありますか？</h4>
                                    <p>前回で200人ほどの参加者を集められましたが、フィードバックとしては「メンターの数が少ない」という声が多くありました。気軽に参加できるような環境にしたいと考えているため、今後はもっと手厚くサポートし、初心者でも参加しやすい環境を整えたいと思っています。メンターが少ないとコーディングの質問がしづらいというフィードバックもいただいたので、私たちの理念に共感して、参加者が初めてのハッカソンでも自分のやりたいことの実現をサポートしてくれるようなエンジニアの方々、特に女性のメンターになってもらえるような方々が来てもらいたいと考えています。</p>
                                </div>
                                <div className="py-3">
                                    <h4>Q: コアメンバーも募集していると伺いましたが？</h4>
                                    <p>はい、中心メンバーが少ないため、大学生でも社会人でも、Dots to Codeに共感していただける方で運営を一緒に行ってくださる方を募集しています。メンターも募集中です！</p>
                                </div>
                                <div className="py-3">
                                    <h4>Q: 最後に意気込みを聞かせてください。</h4>
                                    <p>日本のジェンダーギャップは根深い問題ですが、「Dots to Code」を通じて、より良い方向に日本をリードしていきたいと思っています。</p>
                                </div>
                            </div>
                        </div> 
                        {/* end row */}

                        {/* Images */}
                        <div className="row justify-content-md-center g-4 m-4">
                            <div className="col-12 col-md-6">
                                <div className="lightbox-image" onClick={() => openLightbox(Image1)}>
                                    <Image src={Image1} alt="yuri_ishitoya_1" placeholder="blur" />
                                </div>
                            </div>
                        </div> 
                        {/* end container */}
                    </div>
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

// export async function getStaticPaths() {
//     // Generate paths for all your business and corporate blog posts
//     const businessPaths = blogData.business.posts.map((post) => ({
//         params: { slug: post.slug },
//     }));

//     const corporatePaths = blogData.corporate.posts.map((post) => ({
//         params: { slug: post.slug },
//     }));

//     const paths = [...businessPaths, ...corporatePaths];

//     return {
//         paths,
//         fallback: false,
//     };
// }

// export async function getStaticProps({ params }) {
//     const slug = params.slug;

//     // Search for the blog post with the matching slug in the business section
//     const businessPost = blogData.business.posts.find((post) => post.slug === slug);
//     // Search for the blog post with the matching slug in the corporate section
//     const corporatePost = blogData.corporate.posts.find((post) => post.slug === slug);

//     // Check if the post is found in either section
//     if (!businessPost && !corporatePost) {
//         return {
//             notFound: true,
//         };
//     }

//     // Return the appropriate post based on the section
//     const post = businessPost || corporatePost;

//     return {
//         props: {
//             post,
//         },
//     };
// }

export default YuriIshitoyaBlog