"use client";
import Image from 'next/image';
import CustomButton from './../CustomButton';
import ServicesFlyout from './ServicesFlyout';
import menuData from "./menuData";
import React, {useState} from 'react';
import Link from 'next/link';
import { ServiceItem } from "@/types/menu";


const Header = () => {
    const [isFlyoutOpen, setIsFlyoutOpen] = useState(false);
    const [isActive, setIsActive] = useState(false);
  
    const toggleFlyout = () => {
      setIsFlyoutOpen(!isFlyoutOpen);
    };
  
    const toggleMenu = () => {
      setIsActive(!isActive);
    };
  
    const hideMenus = () => {
      setIsActive(false);
      setIsFlyoutOpen(false);
    };
  
    return (
      <header>
        <div className='tfc_container'>
          <div className={`header_inner ${isActive ? 'openMenu' : ''} `}>
            <div className="site_logo">
              <Image src="/images/logo.png" width="250" height="100" alt="logo" className='logo' />
            </div>
            <nav className='header_menu hidden lg:block'>
              <ul className='flex p-4'>
                {menuData.map((menuItem, index) => (
                  <li key={menuItem.id}>
                    {menuItem.title === 'Services' ? (
                      <div>
                        <span>
                          <Link href={typeof menuItem.path === 'string' ? menuItem.path : '/'}>
                            {menuItem.title}
                          </Link>
                        </span>
                        <button onClick={toggleFlyout}>▼</button>
                        {isFlyoutOpen && (
                          <ServicesFlyout services={menuItem.submenu} isOpen={isFlyoutOpen} toggleFlyout={toggleFlyout} />
                        )}
                      </div>
                    ) : (
                      <Link onClick={hideMenus} href={typeof menuItem.path === 'string' ? menuItem.path : '/'}>
                        {menuItem.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <div className="toggle block lg:hidden" onClick={toggleMenu}>
              <span className="toggle-btn"></span>
            </div>
            <div className="header_btn hidden lg:block ">
              <Link href="/contact">
                <CustomButton
                  title="Get Started"
                  containerStyles="bg-transparent text-black border-black border px-6 py-2"
                />
              </Link>
            </div>
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;

