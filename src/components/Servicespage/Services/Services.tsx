"use client";

import React, { useEffect, useRef, useState } from "react";

const Services = () => {
    const [activeSection, setActiveSection] = useState("airport-transfers");

    // Map of section IDs to refs
    const sectionIds = ["airport-transfers", "city-tours", "corporate-travel"];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // ✅ Always allow corporate-travel to activate
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: [0.2, 0.5, 0.8], // multiple thresholds = more accurate
                rootMargin: "0px 0px -5% 0px", // make last section trigger correctly
            }
        );

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);
    const images: Record<string, string> = {
        "airport-transfers": "/images/services1-min.png",
        "city-tours": "/images/services2-min.png",
        "corporate-travel": "/images/services3-min.png",
    };
    return (
        <div className='md:py-40 py-20 relative px-4'>
            <div className='container'>
                <div className='grid  items-start md:grid-cols-2 gap-20' >
                    <div className=''>
                        <div className='airport-transfers' id="airport-transfers" >
                            <h2 className='mb-8'>Airport Transfers</h2>
                            <p>Traveling to and from the airport must be hassle-free. Known for being the best luxury car service in the region,our airport transfer services are designedin such a way that it provide timely pick-ups and drop-offs from your location, and at your location, which makes travel without any delay. With our best airport car service,JFK you can count onit to handle your airport journeys efficiently. With our commitment to excellence, Elite B Car continues to redefine travel standards by blending comfort, luxury, and efficiency
                                <br />  <br />Our best luxury car service in New York is designed to make your airport journeys seamless. From monitoring your flight status to offering airport assistance, we go above and beyond to ensure that your airport transfer experience is hassle-free.
                                <br />  <br />    Why Choose Elite B Cars for Airport Transfers?
                            </p>
                            <ul className='my-4 ps-8'>
                                <li className='list-disc mb-2'> <b>JFK Luxury Car Service</b> – Safe, reliable, and always punctual.</li>
                                <li className='list-disc mb-2'> <b>Elite Car Service NYC</b> with professional chauffeurs.</li>
                                <li className='list-disc mb-2'>Luxury sedans and SUVs for a first-class experience.</li>
                                <li className='list-disc'>Stress-free booking </li>
                            </ul>
                            <p>Choose Elite B Cars for your next <b>airport transfer in New York</b>  and enjoy a blend of elegance, comfort, and dependability.
                            </p>
                            <ul className='my-4'>
                                <li className=' mb-2'> <b>Keywords I have used</b></li>
                                <li className=' mb-2'> <b>Best luxury car service</b></li>
                                <li className=' mb-2'><b>Best airport car service JFK</b></li>
                                <li className=''><b>Best luxury car service New York</b> </li>
                            </ul>
                            <img className="md:hidden block" src="/images/services1-min.png" alt="" />
                        </div>
                        <div className='city-tours  mt-20' id="city-tours"
                        >
                            <h2 className='mb-8'>City Tours </h2>
                            <p className='mb-4'>With our city tour services, you can explore your favourite destinations with Elite B Cars’ luxury city tour service. From the lively streets of New York City to breathtaking drives to Boston, Albany, and the Hamptons, our luxury car service makes sure your journey is unforgettable and worry-free, whether you're a local or a visitor looking for an amazing city tour experience. Our trainedprofessional chauffeurs are there at your service to provide guided comfort, making sightseeing a sophisticated expertise.It doesn’t matter your destination or purpose; for us, what matters is our assurance of a premium travel experience every time you ride with us.</p>
                            <p className='mb-4'>Our best luxury car service in New York is tailored to the needs of travellerswho want to travel in complete comfort and style. With professional chauffeurs and a fleet of high-end vehicles, we ensure your elite car service NYC</p>
                            <p className='mb-4'>City tour is momentous.So just sit back, relax, and cherish the experience of your journey while we handle the driving.</p>
                            <p className='mb-4 '><i> <b>Why Choose Elite B Cars for City Tours?</b></i></p>
                            <ul className='my-4 ps-8' >
                                <li className='list-disc mb-2'> <b>Elite car service New York </b>for premium city sightseeing.</li>
                                <li className='list-disc mb-2'> Chauffeur-driven luxury sedans and SUVs.</li>
                                <li className='list-disc mb-2'>Explore cities like <b> Boston , the Hamptons, Albany, and JFK.</b></li>
                                <li className='list-disc'>Reliable, punctual, and 24/7 available service. </li>
                            </ul>
                            <p className='mb-4 '>With Elite B Cars’ city tours, you don’t just travel—you will get an experience of luxury travel. Book your elite luxury car service NYC today andleave the rest to us to enjoy an exclusive way to explore.</p>
                            <ul className='my-4'>
                                <li className=' mb-2'> <b>Keywords I Have Used</b></li>
                                <li className=' mb-2'> <b>Elite B car Luxury city tour service</b></li>
                                <li className=' mb-2'><b>Trained professional Chauffeur</b></li>
                                <li className=''><b>Elite car service NYC   </b> </li>
                                <li><b>Elite luxury car service NYC</b></li>
                            </ul>
                            <img  className="md:hidden block" src="/images/services2-min.png" alt="" />

                        </div>
                        <div className='corporate-travel mt-20' id="corporate-travel">
                            <h2 className=' mb-8'>Corporate Travel </h2>
                            <p className=' mb-4'>As it is well known that business professionals require reliability, punctuality, and sophistication when it comes to travel. Our Elite car service Newyork and corporate travel service are provided to executives, teams, and clients, offering a seamless travel experience with luxury sedans and SUVs. From important meetings to corporate events, Elite B Car ensures that your professional image is reflected in every ride. All our luxury fleetis equipped with lavish features.Make every business trip seamless with Elite B Cars’ luxury corporate travel service in New York. Our elite car service NYC ensures that executives, business clients, and professionals travel in style and arrive at meetings, events, or conferences on time.</p>
                            <p className='mb-4'>With our best luxury car service in New York, you can rely on professional chauffeurs, premium vehicles, and a service tailored to your business needs. From airport pickups at JFK, LaGuardia, or Newark to city-to-city transfers across Boston, Albany, and the Hamptons, Elite B Cars offers a corporate travel solution that reflects your brand’s prestige.</p>
                            <p className='mb-4'><i>Why Choose Elite B Cars for Corporate Travel?</i></p>
                            <ul className='my-4 ps-8' >
                                <li className='list-disc mb-2'> <b>Elite car service NYC </b> with executive-class vehicles.</li>
                                <li className='list-disc mb-2'>Professional chauffeurs ensure safety and discretion.</li>
                                <li className='list-disc mb-2'>Reliable transfers for meetings, conferences, and events.</li>
                                <li className='list-disc mb-2'>24/7 availability for business clients.</li>
                                <li className='list-disc mb-2'>Luxury sedans and SUVs equipped for comfort and productivity.</li>
                            </ul>
                            <p className=''>At Elite B Cars, we redefine corporate transportation with a perfect blend of elegance and efficiency. Book your corporate luxury car service in New York today and travel like a true professional.</p>
                            <ul className='my-4'>
                                <li className=' mb-2'> <b>Keywords I have used</b></li>
                                <li className=' mb-2'> <b>Corporate luxury car service in New York</b></li>
                                <li className=' mb-2'><b>Elite car service New York</b></li>
                            </ul>
                            <img  className="md:hidden block" src="/images/services3-min.png" alt="" />

                        </div>
                    </div>
                    <div className="sticky top-32 md:block hidden">
                        <img
                            key={activeSection} // forces fade transition on change
                            src={images[activeSection]}
                            alt={activeSection}
                            className="transition-opacity duration-700 ease-in-out opacity-100 rounded-2xl shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
