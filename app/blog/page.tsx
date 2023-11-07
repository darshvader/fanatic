import React from "react";
import Image from "next/image";
import { Contact } from "@/components";

const blog = () => {
  return (
    <div>
      <section className="tfc_blogs mt-16">
        <div className="tfc_container">
          <div className="blogInner grid grid-cols-2 gap-4">
          <div className="blogImage relative">
  <div className="group overflow-hidden">
    <Image
      src="/images/blog0hero.jpg"
      width="650"
      height="711"
      alt="logo"
      className="transform transition-transform duration-300 ease-in-out group-hover:scale-105"
    />
  </div>
</div>


            <div className="blogContent">
              <div className="content pl-20">
                <p className="main-para">SOCIAL MEDIA</p>
                <h1>
                  The Importance <br /> of strong Branding
                </h1>
                <p className="card-para">
                  Branding is a critical element of any business, regardless of
                  its size or industry. It refers to the way a company presents
                  itself to the world, including its name, logo, messaging, and
                  overall identity.
                </p>
                <a className="tfcBtnone mt-36" href="/singleBlog.html">
                  Get Started{" "}
                  <Image
                    src="/images/whiteDoubleArrow.svg"
                    width="7"
                    height="7"
                    alt="logo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blogList mt-20">
        <div className="tfc_section_title">
          <div className="tfc_container ">
            <h2>LATEST NEWS</h2>
          </div>
        </div>
        <div className="tfc_blogs_list mt-16">
          <div className="tfc_container">
            <div className="blog_items grid grid-cols-3  gap-4">
              <div className="items mb-4">
                <Image
                  src="/images/postImg1.jpg"
                  width="423"
                  height="384"
                  alt="logo"
                />
                <div className="details ">
                  <h4>The Role of Market Research in Branding Strategy</h4>
                  <button className="tfcbtnSmall">Branding</button>
                </div>
              </div>
              <div className="items mb-4">
                <Image
                  src="/images/postImg6.jpg"
                  width="423"
                  height="384"
                  alt="logo"
                />
                <div className="details ">
                  <h4>The Role of Market Research in Branding Strategy</h4>
                  <button className="tfcbtnSmall">Branding</button>
                </div>
              </div>
              <div className="items mb-4">
                <Image
                  src="/images/postImg4.jpg"
                  width="423"
                  height="384"
                  alt="logo"
                />
                <div className="details ">
                  <h4>The Role of Market Research in Branding Strategy</h4>
                  <button className="tfcbtnSmall">Branding</button>
                </div>
              </div>
              <div className="items mb-4">
                <Image
                  src="/images/postImg4.jpg"
                  width="423"
                  height="384"
                  alt="logo"
                />
                <div className="details ">
                  <h4>The Role of Market Research in Branding Strategy</h4>
                  <button className="tfcbtnSmall">Branding</button>
                </div>
              </div>
              <div className="items mb-4">
                <Image
                  src="/images/postImg3.jpg"
                  width="423"
                  height="384"
                  alt="logo"
                />
                <div className="details ">
                  <h4>The Role of Market Research in Branding Strategy</h4>
                  <button className="tfcbtnSmall">Branding</button>
                </div>
              </div>
              <div className="items mb-4">
                <Image
                  src="/images/postImg2.jpg"
                  width="423"
                  height="384"
                  alt="logo"
                />
                <div className="details ">
                  <h4>The Role of Market Research in Branding Strategy</h4>
                  <button className="tfcbtnSmall">Branding</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default blog;
