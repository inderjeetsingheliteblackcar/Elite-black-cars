import MaketripBox from '@/components/maketrip/MaketripBox';
import React from 'react';
import { FaCommentDollar, FaCar } from "react-icons/fa";
import { IoShieldCheckmarkSharp } from "react-icons/io5";



const Travelbetter = () => {
    const Travelbetterboxdata = [
        {
            id: 1,
            icon: IoShieldCheckmarkSharp,
            title: "Luxury Chauffeur Services",
            description:
                "Experience tranquillity with our executive chauffeur-driven rides. Whether it's a business meeting, corporate event, or special occasion, our professional drivers ensure a VIP experience. ",
        },
        {
            id: 2,
            icon: FaCommentDollar,
            title: "Airport Transfers",
            description:
                "– Hassle-Free Pickups & Drop-offs Say goodbye to airport travel stress with our on-time, relaxed, and reliable airport transfer service, ensuring a smooth pickup and drop-off experience.",
        },
        {
            id: 3,
            icon: FaCar,
            title: "Long-Distance Private Car Rentals",
            description:
                "Need to travel beyond New York? Our High-end Car rental providescomfort, privacy, and flexibility for trips up to 300 miles away, including destinations like Boston, Philadelphia, Washington D.C., and more.",
        },
        {
            id: 4,
            icon: FaCar,
            title: "Corporate & Business Travel Solutions",
            description:
                "We cater to corporate executives, business professionals, and VIPs who require luxury transportation for meetings, events, and conferences. Our discreet, professional, and punctual services ensure you arrive on time and in style.",
        },
        {
            id: 5,
            icon: FaCar,
            title: "Special Occasion",
            description:
                "Whether it’s a wedding, birthday, prom night, or a VIP event, our top-notch transportation solutionsoffer a luxury car for events for the perfect blend of elegance and convenience.",
        },
        {
            id: 6,
            icon: FaCar,
            title: "High-End Private Transfers",
            description:
                "With Elite B car, Experience exclusive, hassle-free travel with our private luxury car services to match your needs.",
        },
    ];
    return (
        <div className='Travelbetter py-20 md:py-40 relative px-4'>
            <div className='container'>
                <h2 className="text-center mb-8 md:mb-20">Discover the joy of premium travel with us</h2>
                <div className='md:grid-cols-3 gap-x-8 gap-y-10 grid'>
                    {Travelbetterboxdata.map((item) => (
                        <MaketripBox
                            key={item.id}
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Travelbetter;
