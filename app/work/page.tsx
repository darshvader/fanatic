import { Contact } from '@/components';
import React from 'react';
import Image from 'next/image';

const work = () => {
  return (
    <div>
      <section className='tfc_work mt-16'>
        <div className="tfc_container">
          <div className='workInner grid'>
            <div className='blogContent'>
              <div className="content">
                <p className="main-para">WORK</p>
                <h1>Our Nerdy Showcase: A sneak peek into our dorky capabilities.</h1>
                <p className="main-para">Our portfolio of successful projects includes a variety of industries, from e-commerce to business
                  websites, that demonstrate our commitment to driving growth and delivering results for our clients.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='workList'>
        <div className='tfc_container'>
          <div className="work-card mt-20">
            <div className="head">
              <h5>Elan Store</h5>
              <a className="tfcBtntwo" href="/singleWork.html">Development</a>
            </div>
            <div className="figureWork">
              <Image src="/images/ElanStoreImg.jpg" width="650" height="711" alt="Work list" />
            </div>
          </div>
          <div className="work-card mt-20">
            <div className="head">
              <h5>THE COLDEST WATER</h5>
              <a className="tfcBtntwo" href="/singleWork.html">Development</a>
            </div>
            <div className="figureWork">
              <Image src="/images/ColdestWaterImg.jpg" width="650" height="711" alt="Work list" />
            </div>
          </div>
          <div className="work-card mt-20">
            <div className="head">
              <h5>BAGLY ITALY</h5>
              <a className="tfcBtntwo" href="/singleWork.html">Development</a>
            </div>
            <div className="figureWork">
              <Image src="/images/BaglyImg.jpg" width="650" height="711" alt="Work list" />
            </div>
          </div>
          <div className="work-card mt-20">
            <div className="head">
              <h5>THE HEMP</h5>
              <a className="tfcBtntwo" href="/singleWork.html">Development</a>
            </div>
            <div className="figureWork">
              <Image src="/images/ItsHempImg.jpg" width="650" height="711" alt="Work list" />
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </div>
  )
}

export default work