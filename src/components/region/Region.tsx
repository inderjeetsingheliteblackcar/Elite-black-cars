"use client"
import Button from "@/button/Button";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";

const Region: React.FC = () => {
    const [scrollDirection, setScrollDirection] = useState<string>("");

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY) {
                setScrollDirection("down");
            } else {
                setScrollDirection("up");
            }
            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="region py-20 px-4">
            <div className="container" data-aos="fade-up" >
                <div className="grid items-center gap-10 grid-cols-1 md:grid-cols-2">
                    <div
                        className={`region-images flex gap-4 transition-transform duration-500 h-[500px] md:h-[700px] `}
                    >
                        <div className="flex-1 w-full overflow-hidden rounded">
                            <img src="/images/region1.png " className={` object-cover rounded transition-transform duration-500 h-full ${scrollDirection === "down" ? "translate-y-5" : "-translate-y-5"
                                }`} alt="d" />
                        </div>
                        <div className="region-image2 flex gap-4 overflow-hidden rounded flex-col flex-1">
                            <img src="/images/region2.png" className={` object-cover rounded transition-transform duration-500 h-full max-h-[50%] ${scrollDirection === "down" ? "translate-y-5" : "-translate-y-5"
                                }`} alt="d" />
                            <img src="/images/region3.png" className={` object-cover rounded transition-transform duration-500 h-full max-h-[50%] ${scrollDirection === "down" ? "translate-y-5" : "-translate-y-5"
                                }`} alt="d" />
                        </div>
                    </div>
                    <div className="region-text md:ps-20">
                        <h2>From the region, for the region </h2>
                        <p className="my-6">
                        At Elite B Car, we take you beyond city limits to explore the rich culture, history, and beauty of New York and neighbouring cities. Whether you’re craving a quick city escape, a scenic countryside drive, or an unforgettable weekend getaway, our tours are crafted to deliver memorable experiences close to home.
                        <br/>We provide premium travel services across New York City and accessible destinations, ensuring luxury, comfort, and reliability for every journey. Whether you need a private chauffeur, long-distance cab, corporate travel, or airport transfer, we cover key locations, including:
                        <br/><br/>
                       <b> New York City | Philadelphia | Boston | Washington D.C. | Baltimore | Albany | Hartford | Syracuse | Pittsburgh | Buffalo | Winchester| Biddeford| Richmond| Fredericksburg| Burlington </b> </p>
                      
                      <Link href="/book-now">   <Button text="Book Now" color="text-white" bg="bg-dark" hoverbg="hover:bg-orange" /></Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Region;
