import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ServiceItem } from "@/types/menu";
import CustomButton from '../CustomButton';


interface ServicesFlyoutProps {
  hideMenus?: () => void;
  services?: ServiceItem[];
  isOpen: boolean;
  toggleFlyout: () => void;
}

const ServicesFlyout: React.FC<ServicesFlyoutProps> = ({
  hideMenus,
  services,
  isOpen,
  toggleFlyout,
}) => {
  const flyoutRef = useRef<HTMLDivElement | null>(null);
  const [shouldSlideDown, setShouldSlideDown] = useState(false);

  function handleClickOutside(event: MouseEvent) {
    if (
      flyoutRef.current &&
      !flyoutRef.current.contains(event.target as Node)
    ) {
      if (flyoutRef.current) {
        flyoutRef.current.classList.add("slide-up");
        setTimeout(() => {
          toggleFlyout();
          if (flyoutRef.current) {
            flyoutRef.current.classList.remove("slide-up");
          }
        }, 1000);
      }
    }
  }

  useEffect(() => {
    if (isOpen) {
      setShouldSlideDown(true);
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      setShouldSlideDown(false);
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, toggleFlyout]);

  return (
    <div className={`services-flyout ${shouldSlideDown ? "slide-down" : ""}`} ref={flyoutRef}>
      {services ? (
        <div className="services-flyout-content">
          <div className="row mt-6">
            <div className="service-item">
              <h2 className="relative bottom-3">Services</h2>
              <p className="text-white text-[13px] relative top-4">
                Unleash the power of your brand with our comprehensive suite of services.
              </p>
            </div>
            {services.slice(0, 3).map((subMenuItem) => (
              <div key={subMenuItem.id} className="service-item hover:bg-gray-900">
                {subMenuItem.path ? (
                  <Link onClick={hideMenus} href={subMenuItem.path} className="text-black hover:underline">
                    <Image
                      src={subMenuItem.image}
                      alt="Service Icon"
                      width={70}
                      className="w-[46px] h-[46px]"
                      height={70}
                    />{" "}
                    {subMenuItem.heading}
                  </Link>
                ) : (
                  <div className="flex gap-3">
                    <Image
                      src={subMenuItem.image}
                      alt="Service Icon"
                      className="w-[46px] h-[46px]"
                      width={70}
                      height={70}
                    />
                    <div className="flex flex-col gap-5">
                      <span className="text-white text-lg">
                        {subMenuItem.heading}
                      </span>
                      <p className="text-white text-xs">{subMenuItem.text}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="row">
            <div className="service-item">
            <Link href="./services">
                                <CustomButton
                  title="Learn More"
                  containerStyles="bg-white text-black border-black borderabsolute px-8 py-3"
                />
                </Link>
            </div>
            {services.slice(3, 6).map((subMenuItem) => (
              <div key={subMenuItem.id} className="service-item hover:bg-gray-900">
                {subMenuItem.path ? (
                  <Link onClick={hideMenus} href={subMenuItem.path} className="text-white hover:underline">
                    <Image
                      src={subMenuItem.image}
                      alt="Service Icon"
                      width={70}
                      className="w-[46px] h-[46px]"
                      height={70}
                    />{" "}
                    {subMenuItem.heading}
                  </Link>
                ) : (
                  <div className="flex gap-3">
                    <Image
                      src={subMenuItem.image}
                      alt="Service Icon"
                      width={70}
                      className="w-[46px] h-[46px]"
                      height={70}
                    />
                    <div className="flex flex-col gap-5">
                      <span className="text-white text-lg">
                        {subMenuItem.heading}
                      </span>
                      <p className="text-white text-xs">{subMenuItem.text}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>No services available.</p>
      )}
    </div>
  );
};

export default ServicesFlyout;
