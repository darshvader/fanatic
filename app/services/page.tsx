import { Contact } from '@/components';
import React from 'react';
import Image from 'next/image';

const Services = () => {
    return (
        <div>
            <section className='tfc_career mt-16'>
                <div className="tfc_container">
                    <div className='careerInner grid'>
                        <div className='careerContent'>
                            <div className="content">
                                <p className="card-para pb-6">SERVICE</p>
                                <h1>Our Nerdy Showcase: A sneak <br /> peek into our dorky capabilities.</h1>
                                <p className="main-para pt-6 pb-16">Our portfolio of successful projects includes a variety of industries, from e-commerce to business
                                    websites, <br />that demonstrate our commitment to driving growth and delivering results for our clients.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="tfcservices_section pt-36">
                <div className="tfc_section_title">
                    <div className="tfc_container">
                        <h2>BRANDING</h2>
                    </div>
                </div>
                <div className="tfcservices mt-3">
                    <div className="tfc_container">
                        <div className="service-grid-row">
                            <div className="column1">
                                <div className="content col1 bg_mildyellow">
                                    <h4>Building a strong foundation</h4>
                                    <p className="card-para">Our web development and digital marketing services can transform your
                                        website.</p>
                                    <button className="tfcBtnone "> Give It a try </button>
                                </div>

                            </div>

                            <div className="column2">
                                <Image src="/images/BrandingBannerIn=mg.jpg" alt="Banner" width="927" height="661" />

                                <h2>Maximize Your Brand's Potential with Our Branding Services</h2>

                                <div className="disc-table grid-row">
                                    <div className="disc-table-left">
                                        <h6 className='font-normal'>MARKET RESEARCH</h6>
                                    </div>
                                    <div className="disc-table-right">
                                        <p className="card-para">our agency's approach of establishing long-term relationships with our clients by focusing on their needs and goals, rather than aggressively promoting our services.</p>

                                    </div>
                                </div>
                                <hr />
                                <div className="disc-table grid-row">
                                    <div className="disc-table-left">
                                        <h6 className='font-normal'>MARKET RESEARCH</h6>
                                    </div>
                                    <div className="disc-table-right">
                                        <p className="card-para">our agency's approach of establishing long-term relationships with our clients by focusing on their needs and goals, rather than aggressively promoting our services.</p>

                                    </div>

                                </div>
                                <hr />
                                <div className="disc-table grid-row">
                                    <div className="disc-table-left">
                                        <h6 className='font-normal'>MARKET RESEARCH</h6>
                                    </div>
                                    <div className="disc-table-right">
                                        <p className="card-para">our agency's approach of establishing long-term relationships with our clients by focusing on their needs and goals, rather than aggressively promoting our services.</p>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Contact />
        </div>
    )
}

export default Services