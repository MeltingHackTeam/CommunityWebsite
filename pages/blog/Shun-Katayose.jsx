import React, { useState } from 'react'
import { BackgroundVerticalLines, Footer, Header, Lightbox, ScrollToTop } from '@/components'
import Head from 'next/head'
import { blogData } from '@/components/Blog/BlogData'
import Image from 'next/image';
import Link from 'next/link';
import Image1 from '@/public/images/blog/shun_katayose/shun_katayose_1.png'
import Image2 from '@/public/images/blog/shun_katayose/shun_katayose_2.png'
import Image3 from '@/public/images/blog/shun_katayose/shun_katayose_3.png'

const ShunKatayoseBlog = ({ post }) => {
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
                <title>Shun Katayose</title>
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
                                <h1 className="display-4 fw-normal">Shun Katayose</h1>
                                <p>X (Twitter)：<a href='https://x.com/Shun592848561'>https://x.com/Shun592848561</a></p>
                                <p>LinkedIn：<a href='https://www.linkedin.com/in/shun-katayose-8b45b61b2/'>https://www.linkedin.com/in/shun-katayose-8b45b61b2/</a></p>
                            </div>
                        </div> {/* end row */}
                    </div> {/* end container */}
                </div>

                <div className="section pt-0">
                    <div className="container">
                        {/* Media */}
                        <div className="row justify-content-md-center g-4 m-4">
                            <div className="col-12 col-md-6">
                                <div className="lightbox-image" onClick={() => openLightbox(Image1)}>
                                    <Image src={Image1} alt="shun_katayose_2" placeholder="blur" />
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
                                    <p>私は元々消化器外科医としてキャリアをスタートしました。その後、アメリカで臓器移植の基礎研究を行い、医療分野のAIに興味を持つようになりました。現在、日本では自身のIT技術の知見や能力を磨きたいということもあり、医療業界におけるテクノジー開発を行うベンチャー企業に勤めています。</p><br />
                                    <p>具体的に言うと、CTやレントゲンから病変を検出する技術を開発しています。通常、検診は二人の医師でダブルチェックを行いますが、AIを導入することで医師の負担を軽減することができるメリットがあります。例えば、大腸内視鏡検査ではポリープが見逃されることがあり、その場合、がん化する可能性もあります。従来は見逃されても誰も気づかず、フィードバックもない状況でしたが、AIを導入することで見逃しを防ぐことができるようなサービスです。</p>
                                </div>
                                <div className="py-3">
                                    <h4>Q: 現在、溶けちゃうくらい熱中（Melting）していることは何ですか？</h4>
                                    <p>私は日本の医療レベルが世界的にも非常に高いと考えており、そこからグローバルに通用する技術を見つけることに熱中しています。医療はDeepTechに分類されますが、日本の医療基礎研究は非常に高い水準にあり、その技術を世界に発信し、グローバルで成功させるポテンシャルがあると確信しています。</p>
                                </div>
                                <div className="py-3">
                                    <h4>Q:現状における課題はなんですか？</h4>
                                    <p>私が思うに</p><br />
                                    <p>①データの法規制と統合</p>
                                    <p>各病院が個々のデータを自院内で保存しており、統合的に活用することができない現状があります。例えば、国によっては研究しやすい環境を整えるためにデータベースを活用していますが、日本はまだその段階に達していません。この点で、政府の関与が不可欠です。具体的に言うと、研究者が利用可能なデータベース基盤の構築環境を整えることが求められると思っています。</p><br />
                                    <p>②研究者のビジネス感覚の強化</p>
                                    <p>日本の研究者は技術の種をビジネスに育てる感覚がまだ十分ではありません。この点において、政府やベンチャーキャピタル（VC）がもっと積極的にサポートする必要があります。素晴らしい技術を持ちながらも、それを活かしきれていない現状を打破するための支援が重要だと考えています。</p><br />
                                    <p>③海外企業との競争</p>
                                    <p>現在、医療のAI分野においても外国企業が積極的に参入してきています。例えば、日本では富士フィルムが有名企業としてはありますが、この１社だけでは対処しきれない状況にあり、海外のスタートアップ企業が急速に台頭してきています。日本もこれに対抗するためには、同様にデータの取得と活用を促進し、日本も海外に打って出れるような姿勢を持つべきという競争力を高める戦略が必要だと考えています。</p>
                                </div>
                                <div className="py-3">
                                    <h4>Q, なにか海外と日本で違いやGAPはあったりするんですか？</h4>
                                    <p>レントゲン画像の質の違いですね。</p>
                                    <p>レントゲン画像はボタン一つで世界中どこでも撮影できるように思えるかもしれませんが、実際には国によって画像の質が大きく異なります。ある国では、画像がぼやけていたり、質が良くなかったりすることがあります。一方で、日本では非常に高い精度のデータが得られるので、日本の医療技術と機器の精度の高さを物語っていて、活用しないと勿体ないとも思っています。</p><br />
                                    <p>それと縫合技術に関しても面白いですね。</p>
                                    <p>従来、臓器の縫合には約20分かかることが一般的でしたが、最新の技術では縫合がわずか3秒で完了する機械が開発されています。縫合技術そのものは依然として必要ですが、このような革新的な技術が登場することで、医療の効率化と質の向上が図られていて、初めて見たときには衝撃を受けました。やはりこういったIT技術の進歩は、医療従事者の負担を軽減し、患者に対する治療の質を向上させるなと思いましたし、未来を感じました。</p>
                                </div>
                                <div className="py-3">
                                    <h4>Q: 今後の目標は何ですか？</h4>
                                    <p>「Go Global」ができるような会社を作るか、もしくはそうした会社を応援することを目標としており、医療領域における研究者やテクノロジーに関わる方と繋がっていきたい。また、外貨を稼ぐような会社を発見もしくは自身が作れればと考えています。</p>
                                </div>
                                <div className="py-3">
                                    <h4>Q: 最後に意気込みを聞かせてください。</h4>
                                    <p>私はベンチャーキャピタルで医療テクノロジーを支援する仕事もしています。自身の技術をどう展開すればいいかわからない研究者や、経営が上手くいかない医療現場を立ち上げた方々と繋がりたいです！また、自身でも企業を立ち上げ、医療テクノロジーの発展に貢献していきたいと思っていますので、もし関心がある方などがいましたら是非お話できたら嬉しいです！</p>
                                </div>
                            </div>
                        </div> 
                        {/* end row */}

                        {/* Images */}
                        <div className="row g-4 m-4">
                            <div className="col-12 col-md-6">
                                <div className="lightbox-image" onClick={() => openLightbox(Image2)}>
                                    <Image src={Image2} alt="shun_katayose_2" placeholder="blur" />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="lightbox-image" onClick={() => openLightbox(Image3)}>
                                    <Image src={Image3} alt="shun_katayose_3" placeholder="blur" />
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

export default ShunKatayoseBlog