import React from 'react';
import Image from 'next/image';
import CustomButton from './CustomButton';
import Link from 'next/link';

const Ourteam = ({ showAboutUsButton = true }) => {
    return (
        <section className='tfc_ourteam_section pt-36'>
            <div className='tfc_section_title'>
                <div className='tfc_container'>
                    <h2>OUR-TEAM</h2>
                </div>
            </div>
            <div className='tfc_ourteam mt-3'>
                <div className='tfc_container'>
                    <div className='tfc_title_main pb-6'>
                    <div className="flex justify-between items-center">
                        <h1>Our Team of Experts</h1>
                        {showAboutUsButton && (
                        <Link href="./about">
                        <CustomButton title="About Us" containerStyles="bg-transparent text-black border-black border px-6 py-2"  />
                        </Link>
                        )}
                        </div>   
                    </div>
                    <div className='tfc_ourteam_group'>
                        <div className='tfc_team_list sectionOne'>
                            <h6>Join our team</h6>
                             
                            <h3>Want to Join our Team of Innovative Web Developers?</h3>
                            <p>
                                At our web development agency, we value teamwork, innovation, and excellence, and we
                                strive to create a supportive and collaborative work environment where every team member
                                can thrive. If you share our values and have a passion for web development, we would
                                love to hear from you.
                            </p>
                            <div className="any">
                            <Link href="./contact">
                             <CustomButton title="Apply Now" containerStyles=" text-white text-sm mt-1  "  />
                             </Link>
                             </div>
                        </div>
                        <div className='tfc_team_list sectionAll'>
                            <div className="team-image">
                                <Image src="/images/TeamImg1.jpg" width="319" height="630" alt="logo" className='logo' />
                                <div className="social-icons">
                                    <ul className="flex-row">
                                        <li>
                                            <div className="circle"><a href=""><Image src="/images/twitter.svg" width="100" height="100" alt="" /></a></div>
                                        </li>
                                        <li>
                                            <div className="circle"><a href=""><Image src="/images/mail.svg" width="100" height="100" alt="" /></a></div>
                                        </li>
                                        <li>
                                            <div className="circle"><a href=""><Image src="/images/linkedin.svg" width="100" height="100" alt="" /></a></div>
                                        </li>
                                        <li>
                                            <div className="circle"><a href=""><Image src="/images/instagram.svg" width="100" height="100" alt="" /></a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="occupation">
                                    <p className="main-para">Harry Poter</p>
                                    <button className="simple-btn">Director</button>
                                </div>
                            </div>
                        </div>
                        <div className='tfc_team_list sectionAll'>
                            <div className="team-image ">
                                <Image src="/images/TeamImg3.jpg" width="319" height="630" alt="logo" className='logo' />
                                <div className="social-icons">
                                    <ul className="flex-row">
                                        <li>
                                            <div className="circle"><a href=""><Image src="/images/twitter.svg" width="100" height="100" alt="" /></a></div>
                                        </li>
                                        <li>
                                            <div className="circle"><a href=""><Image src="/images/mail.svg" width="100" height="100" alt="" /></a></div>
                                        </li>
                                        <li>
                                            <div className="circle"><a href=""><Image src="/images/linkedin.svg" width="100" height="100" alt="" /></a></div>
                                        </li>
                                        <li>
                                            <div className="circle"><a href=""><Image src="/images/instagram.svg" width="100" height="100" alt="" /></a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="occupation">
                                    <p className="main-para">Harry Poter</p>
                                    <button className="simple-btn">Director</button>
                                </div>
                            </div>
                        </div>
                        <div className='hidden lg:block'></div>
                        <div className='hidden lg:block'></div>
                        <div className='tfc_team_list sectionAll'>
                            <div className="team-image">
                                <Image src="/images/TeamImg1.jpg" width="319" height="630" alt="logo" className='logo' />
                                <div className="social-icons">
                                    <ul className="flex-row">
                                        <li>
                                            <div className="circle"><a href=""><Image src="/images/twitter.svg" width="100" height="100" alt="" /></a></div>
                                        </li>
                                        <li>
                                            <div className="circle"><a href=""><Image src="/images/mail.svg" width="100" height="100" alt="" /></a></div>
                                        </li>
                                        <li>
                                            <div className="circle"><a href=""><Image src="/images/linkedin.svg" width="100" height="100" alt="" /></a></div>
                                        </li>
                                        <li>
                                            <div className="circle"><a href=""><Image src="/images/instagram.svg" width="100" height="100" alt="" /></a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="occupation">
                                    <p className="main-para">Harry Poter</p>
                                    <button className="simple-btn">Director</button>
                                </div>
                            </div>
                        </div>
                        <div className='tfc_team_list sectionAll'>
                            <div className="team-image">
                                <Image src="/images/TeamImg2.jpg" width="319" height="630" alt="logo" className='logo' />
                                <div className="social-icons">
                                    <ul className="flex-row">
                                        <li>
                                            <div className="circle"><a href=""><Image src="/images/twitter.svg" width="100" height="100" alt="" /></a></div>
                                        </li>
                                        <li>
                                            <div className="circle"><a href=""><Image src="/images/mail.svg" width="100" height="100" alt="" /></a></div>
                                        </li>
                                        <li>
                                            <div className="circle"><a href=""><Image src="/images/linkedin.svg" width="100" height="100" alt="" /></a></div>
                                        </li>
                                        <li>
                                            <div className="circle"><a href=""><Image src="/images/instagram.svg" width="100" height="100" alt="" /></a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="occupation">
                                    <p className="main-para">Harry Poter</p>
                                    <button className="simple-btn">Director</button>
                                </div>
                            </div>
                        </div>
                        <div className='tfc_team_list sectionAll'>
                            <div className="team-image">
                                <Image src="/images/TeamImg1.jpg" width="319" height="630" alt="logo" className='logo' />
                                <div className="social-icons">
                                    <ul className="flex-row">
                                        <li>
                                            <div className="circle"><a href=""><Image src="/images/twitter.svg" width="100" height="100" alt="" /></a></div>
                                        </li>
                                        <li>
                                            <div className="circle"><a href=""><Image src="/images/mail.svg" width="100" height="100" alt="" /></a></div>
                                        </li>
                                        <li>
                                            <div className="circle"><a href=""><Image src="/images/linkedin.svg" width="100" height="100" alt="" /></a></div>
                                        </li>
                                        <li>
                                            <div className="circle"><a href=""><Image src="/images/instagram.svg" width="100" height="100" alt="" /></a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="occupation">
                                    <p className="main-para">Harry Poter</p>
                                    <button className="simple-btn">Director</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Ourteam