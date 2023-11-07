import React from 'react';
import CustomButton from './CustomButton';

const Ourvalue = () => {
    return (
        <section className='tfc_our_section pt-36'>
            <div className='tfc_section_title'>
                <div className='tfc_container'>
                    <h2>OUR VALUES</h2>
                </div>
            </div>
            <div className='tfc_ourvalue mt-3'>
                <div className='tfc_container'>
                    
                    <div className='tfc_ourvalue_items'>
                        <div className='tfc_valueColumn bg_mildgrey'>
                            <h6>Services</h6>
                            <h4>Our Approach to Brands.</h4>
                            <CustomButton
                                title="Our Services"
                                containerStyles="bg-black text-white mt-3 w-[161px] h-[46px]" // Adjust the mt-3 value as needed
                            />
                        </div>
                        <div className='tfc_valueColumn bg_mildblue'>
                            <h6>HELPING BRANDS <br />STANDOUT</h6>
                            <h4>Bold Moves, <br />Big Impact.</h4>
                        </div>
                        <div className='tfc_valueColumn bg_mildemb'>
                            <h6>HELPING BRANDS <br /> STANDOUT</h6>
                            <h4>Bold Moves, <br />Big Impact.</h4></div>
                        <div className='hidden lg:block'></div>
                        <div className='hidden lg:block'></div>
                        <div className='tfc_valueColumn bg_mildgrey'>
                            <h6>HELPING BRANDS <br /> STANDOUT</h6>
                            <h4>Bold Moves, <br /> Big Impact.</h4></div>
                        <div className='tfc_valueColumn bg_mildgrey'>
                            <h6>HELPING BRANDS <br /> STANDOUT</h6>
                            <h4>Bold Moves, <br /> Big Impact.</h4></div>
                        <div className='tfc_valueColumn bg_mildorange'>
                            <h6>HELPING BRANDS <br /> STANDOUT</h6>
                            <h4>Bold Moves, <br /> Big Impact.</h4></div>
                    </div>


                    <div className='grid md:grid-col-1 lg:grid-cols-4 gap-4 mt-28 tfc_ourvalue_block_2'>
                        <div className='col-span-1 hidden lg:block'></div>
                        <div className='lg:col-span-2'>
                            <h1>Responsive Web Development that Adapts to Your Users' Needs.</h1>
                            <div className='grid grid-cols-2 gap-4 mt-6'>
                                <div>
                                    <p>The process of creating websites that are designed to provide an optimal viewing experience across a range of devices and screen sizes, from desktop computers to mobile phones. This approach ensures that users can access and interact with a website seamlessly, regardless of the device they are using.

                                    </p></div>
                                <div><p>By prioritizing responsive web development, web developers can ensure that their clients' websites are accessible and easy to use, regardless of how users access them. This helps to increase engagement, improve user satisfaction, and drive business growth. Additionally, responsive websites are favored by search engines, which can improve search engine optimization (SEO) and drive more traffic to a website.

                                </p></div>
                            </div>
                        </div>
                        <div className='col-span-1 hidden lg:block'></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Ourvalue