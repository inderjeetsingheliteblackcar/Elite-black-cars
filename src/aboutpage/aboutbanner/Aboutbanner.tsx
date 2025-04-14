import React, { useEffect, useRef } from 'react';

const AboutBanner: React.FC = () => {
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
                <h2>About Us</h2>
                <p className="flex mt-4 gap-3 items-center">
                    Home <span className="text-sm">{'>'}</span> About Us
                </p>
            </div>

            <div
                ref={bannerRef}
                className="w-[130%]   top-0 right-0 left-0 bottom-0 absolute  bg-no-repeat bg-cover"
                style={{
                    backgroundImage: "url('/images/banner1-min.png')",
                    backgroundPosition: '0 center',
                }}
            >
            
            </div>
        </div>
    );
};

export default AboutBanner;
