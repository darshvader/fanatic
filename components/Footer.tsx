import React from 'react';
import Image from 'next/image';
import CustomButton from './CustomButton';
import Link from 'next/link';

const Footer = () => {
  return (
    <section className='tfc_footer_section pt-36'>
      <div className='tfc_container'>
        <div className='tfc_contact'>
          <div className="footerCol1">
            <div className="footerlogo">
              <Image src="/images/lOGO - Copy.jpg" width="250" height="100" alt="logo" />

            </div>

            <div className="social-links">
              <ul className="flex">
                <li><a href=""> <Image src="/images/instagram.svg" width="250" height="100" alt="logo" /></a></li>
                <li><a href=""> <Image src="/images/facebook.svg" width="250" height="100" alt="logo" /></a></li>
                <li><a href=""> <Image src="/images/linkedin.svg" width="250" height="100" alt="logo" /></a></li>
                <li><a href=""> <Image src="/images/twitter.svg" width="250" height="100" alt="logo" /></a></li>
              </ul>
            </div>
            <div className="display-none">
              <div className="phone chat"><i className="fa-solid fa-phone"></i> <span>+91 189 235 6119</span></div>
              <div className="mail chat"><i className="fa-regular fa-envelope"></i>
                <span>info@fanaticcoders.com</span>
              </div>
            </div>
          </div>

          <div className="footerCol2">
            <div className="footer-acc">
              <h4>Company</h4>
            </div>
            <hr id="mobile" />
            <ul className="acc-links">
              <li><a className="animated-link" href="">About</a></li>
              <li><a className="animated-link" href="">Work</a></li>
              <li><a className="animated-link" href="">Services</a></li>
              <li><a className="animated-link" href="">Blog</a></li>
              <li>
                <Link href="./contact">
              <CustomButton
                  title="Contact Us"
                  containerStyles="bg-black text-white mt-1  px-5 py-2"
                />
                </Link>
              </li>
            </ul>
          </div>

          <div className="footerCol2">
            <div className="footer-acc">
              <h4>Services</h4>
            </div>

            <hr id="mobile" />
            <ul className="acc-links active">
              <li><a className="animated-link" href="">Branding</a></li>
              <li><a className="animated-link" href="">Marketing</a></li>
              <li><a className="animated-link" href="">Web Designing</a></li>
              <li><a className="animated-link" href="">Web Development</a></li>

            </ul>
          </div>

          <div className="footerCol2">
            <div className="footer-acc">
              <h4>Expertise</h4>
            </div>

            <hr id="mobile" />
            <ul className="acc-links">
              <li><a className="animated-link" href="">E-commerce Development</a></li>
              <li><a className="animated-link" href="">Open Source Customization</a></li>
              <li><a className="animated-link" href="">Full-Stack Development</a></li>
              <li><a className="animated-link" href="">Mobile App Development</a></li>
              <li><a href=""></a></li>
            </ul>
          </div>

        </div>
      </div>
      <div className='footerBottom py-4'>
        <div className='tfc_container'>
          <cite>
            <span>© 2023 www.fanaticcoders.com. All rights reserved.</span>
            <span>
              <ul className="flex">
                <li><a href="">Privacy &amp; Policy</a></li>
                <li><a href="">Term &amp; Conditions</a></li>
              </ul>
            </span>
          </cite>
        </div>
      </div>
    </section>
  )
}

export default Footer