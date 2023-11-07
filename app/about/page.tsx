import React from 'react';
import Image from 'next/image';
import { Contact, Ourteam } from '@/components';

const About = () => {
  return (
    <div className='mt-16'>
      <section className='aboutSection'>
        <div className="tfc_container">
          <div className='grid grid-cols-2 gap-4'>
            <div className='imageBlock'>
              <Image src="/images/aboutHero.jpg" width="650" height="711" alt="logo" className='logo' />
            </div>
            <div className='imageContent'>
              <div className="content px-32">
                <h5>CONTACT US </h5>
                <h1>We make things happen.</h1>
                <p>We love the ease the internet, web portals, and mobile applications bring
                  into our lives and building on that experience, we help brands achieve just the right
                  digitization.</p>
              </div>
            </div>
          </div>
        </div>
      </section>





      <section className="tfc_our_section tfc_about_section pt-36">
        <div className="tfc_ourvalue mt-3">
          <div className="tfc_container">
            <div className="tfc_ourvalue_items">
              <div className="tfc_valueColumn bg_mildgrey">
                <h2>200+  <span>CLIENTS</span></h2>
                <p className='card-para'>Served over 200 clients with our top-notch web development services.</p>
              </div>
              <div className="tfc_valueColumn bg_mildblue">
                <h2>300+ <span>PROJECTS</span></h2>
                <p className='card-para'>Served over 200 clients with our top-notch web development services.</p>
              </div>
              <div className="tfc_valueColumn bg_mildemb">
                <h2> 100%  <span>HAPPY CLIENTS</span></h2>
                <p className='card-para'>Served over 200 clients with our top-notch web development services.</p>
              </div>
              <div className="tfc_valueColumn"></div>
              <div className="tfc_valueColumn"></div>
              <div className="tfc_valueColumn bg_mildgrey">
                <h2> 110%  <span> COMMITMENT </span></h2>
                <p className='card-para'>Served over 200 clients with our top-notch web development services.</p>
              </div>
              <div className="tfc_valueColumn bg_mildorange col-span-2">
                <h2> 2000 + <span> FOLLOWERS </span></h2>
                <p className='card-para'>Served over 200 clients with our top-notch web development services. </p>
              </div>
              
              <div className="tfc_valueTextColumn mt-20 text-left">
                <h5>Our values</h5> 
              </div>
              <div className="tfc_valueTextColumn mt-20 text-left">
                <h4>Building Trust,<br></br> Not Pitching</h4>
              </div>
              <div className="tfc_valueTextColumn mt-20 col-span-2">
                <p>Our agency's approach involves establishing long-term relationships with our clients by focusing on their needs and goals rather than aggressively promoting our services.</p>
              </div>
              <div className="tfc_valueLineColumn"></div>
              <div className="tfc_valueLineColumn col-span-3 border-solid border-b border-black"></div>

              
              <div className="tfc_valueTextColumn"></div>
              <div className="tfc_valueTextColumn">
                <h4>Bold Moves, <br></br>Big Impact.</h4>
              </div>
              <div className="tfc_valueTextColumn col-span-2">
                <p>Our agency's approach involves establishing long-term relationships with our clients by focusing on their needs and goals rather than aggressively promoting our services.</p>
              </div>
              <div className="tfc_valueLineColumn"></div>
              <div className="tfc_valueLineColumn col-span-3 border-solid border-b border-black"></div>

              
              <div className="tfc_valueTextColumn"></div>
              <div className="tfc_valueTextColumn">
                <h4>Bold Moves,<br></br>Big Impact.</h4>
              </div>
              <div className="tfc_valueTextColumn col-span-2">
                <p>Our agency's approach involves establishing long-term relationships with our clients by focusing on their needs and goals rather than aggressively promoting our services.</p>
              </div>
              <div className="tfc_valueLineColumn"></div>
              <div className="tfc_valueLineColumn col-span-3 border-solid border-b border-black"></div>

              <div className="tfc_valueTextColumn"></div>
              <div className="tfc_valueTextColumn">
                <h4>Bold Moves,<br></br>Big Impact.</h4>
              </div>
              <div className="tfc_valueTextColumn col-span-2">
                <p>Our agency's approach involves establishing long-term relationships with our clients by focusing on their needs and goals rather than aggressively promoting our services.</p>
              </div>
              

            </div>
          </div>
        </div>
      </section>
      




      <Ourteam showAboutUsButton={false}/>
      <Contact />
    </div>
  )
}

export default About