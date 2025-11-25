import Services from '@/components/Servicespage/Services/Services';
import { Metadata } from 'next';
import React from 'react';
export const metadata: Metadata = {
    title: "Corporate Luxury Car Service in New York | Professional Chauffeurs | Elite B Car",
    description: "Experience corporate luxury car service in New York with Elite B Car. Travel in style with trained professional chauffeurs who ensure comfort and reliability.",
    alternates: {
        canonical: "https://www.elitebcar.com/service/corporate-travel",
    },
     keywords: [
    "corporate luxury car service",
    "trained professional chauffeur",
  ],
};
const Page = () => {
    const airportTransferData = {
        id: "City-Tours",
        title: "Corporate Travel",
        description: [
            "As it is well known that business professionals require reliability, punctuality, and sophistication when it comes to travel. Our Elite car service Newyork and corporate travel service are provided to executives, teams, and clients, offering a seamless travel experience with luxury sedans and SUVs. From important meetings to corporate events, Elite B Car ensures that your professional image is reflected in every ride. All our luxury fleetis equipped with lavish features.Make every business trip seamless with Elite B Cars’ luxury corporate travel service in New York. Our elite car service NYC ensures that executives, business clients, and professionals travel in style and arrive at meetings, events, or conferences on time.",
            "With our best luxury car service in New York, you can rely on professional chauffeurs, premium vehicles, and a service tailored to your business needs. From airport pickups at JFK, LaGuardia, or Newark to city-to-city transfers across Boston, Albany, and the Hamptons, Elite B Cars offers a corporate travel solution that reflects your brand’s prestige.",
            "Why Choose Elite B Cars for City Tours?"
        ],
        points: [
            "<b>Elite car service NYC <b/> with executive-class vehicles.",
            " Professional chauffeurs ensure safety and discretion.",
            "Reliable transfers for meetings, conferences, and events.",
            "24/7 availability for business clients.",
            "Luxury sedans and SUVs equipped for comfort and productivity."
        ],
        keywords: [
            "Corporate luxury car service in New York",
            "Trained professional ChauffeurElite car service New York",

        ],
        image: "/images/services3-min.png"
    };
    return (
        <div>
            <Services {...airportTransferData} />
        </div>
    );
}

export default Page;
