"use client";

import React, { useRef, useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import Slider from "react-slick";
import './banner.css';
import Bookingform from "./Bookingform";
import Button from "@/button/Button";
import Link from "next/link";

interface BannerProps {
    backgroundImage: string;
    title: string;
    subtitle: string;
}

const TopBanner: React.FC<BannerProps & { isActive: boolean }> = ({
    backgroundImage,
    title,
    subtitle,
    isActive,
}) => (
    <div>
        <div
            className="banner relative px-4 pb-[60px] flex align-center pb-0 bg-cover bg-center h-[500px]  xl:h-[100vh] lg:h-[110vh] md:h-[100vh]  pt-[250px] md:pt-[250px] bg-cover"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="container relative z-10 text-white">
                <p className="mb-2 font-[18px] font-semibold">{subtitle}</p>
                <h1
                    className={`max-w-[500px] ${isActive ? "animate-slide-in" : "opacity-0"
                        } transition-all duration-700`}
                >
                    {title}
                </h1>
                {/* <div className="flex gap-4">
                    <Button text="Book Now" color="text-white hover:text-dark" bg="bg-orange" hoverbg="hover:bg-white" />
                    <Link href="/contact" >  <Button text="Contact Us" color="text-dark hover:text-white" bg="bg-white" hoverbg="hover:bg-orange" />
                    </Link>
                </div> */}
            </div>
        </div>
    </div>
);

const Banner: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef<Slider>(null);
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        pauseOnFocus: false,

        beforeChange: (oldIndex: number, newIndex: number) => {
            setCurrentSlide(newIndex);
        },
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const banners = [
        {
            backgroundImage: "/images/slider2.jpg",
            title: "Where you would you like to go?",
            subtitle: "Your professional chauffeur services",
        },
        {
            backgroundImage: "/images/banner-min.jpg",
            title: "Your journey our priority",
            subtitle: "Travel in Style & Comfort",
        },
        {
            backgroundImage: "/images/slider-3.jpg",
            title: "Experience the Difference",
            subtitle: "Reliable Chauffeur Services",
        },
    ];

    return (
        <div className="overflow-hidden  relative">

            <Slider ref={sliderRef} {...settings}>
                {banners.map((banner, index) => (
                    <TopBanner
                        key={index}
                        backgroundImage={banner.backgroundImage}
                        title={banner.title}
                        subtitle={banner.subtitle}
                        isActive={currentSlide === index}
                    />
                ))}
            </Slider>


            {/* <div className="absolute container px-4 md:px-0  pt-[180px] md:pt-[170px]  top-1 left-0 right-0 flex items-center  gap-4">
                <div className="btns-slider flex">
                    <button
                        className="w-[40px] h-[40px] me-2 rounded-full text-white flex items-center justify-center rounded shadow "
                        onClick={() => sliderRef.current?.slickPrev()}
                    >
                        <GoArrowLeft />
                    </button>
                    <button
                        className=" w-[40px] h-[40px] rounded-full text-white flex items-center justify-center rounded shadow "
                        onClick={() => sliderRef.current?.slickNext()}
                    >
                        <GoArrowRight />
                    </button>
                </div>
                <p className="text-white block">
                    <strong>{currentSlide + 1} </strong> / {banners.length}
                </p>
            </div> */}
            <div className="absolute container  w-[50%] px-4   pt-[150px] md:pt-[170px]  top-[250px] left-0 right-0 flex items-center  gap-4">
                <div className="flex gap-4">
                  <Link href="/book-now">  <Button text="Book Now" color="text-white hover:text-dark" bg="bg-orange" hoverbg="hover:bg-white" /> </Link>
                    <Link href="/contact" >  <Button text="Contact Us" color="text-dark hover:text-white" bg="bg-white" hoverbg="hover:bg-orange" />
                    </Link>
                </div>
                {/* <div className=" md:absolute  md:px-0 px-4  banner-form  bottom-10 top-[-130px]  right-4 ">
                    <Bookingform />
                </div> */}
            </div>

        </div>

    );
};

export default Banner;
