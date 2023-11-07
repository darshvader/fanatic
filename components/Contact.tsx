import React from 'react'
import CustomButton from './CustomButton';
import Link from 'next/link';

const Contact = () => {
    return (
        <section className='tfc_contact_section pt-36'>

            <div className='tfc_blogs mt-3'>
                <div className='tfc_container'>
                    <div className='tfc_contact_group bg_mildemb py-16'>
                        <div className="">
                            <p className='md:text-center text-left'>Contact Us</p>
                        </div>
                        <div className="contactDetail">
                            <h2>We're Passionate About Creating Innovative Websites</h2>
                            <p className='text-left'>David had a complex project that required a lot of customization, and
                                he was impressed with the web development agency's level of customer service. </p>
                                <Link href="./contact">
                                <CustomButton
                  title="Get in Touch"
                  containerStyles="bg-black text-white  absolute px-8 py-4"
                />
                </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact