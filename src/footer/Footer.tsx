"use client"
import React, { useState } from 'react';
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaEnvelope } from "react-icons/fa";
import './footer.css';
import Link from 'next/link';

const Footer = () => {


  return (
    <div className='footer bg-dark px-4 pt-14 pb-8'>
      <div className='container'>
        <div className='footer-links border-b border-gary py-14'>
          <div className='grid text-white gap-10 md:grid-cols-4'>
            <div className='Top-cities px-2'>
              <img loading="lazy" className="h-[60px] w-auto max-w-[196px]" src="/images/Logo_main1.svg" alt="Logo" />
              <div className='icons flex flex-col gap-3 items-start text-white'>
                <p className='body-text'><b>Follow Us</b></p>
                <div className='icons-main flex gap-4 text-white'>
                  <a href="https://www.facebook.com/elitebcar" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                  <a href="https://www.instagram.com/elitebcar13/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                  <a href="https://x.com/elitebcar/" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
                </div>
              </div>
            </div>

            <div className='Explore px-2'>
              <h4 className='mb-6'>Services</h4>
              <Link href="/service/Airport-Transfers" className="block mb-3">Airport Transfers</Link>
              <Link href="/service/City-Tours" className="block mb-3">City Tours</Link>
              <Link href="/service/Corporate-Travel" className="block">Corporate Travel</Link>

            </div>

            <div className='Classes px-2'>
              <h4 className='mb-6'>Classes</h4>
              <a className='mb-3 block'>Business</a>
              <a className='mb-3 block'>First</a>
              <a className='mb-3 block'>XL</a>
              <a className='mb-3 block'>Assistant</a>
            </div>

            <div className='Recent-Posts col-span-1'>
              <h4 className='mb-6'>Contact</h4>
              <a href="tel:+1 (866) - 835 - 1313" className='mb-3 block flex gap-2 items-center'><span className='text-lg'><FaPhoneAlt /></span>+1 (866) - 835 - 1313</a>
             <a href="tel:+1 (332) - 232 - 1313" className='mb-3 block flex gap-2 items-center'><span className='text-lg'><FaEnvelope /></span>+1 (332) - 232 - 1313</a>
              <a href='mailto:info@elitebcar.com' className='mb-3 block flex gap-2 items-center'><span className='text-2xl'><CgMail /></span> info@elitebcar.com</a>
              <a href='mailto:reservation@elitebcar.com' className='mb-3 block flex gap-2 items-center'><span className='text-2xl'><CgMail /></span> reservation@elitebcar.com</a>
            </div>
          </div>
        </div>

        <div className='md:flex text-white  md:pt-8 justify-between'>
          <a href="" className='mb-3 block'>© 2025 Elite Black Car</a>
          <div className='md:flex gap-3'>
            <Link href='/terms-conditions' className='mb-3 block'>Terms</Link>
            <Link href='/privacy-policy' className='mb-3 block'>Privacy policy</Link>
            {/* <a className='mb-3 block'>Accessibility</a> */}
          </div>
        </div>
      </div>


    </div>
  );
};

export default Footer;
