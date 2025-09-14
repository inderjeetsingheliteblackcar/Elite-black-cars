"use client"
import React, { useState } from 'react';
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import Servicesmain from "../components/services/servicesData.json";
import './footer.css';
import Button from '@/button/Button';
import Link from 'next/link';

const Footer = () => {
  const [popupData, setPopupData] = useState<null | {
    title: string;
    popupdescription: string;
    image: string;
  }>(null);

  const openPopup = (title: string, popupdescription: string, image: string) => {
    setPopupData({ title, popupdescription, image });
  };

  const closePopup = () => {
    setPopupData(null);
  };

  return (
    <div className='footer bg-dark px-4 pt-14 pb-8'>
      <div className='container'>
        <div className='footer-links border-b border-gary py-14'>
          <div className='grid text-white gap-10 md:grid-cols-4'>
            <div className='Top-cities px-2'>
              <img className="h-[60px] w-auto max-w-[196px]" src="/images/Logo_main1.svg" alt="Logo" />
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
              {Servicesmain.map((data) => (
                <a
                  key={data.id}
                  onClick={() => openPopup(data.title, data.popupdescription, data.image)}
                  className='mb-3 block cursor-pointer hover:text-orange transition'
                >
                  {data.title}
                </a>
              ))}
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

      {/* Popup Modal */}
      {popupData && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white p-8 rounded-lg max-w-[900px] w-full">
            <button
              onClick={closePopup}
              className="absolute top-0 right-2 text-orange hover:text-black text-[40px] leading-none"
            >
              ×
            </button>
            <div className="grid md:grid-cols-12 gap-6 md:gap-10">
              <div className="md:col-span-6">
                <img src={popupData.image} alt={popupData.title} className="rounded-xl w-full" />
              </div>
              <div className="md:col-span-6">
                <h2 className="text-2xl font-semibold mb-4">{popupData.title}</h2>
                <div
                  dangerouslySetInnerHTML={{ __html: popupData.popupdescription }}
                  className="text-gray-700 mb-10"
                />
              <Link href="https://book.mylimobiz.com/v4/eliteblackcar"    onClick={closePopup}>  <Button text="Book Now" color="text-white" bg="bg-dark" hoverbg="hover:bg-orange" /></Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
