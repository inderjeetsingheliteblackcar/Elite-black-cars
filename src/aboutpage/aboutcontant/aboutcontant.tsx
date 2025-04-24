import React from 'react';
import "./aboutcontant.css";
import { GoArrowUpRight } from 'react-icons/go';

const aboutContentData = [
    {
        title: "Luxury Travel Solutions for Comfort & Convenience",
        description: `Welcome to <b>Elite B Car</b>, where we redefine travel with our <b>premium private transportation services</b>. Whether you're looking for a <b>luxury chauffeur service, airport transfer, and long-distance private car rental, or executive business travel</b>, we provide the best black car service for a seamless, stress-free, and comfortable journey tailored to your needs.`,
        image: "/images/Aboutcontant.png"
    },

   
];

const Aboutcontant = () => {
    return (
        <div className=' md:py-40 py-20  aboutcontant px-4'>
            <div className=' space-y-16'>
                {aboutContentData.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col container md:flex-row items-center gap-10 `}
                    >
                        <div className='md:w-1/2'>
                            <img src={item.image} className='rounded w-full' alt="About content" />
                        </div>
                        <div className='md:w-1/2'>
                            <h2 className='mb-6'>{item.title}</h2>
                            <p className='body-text mb-6' dangerouslySetInnerHTML={{ __html: item.description }} />
                            <button className="flex items-center gap-2 bg-dark text-white hover:bg-orange ease-in duration-300 rounded py-4 px-8 font-semibold">
                                View All Cities <GoArrowUpRight />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Aboutcontant;
