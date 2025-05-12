import React from 'react';
import { FaFacebookF, FaInstagram, } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialSkype } from "react-icons/ti";
import './footer.css'
import { FaPhoneAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const Footer = () => {
    return (
        <div className='footer bg-dark px-4  pt-14 pb-8'>
            <div className='container'>
                {/* <div className='footer-icon flex md:flex-row gap-10 flex-col justify-center items-center md:justify-between pb-6 border-b border-gary'>
                    <img className="h-[60px] w-auto max-w-[196px]" src="/images/Logo_main1.svg" alt="Logo" />

                    <div className='icons flex gap-6 items-center text-white'>
                        <p className='body-text'><b>Follow Us</b></p>
                        <div className='icons-main flex gap-4 text-white'>
                            <FaFacebookF />
                            <FaInstagram />
                            <TiSocialSkype />
                        </div>
                    </div>
                </div> */}
                <div className='footer-links border-b  border-gary py-14'>
                    <div className='grid text-white gap-10 md:grid-cols-4'>
                        {/* <div className='Company '>
                            <h4 className='mb-6'>Company</h4>
                            <a href="" className='mb-3 block'>About us</a>
                            <a href="" className='mb-3 block'>Our offerings</a>
                            <a href="" className='mb-3 block'>Newsroom</a>
                            <a href="" className='mb-3 block'>Investors</a>
                            <a href="" className='mb-3 block'>Blog</a>
                            <a href="" className='mb-3 block'>Careers</a>
                        </div> */}
                        <div className='Top-cities  px-2'>
                            <img className="h-[60px] w-auto max-w-[196px]" src="/images/Logo_main1.svg" alt="Logo" />
                            {/* <p className='body-text-small my-4'>Escaping London for a relaxing long weekend</p> */}
                            <div className='icons flex flex-col gap-3 items-start    text-white'>
                        <p className='body-text'><b>Follow Us</b></p>
                        <div className='icons-main flex gap-4 text-white'>
                             <a href="https://https://www.facebook.com/elitebcar" target="_blank" rel="noopener noreferrer">
                                <FaFacebookF />
                              </a>
                          <a href="https://https://www.instagram.com/p/DJZpVJxy1N2/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                          </a>
                           <a href="https://x.com/elitebcar/status/1920529259770028092" target="_blank" rel="noopener noreferrer">
                            <FaXTwitter />
                          </a>
                        </div>
                    </div>
                        </div>
                        <div className='Explore px-2'>
                            <h4 className='mb-6'>Services</h4>
                            <a   className='mb-3 block'>Airport Transport</a>
                            <a   className='mb-3 block'>City Tours </a>
                            <a   className='mb-3 block'>Corporate Travel</a>
                        </div>
                        <div className='Classes px-2'>
                            <h4 className='mb-6'>Classes</h4>
                            <a    className='mb-3 block'>Business</a>
                            <a   className='mb-3 block'>First</a>
                            <a   className='mb-3 block'>XL</a>
                            <a   className='mb-3 block'>Assistant</a>
                        </div>
                        <div className='Recent-Posts col-span-1'>
                            <h4 className='mb-6'>Contact</h4>
                            <a   className='mb-3 block flex gap-2 items-center'><span className='text-lg'><FaPhoneAlt /></span>8668351313</a>
                            <a  href='mailto:info@elitebcar.com' className='mb-3 block flex gap-2 items-center'><span className='text-2xl'><CgMail /></span> info@elitebcar.com</a>
                            <a href='mailto:reservation@elitebcar.com'  className='mb-3 block flex gap-2 items-center'><span className='text-2xl'><CgMail /></span> reservation@elitebcar.com</a>

                           
                        </div>
                    </div>
                </div>
                <div className='flex text-white pt-8 justify-between'>
                    <a href="" className='mb-3 block'>© 2025 Elite Black Car</a>
                    <div className='flex gap-3'>
                        <a   className='mb-3 block'>Terms</a>
                        <a   className='mb-3 block'>Privacy policy</a>
                        <a   className='mb-3 block'> Accessibility</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
