"use client";
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { navItems, footerSocialMedia, footerPolicy, footerCompany } from '@/data';

const Footer = () => {
  const pathname = usePathname();
  
  return (
    <div className="bg-gray-600 text-white py-10 px-8 w-screen">
      {['/contact-us', '/privacy-policy', '/terms-of-service'].includes(pathname) && (
      <div className="container mx-auto flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
        <div className="flex flex-col space-y-4">
          <h1 className="text-2xl font-bold">VIBRANT SETS SDN BHD</h1>
          {footerCompany.map((item: any, index: number) => (
            <div key={index} className="flex item-center space-x-2">
              {item.icon}
              <Link href={item.link} className="hover:underline mt-1 pl-1">{item.text}</Link>
            </div>
          ))}
        </div>
        {/* <div className="flex flex-col space-y-2">
          <span className="text-xl font-semibold">Quick Links</span>
          <ul className="flex space-y-2 flex-col">
            {navItems.map((navItem: any, index: number) => (
              <li
                key={index}
                className=" hover:underline"
              >
                <Link href={navItem.link}>
                  {navItem.name}
                </Link>
              </li>
            ))}
          </ul>
        </div> */}
        <div className="flex flex-col space-y-2">
          <span className="text-xl font-semibold">Policies & Terms</span>
          <ul className="flex space-y-2 flex-col">
            {footerPolicy.map((item: any, index: number) => (
              <li 
                key={index}
                className="hover:underline"
              >
                <Link href={item.link}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* <div className="flex flex-col space-y-2 items-center">
          <ul className="flex space-x-4">
            {footerSocialMedia.map((item: any, index: number) => (
              <li key={index} className="hover:text-gray-400">
                <Link href={item.link}>
                  {item.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div> */}
      </div>
      )}
      <div className="container mx-auto flex justify-center items-center text-center text-sm border-t border-gray-700 mt-8 pt-4">
        &copy; 2024 Vibrant Sets Sdn Bhd | All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;
