import React from 'react';
import "./aboutcontant.css";
import { GoArrowUpRight } from 'react-icons/go';
import Button from '@/button/Button';

const aboutContentData = [
    {
        title: "Luxury Travel Solutions for Comfort & Convenience",
        description: `Welcome to <b>Elite B Car</b>, where we redefine travel with our premium private transportation services. Whether you're looking for a luxury chauffeur service, airport transfer, or executive business travel, we provide the best black car service for a seamless, stress-free, and comfortable journey tailored to your needs.`,
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
                         
                            <Button text="Book Now" color="text-white" bg="bg-dark" hoverbg="hover:bg-orange" />

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Aboutcontant;
