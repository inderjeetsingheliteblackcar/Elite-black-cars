import React, { useState, useRef } from 'react';
import Slider from "react-slick";
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import Button from '@/button/Button';
import Link from 'next/link';

const LuxySlider: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [popupData, setPopupData] = useState<{
        title: string;
        description: string;
        image: string;
    } | null>(null);

    const sliderRef = useRef<Slider>(null);

    const staticSlides = [
        {
            title: 'Top-Tier Passengers',
            description:
                'Our premium travel services are designed for discerning passengers who seek comfort, luxury, and efficiency at every step of their journey. Whether you\'re traveling for business or leisure. We ensure you experience travel at its finest. Experience the difference with services crafted exclusively for top-tier passengers who demand nothing but the best.',
            features: ['Easy-to-Use Driver App', 'Weekly Payouts', '24/7 Support'],
            image: '/images/luxyslider1.webp',
            notpopupbuttontext: 'Reserve Your Elite Experience',
            buttontext: 'Reserve Your Elite Experience',
            class: 'show'
        },
        {
            title: 'Elite B Passengers',
            description:
                'Our Elite Passenger Services are thoughtfully designed for travellers who expect superior comfort, privacy, and personalized attention. At Elite B car, we cater to individuals and groups who value excellence in every journey. Step into a world of refined travel with elite ground transportation services designed to match your unique lifestyle and expectations.',
            features: ['Seamless Travel Management', 'Live Ride Tracking', 'Automated Receipts'],
            image: '/images/luxyslider2.jpg',
            buttontext: 'Book Your Ride',
            classhide: 'hide'
        },
        {
            title: 'Skilled Chauffeurs',
            description:
                'At Elite B Car, our highly trained chauffeurs deliver a seamless, safe, and refined travel experience. Whether you\'re traveling for business, leisure, or a special occasion, our expert drivers ensure you reach your destination with comfort, professionalism, and peace of mind. Our chauffeurs are more than drivers — they are trained professionals committed to delivering an exceptional travel experience every mile of the way.',
            features: ['Executive Class Vehicles', 'Discreet Drivers', 'Real-Time Updates'],
            image: '/images/luxyslider3.jpg',
            buttontext: 'Reserve Your Chauffeured Ride',
            classhide: 'hide'
        },
        {
            title: 'Traveling from New York?',
            description:
                'We\'ve Got You Covered Thinking about a smooth ride to destinations beyond New York City? Elite B Car offers premium travel services to nearby cities, making it easier than ever to enjoy a quick getaway or attend important business meetings just a few hours away. Our comfortable rides, professional chauffeurs, and flexible booking options ensure a seamless journey wherever you need to go.',
            features: ['On-Time Pickup Guarantee', 'Flight Tracking', 'Flexible Scheduling'],
            image: '/images/luxyslider4.jpg',
            buttontext: 'Your Ride, Beyond NYC',
            classhide: 'hide'
        },
    ];

    const openPopup = (title: string, description: string, image: string) => {
        setPopupData({ title, description, image });
    };

    const closePopup = () => {
        setPopupData(null);
    };

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
        <div className="Luxyslider px-4 py-32">
            <div className="container">
                <h2 className="mb-10 text-center text-3xl font-bold">Who can benefit from Elite B Car?</h2>

                {/* Desktop Slider */}
                <div className="hidden lg:flex justify-center space-x-2 scrollbar-hide snap-x snap-mandatory">
                    {staticSlides.map((slide, index) => {
                        const isActive = index === activeIndex;

                        return (
                            <div
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`relative snap-center h-[400px] transition-all duration-500 cursor-pointer flex-shrink-0 rounded-xl overflow-hidden ${isActive ? 'w-full md:w-[68%] bg-orange/10' : 'w-[10%] bg-orange'}`}
                            >
                                <div className="flex flex-col md:flex-row lg:w-[810px] w-[700px] h-full p-6 relative">
                                    {/* Text Content */}
                                    <div className={`transition-opacity duration-700 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'} w-full md:w-2/3`}>
                                        <div className='w-[400px]'>
                                            <h3 className="text-2xl font-semibold">{slide.title}</h3>
                                            <p className="my-4">{slide.description}</p>


                                            <div onClick={() => openPopup(slide.title, slide.description, slide.image)}>
                                                <Button text={slide.buttontext} color={`text-white ${slide.class}`} bg="bg-dark" hoverbg="hover:bg-orange" />
                                            </div>
                                            <Link href="/about">
                                                <Button text={slide.buttontext} id='goAbout' color={`text-white ${slide.classhide}`} bg="bg-dark" hoverbg="hover:bg-orange" />
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Image */}
                                    <div className={`transition-opacity duration-700 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'} w-full md:w-1/3 mt-6 md:mt-0`}>
                                        <img src={slide.image} alt={slide.title} className="h-full w-full object-cover object-left rounded-xl" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Dots */}
                <div className="hidden lg:flex justify-center space-x-2 mt-8">
                    {staticSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`h-2 w-12 rounded-full transition-colors duration-300 ${activeIndex === index ? 'bg-orange' : 'bg-orange/50'}`}
                        ></button>
                    ))}
                </div>

                {/* Mobile Slider */}
                <div className="block lg:hidden">
                    <Slider ref={sliderRef} {...sliderSettings} className="services-slider w-full">
                        {staticSlides.map((slide, index) => (
                            <div key={index} className="px-2">
                                <div className="bg-orange/30 rounded-xl overflow-hidden p-4">
                                    <div className="flex flex-col h-full">
                                        <h3 className="text-2xl font-semibold">{slide.title}</h3>
                                        <p className="my-4">{slide.description}</p>
                                        {slide.features.map((feature, i) => (
                                            <p key={i} className="flex items-center gap-2 mb-2">
                                                <img src="/images/svgviewer.svg" alt="" />
                                                {feature}
                                            </p>
                                        ))}
                                        <div className="mt-auto" onClick={() => openPopup(slide.title, slide.description, slide.image)}>
                                            <Button text={slide.buttontext} color={`text-white ${slide.class}`} bg="bg-dark" hoverbg="hover:bg-orange" />
                                        </div>
                                          <Link href="/about">
                                                <Button text={slide.buttontext} id='goAbout' color={`text-white ${slide.classhide}`} bg="bg-dark" hoverbg="hover:bg-orange" />
                                            </Link>
                                    </div>
                                    <div className="mt-4">
                                        <img src={slide.image} alt={slide.title} className="h-[200px] w-full object-cover rounded-xl" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>

                    <div className="mt-6 relative z-10 services-btn flex">
                        <button
                            className="w-[50px] h-[50px] me-2 border border-gray rounded-full text-white flex items-center justify-center"
                            onClick={() => sliderRef.current?.slickPrev()}
                        >
                            <GoArrowLeft className="text-dark" />
                        </button>
                        <button
                            className="w-[50px] h-[50px] border border-gray rounded-full text-white flex items-center justify-center"
                            onClick={() => sliderRef.current?.slickNext()}
                        >
                            <GoArrowRight className="text-dark" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Popup Modal */}
            {popupData && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="relative bg-white p-8 rounded-lg max-w-[900px] w-full">
                        <button
                            onClick={closePopup}
                            className="absolute top-0 right-2 text-orange hover:text-black leading-none text-[40px]"
                        >
                            ×
                        </button>
                        <div className="grid md:grid-cols-12 gap-6 md:gap-10">
                            <div className="md:col-span-6">
                                <img src={popupData.image} className="rounded-xl object-cover md:h-[400px] h-[250px] w-full" alt={popupData.title} />
                            </div>
                            <div className="md:col-span-6">
                                <h2 className="text-2xl font-semibold mb-4">{popupData.title}</h2>
                                <p className="text-gray-700 mb-4">{popupData.description}</p>
                              <Link href="https://book.mylimobiz.com/v4/eliteblackcar">  <Button text="Book Now" color="text-white" bg="bg-dark" hoverbg="hover:bg-orange" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LuxySlider;
