import React from 'react';
import CustomButton from './CustomButton';
import Link from 'next/link';


const Blogslist = () => {
    return (
        <section className='tfc_blog_section pt-36'>
            <div className='tfc_section_title'>
                <div className='tfc_container'>
                    <h2>BLOG</h2>
                </div>
            </div>
            <div className='tfc_blogs mt-3'>
                <div className='tfc_container'>
                    <div className='tfc_title_main pb-6'>
                    <div className="flex justify-between items-center">
                        <h1>Insights on Digital Trends</h1>
                       <Link href="./blog">
                        <CustomButton 
                        title="See All" 
                        containerStyles="bg-transparent text-black border-black border px-6 py-2"  
                        />
                        </Link>
                    </div>
                    </div>
                    <div className='tfc_blogs_group'>
                        <div className='blogItem' style={{ backgroundImage: 'url(/images/bgimg3.jpg)' }}>
                            <div className="card-content bg_mildblue">
                                <p className="card-para">
                                    March 23, 2022 / Technology
                                </p>
                                <h4>Why Voice Search Optimization is Essential for SEO in 2022</h4>
                                <button className="animated-btn simple-btn lg:mt-36 md:mt-16">Read More</button>
                            </div>
                        </div>
                        <div className='blogItem' style={{ backgroundImage: 'url(/images/bgImg4.jpg)' }}>
                            <div className="card-content bg_mildyellow">
                                <p className="card-para">
                                    March 23, 2022 / Technology
                                </p>
                                <h4>Why Voice Search Optimization is Essential for SEO in 2022</h4>
                                <button className="animated-btn simple-btn lg:mt-36 md:mt-16">Read More</button>
                            </div>
                        </div>
                        <div className='blogItem' style={{ backgroundImage: 'url(/images/bgIMg1.jpg)' }}>
                            <div className="card-content bg_mildorange">
                                <p className="card-para">
                                    March 23, 2022 / Technology
                                </p>
                                <h4>Why Voice Search Optimization is Essential for SEO in 2022</h4>
                                <button className="animated-btn simple-btn lg:mt-36 md:mt-16">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blogslist