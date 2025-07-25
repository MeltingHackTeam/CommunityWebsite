import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const Partners = ({ data }) => {
    const { sectionData, partners } = data;
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const sliderRef = useRef(null);

    const [isLightTheme, setIsLightTheme] = useState(false);

    const updateNavigation = (swiper) => {
        if (prevRef.current && nextRef.current) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.update();
        }
    };

    useEffect(() => {
        if (sliderRef.current) {
            updateNavigation(sliderRef.current);
        }

        setIsLightTheme(document.body.classList.contains('theme-light'));
    }, []);

    return (
        <div className="section-box">
            <div className={`section-sm border-radius-1 bg-dark`}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                            <span className="title-heading">{sectionData.subtitle}</span>
                            <h1 className="display-3 fw-medium">{sectionData.title}</h1>
                            <p>{sectionData.description}</p>
                            {/* Slider Nav */}
                            <div className="mt-4">
                                <button className="swiper-partners-prev button-circle button-circle-lg cursor-link" onClick={() => sliderRef.current?.slidePrev()} aria-label="Prev Slide">
                                    <i className="bi bi-arrow-left"></i>
                                </button>
                                <button className="swiper-partners-next button-circle button-circle-lg cursor-link" onClick={() => sliderRef.current?.slideNext()} aria-label="Next Slide">
                                    <i className="bi bi-arrow-right"></i>
                                </button>
                            </div>
                            {/* end Slider Nav */}
                        </div>
                    </div>
                    <Swiper
                    onSwiper={(swiper) => {
                        sliderRef.current = swiper;
                        swiper.on('init', () => {
                            updateNavigation(swiper);
                        });
                    }}
                    slidesPerView={1}
                    spaceBetween={30}
                    breakpoints={{
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                        // when window width is >= 768px
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        // when window width is >= 1024px
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                        // when window width is >= 1440px
                        1440: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    className="partners-slider mt-4 mt-lg-5"
                >
                    {partners.map((partner, index) => (
                        <SwiperSlide key={index}>
                            <div className="partner-testimonial-card">
                                <div className="partner-header">
                                    <div className="partner-logo-small">
                                        <Image
                                            src={partner.logo}
                                            alt={partner.name}
                                            width={500}
                                            height={120}
                                            className="partner-logo"
                                        />
                                    </div>
                                </div>
                                <div className="partner-role">
                                    <span>{partner.role}</span>
                                </div>
                                                                 <div className="partner-testimonial">
                                     <p>&ldquo;{partner.testimonial}&rdquo;</p>
                                 </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                </div>
                
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="text-white text-center mb-4">Community Partners</h3>
                            <div className="community-partners-grid">
                                <div className="community-partner-item">
                                    <Image
                                        src="/images/partners/partner-alibaba.png"
                                        alt="Community Partner 1"
                                        width={125}
                                        height={30}
                                        className="community-partner-logo"
                                    />
                                </div>
                                <div className="community-partner-item">
                                    <Image
                                        src="/images/partners/partner-revenuecat.png"
                                        alt="Community Partner 2"
                                        width={125}
                                        height={30}
                                        className="community-partner-logo"
                                    />
                                </div>
                                <div className="community-partner-item">
                                    <Image
                                        src="/images/partners/partner-alibaba.png"
                                        alt="Community Partner 3"
                                        width={125}
                                        height={30}
                                        className="community-partner-logo"
                                    />
                                </div>
                                <div className="community-partner-item">
                                    <Image
                                        src="/images/partners/partner-revenuecat.png"
                                        alt="Community Partner 4"
                                        width={125}
                                        height={30}
                                        className="community-partner-logo"
                                    />
                                </div>
                                <div className="community-partner-item">
                                    <Image
                                        src="/images/partners/partner-alibaba.png"
                                        alt="Community Partner 5"
                                        width={125}
                                        height={30}
                                        className="community-partner-logo"
                                    />
                                </div>
                                <div className="community-partner-item">
                                    <Image
                                        src="/images/partners/partner-revenuecat.png"
                                        alt="Community Partner 6"
                                        width={125}
                                        height={30}
                                        className="community-partner-logo"
                                    />
                                </div>
                                <div className="community-partner-item">
                                    <Image
                                        src="/images/partners/partner-alibaba.png"
                                        alt="Community Partner 7"
                                        width={125}
                                        height={30}
                                        className="community-partner-logo"
                                    />
                                </div>
                                <div className="community-partner-item">
                                    <Image
                                        src="/images/partners/partner-revenuecat.png"
                                        alt="Community Partner 8"
                                        width={125}
                                        height={30}
                                        className="community-partner-logo"
                                    />
                                </div>
                                <div className="community-partner-item">
                                    <Image
                                        src="/images/partners/partner-alibaba.png"
                                        alt="Community Partner 9"
                                        width={125}
                                        height={30}
                                        className="community-partner-logo"
                                    />
                                </div>
                                <div className="community-partner-item">
                                    <Image
                                        src="/images/partners/partner-revenuecat.png"
                                        alt="Community Partner 10"
                                        width={125}
                                        height={30}
                                        className="community-partner-logo"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners; 