"use client";
import React, { useRef, useState } from "react";
import { GoArrowRight, GoArrowLeft, GoArrowUpRight } from "react-icons/go";
import Slider from "react-slick";
import { FiArrowUpRight } from "react-icons/fi";
import ServicesCard from "./ServicesCard";
import "./Services.css";
import Button from "@/button/Button";
import servicesDatamain from './servicesData.json';
import Link from "next/link";


// const servicesData = [
//     {
//         id: 1,
//         title: "Airport Transfers",
//         description: "One of the joys of intercity travel is the opportunity to witness the beauty of...",
//         image: "/images/services1-min.png",
//         popupdescription :"At Elite B Car, we believe that luxury travel should be more than just a ride—an experience. That's why we've embraced innovative technology to ensure your black car journey is as smooth, efficient, and luxurious as possible."
//     },
//     {
//         id: 2,
//         title: "City Tours",
//         description: "Experience the beauty and culture of your city like never before...",
//         image: "/images/services2-min.png",
//         popupdescription :"Discover the best city tours with Elite B car! Whether you're planning a quick weekend getaway or a full-day adventure, our curated city tours cover top destinations.Enjoy comfortable transportation, expert guides, flexible timings, and affordable pricing."

//     },
//     {
//         id: 3,
//         title: "Corporate Travel",
//         description: "Business trips made easy with our seamless and comfortable services...",
//         image: "/images/services3-min.png",
//         popupdescription :"Experience executive-class travel with our luxury fleet, ensuring punctual, comfortable, and professional rides for business meetings, conferences, and corporate events."

//     },
// ];

const Services = () => {
    const sliderRef = useRef<Slider>(null);
    const [popupData, setPopupData] = useState<{ title: string; popupdescription: string, image: string } | null>(null);

    const openPopup = (title: string, popupdescription: string, image: string) => {
        setPopupData({ title, popupdescription, image });
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
        <>
            <div className="services relative overflow-hidden py-14 px-4">
                <div className="container">
                    <div data-aos="fade-up" className="flex relative z-10 mb-10 justify-between">
                        <h2>Our Services</h2>
                    </div>

                    <div className="slider-over">
                        <div className="start"></div>
                        <div className="center"></div>
                        <div className="end"></div>
                    </div>

                    <div className="md:grid-cols-3 grid gap-y-6" data-aos="fade-up">
                        {servicesDatamain.map((service) => (
                            <div key={service.id} className="px-2">
                                <ServicesCard
                                    title={service.title}
                                    description={service.description}
                                    image={service.image}
                                    onClick={() => openPopup(service.title, service.popupdescription, service.image)}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Popup */}

                </div>
            </div>
            {popupData && (
                <div className="fixed inset-0 bg-black p-4 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="relative bg-white p-8 rounded-lg max-w-[900px] w-full">
                        <button
                            onClick={closePopup}
                            className="absolute top-0 right-2 text-orange hover:text-black leading-none	 text-[40px]"
                        >
                            ×
                        </button>
                        <div className="grid md:gap-10 gap-6 md:grid-cols-12">
                            <div className="md:col-span-6">
                            <img src={popupData.image} className="rounded-xl" alt="" />
                            </div>
                            <div className="md:col-span-6 ">
                                <h2 className="text-2xl font-semibold mb-4">{popupData.title}</h2>
                                <div dangerouslySetInnerHTML={{ __html: popupData.popupdescription }} className="text-gray-700 mb-10"></div>

                      <Link href="https://book.mylimobiz.com/v4/(S(3hk1vayurwuluomiaun0a0w1))/eliteblackcar">  <Button text="Book Now" color="text-white" bg="bg-dark" hoverbg="hover:bg-orange" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Services;
