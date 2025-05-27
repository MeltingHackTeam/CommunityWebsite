import React from 'react';

const Sponsor = ({ data, className }) => {
    return (
        <div className={`section-lg ${className}`}>
            <div className="container">
                {/* Title Section */}
                <div className="row">
                    <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                        <h6 className="title-heading">{data.mainData.title}</h6>
                        <h2 className="display-3 fw-medium">{data.mainData.title2}</h2>
                        <p>{data.mainData.description}</p>
                    </div>
                </div>

                {/* Sponsor Cards */}
                <div className="row g-4 mt-4">
                    {data.sponsors.map((sponsor, index) => (
                        <div key={index} className="col-12 col-lg-4">
                            <div className="sponsor-card">
                                {/* Logo */}
                                <div className="sponsor-logo">
                                    {sponsor.logo === 'elisa' && (
                                        <div className="logo-elisa">elisa</div>
                                    )}
                                    {sponsor.logo === 'k' && (
                                        <div className="logo-k">K</div>
                                    )}
                                    {sponsor.logo === 'upcloud' && (
                                        <div className="logo-upcloud">
                                            <span className="up">up</span>
                                            <span className="cloud">cloud</span>
                                        </div>
                                    )}
                                </div>

                                {/* Category */}
                                <div className="sponsor-category">
                                    {sponsor.category}
                                </div>

                                {/* Testimonial */}
                                <div className="sponsor-testimonial">
                                    {sponsor.testimonial}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sponsor; 