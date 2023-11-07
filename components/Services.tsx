"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Navigation, Pagination } from "swiper";
import CustomButton from "./CustomButton";
import Link from "next/link";

SwiperCore.use([Navigation]);

const Services = () => {
  const breakpoints = {
    // 320: {
    //   slidesPerView: 1,
    // },
    // 640: {
    //   slidesPerView: 1,
    // },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
  };

  const handleScroll = () => {};
  return (
    <section className="tfc_services_section pt-8">
      <div className="tfc_section_title">
        <div className="tfc_container">
          <h2>OUR SERVICES</h2>
        </div>
      </div>
      <div className="tfc_services">
        <div className="tfc_container">
          <div className="tfc_title_main">
            <h1>Suite of Services</h1>
          </div>
          <div className="tfc_service_items pt-8 mt-4">
            <div className="tfc_block_left h-[54vh] px-10 py-15">
              <div className="tfc_item_service relative">
                <h1 className="relative top-10">High-impact services to help your business</h1>
                <Link href="/services">
                  <CustomButton
                    title="Our Services"
                    containerStyles="bg-black text-white text-sm mt-10  px-6 py-3"
                  />
                </Link>
              </div>
            </div>
            <div className="tfc_block_right col-span-2">
              <Swiper
                pagination={true}
                modules={[Pagination]}
                breakpoints={breakpoints}
                spaceBetween={20}
                navigation
                className="pb-36"
              >
                <SwiperSlide>
                  <div
                    className="tfc_item_service  "
                    style={{ backgroundImage: "url(/images/bgIMg1.jpg)" }}
                  >
                    <div className="service w-[100%] h-[54vh]  hover:bg-transparent !important ease-in-out  duration-500  p-8">
                      <h1>Digital Branding</h1>
                      <p>
                        Establishing your unique digital identity through visual
                        and messaging strategies.
                      </p>
                      <a href="">
                        Learn More{" "}
                        <i className="fa-solid fa-arrow-right-long"></i>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="tfc_item_service  "
                    style={{ backgroundImage: "url(/images/bgImg4.jpg)" }}
                  >
                    <div className="w-[100%] h-[54vh] service hover:bg-transparent !important ease-in-out  duration-500  p-8">
                      <h1>Digital Marketing</h1>
                      <p>
                        Promoting your brand and reaching your audience through
                        digital channels such as social media, email, and search
                        engines.
                      </p>
                      <a href="">
                        Learn More{" "}
                        <i className="fa-solid fa-arrow-right-long"></i>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="tfc_item_service relative"
                    style={{ backgroundImage: "url(/images/bgIMg1.jpg)" }}
                  >
                    <div className="service w-[100%] h-[54vh]  hover:bg-transparent !important ease-in-out  duration-500  p-8">
                      <h1>Digital Branding</h1>
                      <p>
                        Establishing your unique digital identity through visual
                        and messaging strategies.
                      </p>
                      <a href="">
                        Learn More{" "}
                        <i className="fa-solid fa-arrow-right-long"></i>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="tfc_item_service relative"
                    style={{ backgroundImage: "url(/images/bgIMg1.jpg)" }}
                  >
                     <div className="service w-[100%] h-[54vh]  hover:bg-transparent !important ease-in-out  duration-500  p-8">
                      <h1>Digital Branding</h1>
                      <p>
                        Establishing your unique digital identity through visual
                        and messaging strategies.
                      </p>
                      <a href="">
                        Learn More{" "}
                        <i className="fa-solid fa-arrow-right-long"></i>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
