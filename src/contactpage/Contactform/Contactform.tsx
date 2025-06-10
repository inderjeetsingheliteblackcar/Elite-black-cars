import React from 'react';
import Form from '../Form';
import { FaPhoneAlt } from 'react-icons/fa';
import { CgMail } from 'react-icons/cg';

const Contactform = () => {
    return (
        <div className='md:py-20 py-12 px-4'>
            <div className='container'>
                <div className='grid md:grid-cols-2 gap-10 md:gap-32'>
                    <div className=''>
                        <h2 className='mb-4'>Contact</h2>
                        <p>We believe that luxury and safety are closely correlated to each other. That’s why we prioritize top-tier safety standards</p>
                    <h4 className='mt-10 mb-4'>Contact info:</h4>
                    <a   className='mb-3 block flex gap-2 text-dark items-center'><span className='text-lg'><FaPhoneAlt /></span>8668351313</a>
                                               <a  href='mailto:info@elitebcar.com' className='mb-3 block flex gap-2 items-center'><span className='text-2xl'><CgMail /></span> info@elitebcar.com</a>
                                               <a href='mailto:reservation@elitebcar.com'  className='mb-3 block flex gap-2 items-center'><span className='text-2xl'><CgMail /></span> reservation@elitebcar.com</a>
                   
                    </div>
                    <div className=''>
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contactform;
