"use client"
import Button from '@/button/Button';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';

type BannersallProps = {
    pagename: string,
    text: string,
    bgimage: string

}
const ServicesBanner: React.FC<BannersallProps> = ({ pagename, bgimage, text }) => {
    const bannerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollX = window.scrollY * 0.3; // Adjust speed here
            if (bannerRef.current) {
                bannerRef.current.style.backgroundPosition = `${-scrollX}px center`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="bg-dark relative overflow-hidden px-4 flex items-end pb-28 pt-40 justify-center md:h-screen overflow-hidden">
            <div className="text-white relative text-center z-40 px-4  container">
                <h2 className='max-w-[800px] mx-auto'>{pagename}</h2>
                <p className=" mt-4 max-w-[1000px] mx-auto gap-3 " dangerouslySetInnerHTML={{ __html: text }}>

                </p>
                <Link href="https://book.mylimobiz.com/v4/eliteblackcar" className='inline-block'>
                    <Button text="Book Now" color="text-white" bg="bg-dark" hoverbg="hover:bg-orange" />
                </Link>

            </div>

            <div
                ref={bannerRef}
                className="w-[130%] brightness-[50%]  top-0 right-0 left-0 bottom-0 absolute  bg-no-repeat bg-cover"
                style={{
                    backgroundImage: `url(${bgimage})`,
                    backgroundPosition: '0 center',
                }}
            >

            </div>
        </div>
    );
};

export default ServicesBanner;
