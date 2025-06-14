import React from 'react';
import Form from '../Form';
import { FaPhoneAlt, FaInstagramSquare, FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { CgMail } from 'react-icons/cg';

const Contactform = () => {
    return (
        <div className='md:py-20 py-12 px-4'>
            <div className='container'>
                <h2 className='mb-4'>Contact</h2>
                <p className='max-w-[600px] mb-10'>We believe that luxury and safety are closely correlated to each other. That’s why we prioritize top-tier safety standards</p>

                <div className='md:grid md:grid-cols-12 gap-10 '>

                    <div className='col-span-5  '>
                        <div className='relative'>
                            <h4 className=' mb-4'>Contact info:</h4>
                            <div className='md:grid  gap-2 grid-cols-2 absolute bottom-[10px] left-4 right-4'>
                                <a className=' block flex gap-2 text-dark items-center py-4 px-4   backdrop-blur-sm bg-white/70'><span className='text-lg'><FaPhoneAlt /></span>8668351313</a>
                                <a href='mailto:info@elitebcar.com' className=' block  py-4 px-4   backdrop-blur-sm bg-white/70 flex gap-2 items-center'><span className='text-2xl'><CgMail /></span> info@elitebcar.com</a>
                                <a href='mailto:reservation@elitebcar.com' className=' block col-span-2 flex py-4 px-4   backdrop-blur-sm bg-white/70 gap-2 items-center'><span className='text-2xl'><CgMail /></span> reservation@elitebcar.com</a>
                            </div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109744.05905737827!2d76.68831051322431!3d30.732401984935624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1749801643092!5m2!1sen!2sin" width="100%" height="400" loading="lazy" ></iframe>

                        </div>
                        <div className='p-6 shadow-2xl border border-gray grid grid-cols-2 mt-4 rounded gap-3 bg-white/20'>
                            <h4 className='col-span-2 mb-4'>Follow Us on Social Media:</h4>
                            <div className='bg-white px-3 py-2 bg-white border border-orange rounded '>
                                <p className='flex items-center justify-center gap-4'>Instagram <FaInstagramSquare /></p>
                            </div>
                            <div className='bg-white px-3 py-2 bg-white border border-orange rounded '>
                                <p className='flex items-center justify-center gap-4'>Facebook <FaFacebookF /></p>
                            </div>
                            <div className='bg-white px-3 py-2 bg-white border border-orange rounded '>
                                <p className='flex items-center justify-center gap-4'>Linkedin <FaLinkedinIn /></p>
                            </div>
                            <div className='bg-white px-3 py-2 bg-white border border-orange rounded '>
                                <p className='flex items-center justify-center gap-4'>YouTube <FaYoutube /></p>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-7 md:ps-4 md:mt-0 mt-6'>
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contactform;
