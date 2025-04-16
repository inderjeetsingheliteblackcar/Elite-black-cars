import React, { useState, useRef } from 'react';
import { GoArrowLeft, GoArrowRight, GoArrowUpRight } from 'react-icons/go';
import Slider from "react-slick";
const LuxySlider: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const staticSlides = [
        {
            title: 'Professional Drivers',
            description:
                'Make LUXY your trusted partner for getting you rides, turning singles into doubles, live dispatching, and 24/7 support...',
            features: ['Easy-to-Use Driver App', 'Weekly Payouts', '24/7 Support'],
            image: '/images/corporate_partners.jpg',
        },
        {
            title: 'Corporate Travelers',
            description:
                'LUXY is your go-to travel management solution for ground transportation. Streamline ride booking with the LUXY Concierge Dashboard...',
            features: ['Seamless Travel Management', 'Live Ride Tracking', 'Automated Receipts'],
            image: '/images/corporate_partners.jpg',
        },
        {
            title: 'Business Executives',
            description:
                'Experience top-tier ground transportation service tailored for executive needs with LUXY.',
            features: ['Executive Class Vehicles', 'Discreet Drivers', 'Real-Time Updates'],
            image: '/images/corporate_partners.jpg',
        },
        {
            title: 'Frequent Flyers',
            description:
                'Whether for business or leisure, LUXY simplifies airport transfers with unmatched reliability.',
            features: ['On-Time Pickup Guarantee', 'Flight Tracking', 'Flexible Scheduling'],
            image: '/images/corporate_partners.jpg',
        },
    ];
    const sliderRef = useRef<Slider>(null);
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <div className="Luxyslider px-4 py-10">
            <div className="container">
                <h2 className="mb-10 text-center text-3xl font-bold">Who is LUXY Ride for?</h2>

                <div className=" justify-center  lg:flex hidden space-x-2 scrollbar-hide snap-x snap-mandatory">
                    {staticSlides.map((slide, index) => {
                        const isActive = index === activeIndex;

                        return (
                            <div
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`relative snap-center h-[400px] transition-all duration-1000 cursor-pointer flex-shrink-0 rounded-xl overflow-hidden ${isActive ? 'w-full md:w-[60%] bg-orange/30' : 'w-[10%] bg-orange/50'
                                    }`}
                            >
                                <div className="flex flex-col md:flex-row h-full p-6 relative">
                                    {/* Text Content */}
                                    <div
                                        className={`transition-opacity duration-700 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none absolute'
                                            } w-full md:w-2/3`}
                                    >
                                        <h3 className="text-2xl font-semibold">{slide.title}</h3>
                                        <p className="my-4 w-[400px]">{slide.description}</p>

                                        {slide.features.map((feature, i) => (
                                            <p key={i} className="flex items-center gap-2 mb-2">
                                                <img src="/images/svgviewer.svg" alt="" />
                                                {feature}
                                            </p>
                                        ))}

                                        <button className="flex mt-6 items-center gap-2 bg-dark text-white hover:bg-orange duration-300 rounded py-3 px-6 font-semibold">
                                            View All Cities <GoArrowUpRight />
                                        </button>
                                    </div>

                                    {/* Image Section */}
                                    <div
                                        className={`transition-opacity duration-700 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none absolute'
                                            } w-full md:w-1/3 mt-6 md:mt-0`}
                                    >
                                        <img
                                            src={slide.image}
                                            alt={slide.title}
                                            className="h-full w-full object-cover rounded-xl"
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className=" lg:flex hidden justify-center space-x-2 mt-8">
                    {staticSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`h-2 w-12 rounded-full transition-colors duration-300 ${activeIndex === index ? 'bg-orange' : 'bg-orange/50'
                                }`}
                        ></button>
                    ))}
                </div>
                <div className='lg:hidden block'>
                    
                    <Slider ref={sliderRef} {...sliderSettings} className="services-slider w-full">
                        {staticSlides.map((slide, index) => (
                            <div className='px-2'>
                            <div
                                key={index}
                                className=" bg-orange/30 rounded-xl overflow-hidden p-4"
                            >
                                <div className="flex flex-col h-full">
                                    <h3 className="text-2xl font-semibold">{slide.title}</h3>
                                    <p className="my-4">{slide.description}</p>

                                    {slide.features.map((feature, i) => (
                                        <p key={i} className="flex items-center gap-2 mb-2">
                                            <img src="/images/svgviewer.svg" alt="" />
                                            {feature}
                                        </p>
                                    ))}

                                    <div className="mt-auto">
                                        <button className="flex mt-6 items-center gap-2 bg-dark text-white hover:bg-orange duration-300 rounded py-3 px-6 font-semibold">
                                            View All Cities <GoArrowUpRight />
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className="h-[200px] w-full object-cover rounded-xl"
                                    />
                                </div>
                            </div>
                            </div>
                        ))}
                    </Slider>
                    <div className="mt-6 relative z-10 services-btn flex">
                    <button
                        className="w-[50px] h-[50px] me-2 border border-gray rounded-full text-white flex items-center justify-center   "
                        onClick={() => sliderRef.current?.slickPrev()}
                    >
                        <GoArrowLeft className="text-dark" />
                    </button>
                    <button
                        className=" w-[50px] h-[50px] rounded-full hover:orange text-white border border-gray flex items-center justify-center rounded  "
                        onClick={() => sliderRef.current?.slickNext()}
                    >
                        <GoArrowRight className="text-dark" />
                    </button>
                </div> 
                    </div>
                </div>
            </div>
        
    );
};

export default LuxySlider;
