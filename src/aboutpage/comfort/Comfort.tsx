import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';

const Comfort = () => {
    return (
        <div className='comfort bg-dark text-white md:py-28 py-20 px-4'>
            <div className='container'>
                <div className='grid md:gap-20 gap-10 items-center md:grid-cols-2'>
                    <div className=''>
                        <h2 className='mb-6'>Travel in Style & Comfort with Elite B Car</h2>
                        <p className='body-text mb-6' >hassle-free as possible. Whether you're heading to an important business meeting, a weekend retreat, or an airport transfer, our executive travel solutions ensure you reach your destination in comfort and style. Enjoy stress-free, personalized travel, where your comfort is our priority. Whether for business or leisure, let us make your next journey an experience to remember.</p>
                        <button className="flex items-center gap-2 bg-white text-dark hover:bg-orange ease-in duration-300 rounded py-4 px-8 font-semibold">
                            View All Cities <GoArrowUpRight />
                        </button>
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
