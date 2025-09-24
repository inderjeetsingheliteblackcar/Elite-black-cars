import Services from '@/components/Servicespage/Services/Services';
import { Metadata } from 'next';
import React from 'react';

 export const metadata: Metadata = {
  title: "Service | Airport-Transfers",
  description: "Get in touch with Elite B Car for bookings, airport transfers, tours, or corporate travel inquiries.",
  alternates: {
    canonical: "https://www.elitebcar.com/service/Airport-Transfers",
  },
};

const Page = () => {
 
     const airportTransferData = {
    id: "airport-transfers",
    title: "Airport Transfers",
    description: [
      "Traveling to and from the airport must be hassle-free. Known for being the best luxury car service in the region,our airport transfer services are designedin such a way that it provide timely pick-ups and drop-offs from your location, and at your location, which makes travel without any delay. With our best airport car service,JFK you can count onit to handle your airport journeys efficiently. With our commitment to excellence, Elite B Car continues to redefine travel standards by blending comfort, luxury, and efficiency",
      "Our best luxury car service in New York is designed to make your airport journeys seamless. From monitoring your flight status to offering airport assistance, we go above and beyond to ensure that your airport transfer experience is hassle-free.",
      "Why Choose Elite B Cars for Airport Transfers?"
    ],
    points: [
      "<b>JFK Luxury Car Service</b> – Safe, reliable, and always punctual.",
      "<b>Elite Car Service NYC</b> with professional chauffeurs.",
      "Luxury sedans and SUVs for a first-class experience.",
      "Stress-free booking"
    ],
    keywords: [
      "Best luxury car service",
      "Best airport car service JFK",
      "Best luxury car service New York"
    ],
    image: "/images/services1-min.png"
  };
    return (
        <div>
                <Services {...airportTransferData}  />
        </div>
    );
}

export default Page;
