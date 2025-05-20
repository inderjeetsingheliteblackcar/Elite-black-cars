import Button from '@/button/Button';
import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';

const Comfort = () => {
    return (
        <div className='comfort bg-dark text-white md:py-28 py-20 px-4'>
            <div className='container'>
                <div className='grid md:gap-20 gap-10 items-center md:grid-cols-2'>
                    <div className=''>
                        <h2 className='mb-6'>Travel in Style & Comfort with Elite B Car</h2>
                        <p className='body-text mb-6' >At Elite B Car, we believe that every journey should be as luxurious and hassle-free as possible. Whether you're heading to an important business meeting, a weekend retreat, or an airport transfer, our executive travel solutions ensure you reach your destination in comfort and style.</p>
                     <p className='body-text mb-6'>Enjoy stress-free, personalized travel, where your comfort is our priority. Whether for business or leisure, let us make your next journey an experience to remember.</p>
                        <Button text="Book Now" color="text-dark" bg="bg-white" hoverbg="hover:bg-orange" />

                    </div>
                    <div className=''>
                        <img src="/images/aboutusservice.jpg" className='rounded w-full' alt="About content" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comfort;
