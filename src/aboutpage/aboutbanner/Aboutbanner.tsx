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
        <div className="bg-dark overflow-hidden pt-40 md:pt-48 overflow-hidden">
            <div className="text-white px-4 md:pb-40 pb-20 container">
                <h2>About Us</h2>
                <p className="flex mt-4 gap-3 items-center">
                    Home <span className="text-sm">{'>'}</span> About Us
                </p>
            </div>

            <div
                ref={bannerRef}
                className="w-[130%] md:h-[600px] h-[300px] bg-no-repeat bg-cover"
                style={{
                    backgroundImage: "url('/images/banner1-min.png')",
                    backgroundPosition: '0 center',
                }}
            />
        </div>
    );
};

export default AboutBanner;
