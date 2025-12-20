"use client";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import ServicesCard from "./ServicesCard";
import "./Services.css";

const servicedatamain = [
    
    {
        "id": 1,
        "title": "Airport Transfers",
        "url":"/airport-transfers",
        "description": "Travelling to and from the airport must be hassle-free...",
        "image": "/images/services1-min.jpg"
    },
    {
        "id": 2,
        "title": "City Tours",
           "url":"/city-tours",
        "description": "Experience the beauty and culture of your city like never before...",
        "image": "/images/services2-min.jpg" },
    {
        "id": 3,
        "title": "Corporate Travel",
           "url":"/corporate-travel",
        "description": "At Elite B Car, we understand that business travel is not merely a trip...",
        "image": "/images/services3-min.jpg"}

    ]

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
                        {servicedatamain.map((service) => (
                            <div key={service.id} className="px-2">
                                <ServicesCard
                                    title={service.title}
                                    description={service.description}
                                    image={service.image}
                                    url={service.url}
                                />
                            </div>
                        ))}
                    </div>

             

                </div>
            </div>
          
        </>
    );
};

export default Services;
