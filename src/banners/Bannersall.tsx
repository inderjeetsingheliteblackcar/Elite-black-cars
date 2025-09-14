"use client"
import React, { useEffect, useRef } from 'react';

type BannersallProps = {
  pagename : string,
  bgimage:string

}
const Bannersall: React.FC<BannersallProps> = ({pagename,bgimage}) => {
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
        <div className="bg-dark relative overflow-hidden md:pb-48 pb-28 pt-52 md:pt-80 overflow-hidden">
            <div className="text-white relative z-40 px-4  container">
                <h2>{pagename}</h2>
                <p className="flex mt-4 gap-3 items-center">
                    Home <span className="text-sm">{'>'}</span> {pagename}
                </p>
            </div>

            <div
                ref={bannerRef}
                className="w-[130%]   top-0 right-0 left-0 bottom-0 absolute  bg-no-repeat bg-cover"
                style={{
                    backgroundImage: `url(${bgimage})`,
                    backgroundPosition: '0 center',
                }}
            >
            
            </div>
        </div>
    );
};

export default Bannersall;
