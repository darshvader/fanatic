import { Contact } from '@/components'
import React from 'react'

const career = () => {
  return (
    <div>
      <section className='tfc_career mt-16'>
        <div className="tfc_container">
          <div className='careerInner grid'>
            <div className='careerContent'>
              <div className="content">
                <p className="main-para pb-6">WORK</p>
                <h1>Join our team of innovative <br />digital experts and shape the future of the web</h1>
                <p className="card-para pt-6 pb-16">Looking for a career in the exciting world of digital innovation?
                  Join our <br /> team of experts and help shape the future of the web with your unique <br /> skills and ideas.
                </p>
                <a className='tfcBtnone' href="#">Join Our Team</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='tfc_our_section pt-36'>
        <div className='tfc_ourvalue mt-3'>
          <div className='tfc_container'>
            <div className='tfc_title_main pb-6'>
              <h1>Selected Work</h1>
            </div>
            <div className='tfc_ourvalue_items'>
              <div className='tfc_valueColumn bg_mildgrey'>
                <h6>OUR BENIFITS</h6>
                <h4>Great Benefits of Working With Fanatic Coders.</h4>
                <button className="tfcBtnone">
                  About Us
                </button>
              </div>
              <div className='tfc_valueColumn bg_mildblue'>
                <h4>Collaborative and supportive team environment.</h4>
              </div>
              <div className='tfc_valueColumn bg_mildemb'>
                <h4>Opportunities for growth and career advancement.</h4>
              </div>
              <div className='tfc_valueColumn'></div>
              <div className='tfc_valueColumn'></div>
              <div className='tfc_valueColumn bg_mildgrey'>
                <h4>Chance to make a real impact on the digital landscape.</h4>
              </div>
              <div className='tfc_valueColumn bg_mildgrey'>
                <h4>Flexibility and work-life balance.</h4>
              </div>
              <div className='tfc_valueColumn bg_mildorange'>
                <h4>Exciting and dynamic company culture.</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='tfc_career mt-16'>
        <div className="tfc_container">
          <div className='careerInner grid'>
            <div className='careerContent'>
              <div className="content mt-6">
                <p className="main-para pb-6">JOBS</p>
                <h1>Current Openings</h1>
                <p className="card-para pt-6 pb-6">Looking for a career in the exciting world of digital
                  innovation? Join our <br /> team of experts and help shape the future of the web with your
                  unique <br /> skills and ideas.
                </p>
                <div className="career-paths">
                  <div className="career-btns">
                    <button className="career-btn">All</button>
                    <button className="career-btn">Marketing</button>
                    <button className="career-btn">Design</button>
                    <button className="career-btn">Development</button>
                    <button className="career-btn">Management</button>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="career-cards">
            <div className="grid-row">
              <div className="card card1 bg_mildblue">
                <h5>MANAGEMENT</h5>
                <h3>Hiring Manager</h3>
                <p className="card-para">We are looking for a hiring manager for recruiting and hiring top talent to build a skilled and motivated team that drives the success of organization ... <a href="">Read more</a></p>
                <button className="tfcBtnone">Apply Now</button>
              </div>
              <div className="card card2 bg_mildemb">
                <h5>MARKETING</h5>
                <h3>Content Writer</h3>
                <p className="card-para"> We are looking for a Front-End Developer for building engaging and interactive user interfaces that bring websites and web applications to life ... <a href="">Read more</a></p>
                <button className="tfcBtnone">Apply Now </button>
              </div>
              <div className="card card3 bg_mildorange">
                <h5>Development</h5>
                <h3>Front-End Development</h3>
                <p className="card-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, ... <a href="">Read more</a></p>
                <button className="tfcBtnone">Apply Now </button>
              </div>
              <div className="card card4 bg_mildyellow">
                <h5>Design</h5>
                <h3>UI &amp; UX Designer</h3>
                <p className="card-para">We are looking for a Front-End Developer for building engaging and interactive user interfaces that bring websites and web applications to life ... <a href="">Read more</a> </p>
                 <button className="tfcBtnone">Apply Now </button>
              </div>
              <div className="card card5 bg_mildgrey">
                <h5>Development</h5>
                <h3>WordPress Developer</h3>
                <p className="card-para">We are looking for a Front-End Developer for building engaging and interactive user interfaces that bring websites and web applications to life ... <a href="">Read more</a>
                 </p>

                <button className="tfcBtnone">Apply Now </button>
              </div>
              <div className="card card6 bg_mildblue">
                <h5>MANAGEMENT</h5>
                <h3>Online Bidder</h3>
                <p className="card-para">We are looking for a Front-End Developer for building engaging and interactive user interfaces that bring websites and web applications to life ... <a href="">Read more</a></p>
                 <button className="tfcBtnone">Apply Now </button>
              </div>
            </div>
          </div>


        </div>
      </section>

      <Contact />
    </div>
  )
}

export default career




