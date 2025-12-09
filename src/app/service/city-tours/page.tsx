import Services from '@/components/Servicespage/Services/Services';
import { Metadata } from 'next';
import React from 'react';
 export const metadata: Metadata = {
  title: "Elite B Car | Rental Car Service Albany & Hamptons Car Service",
  description: "Explore New York, Albany, and the Hamptons with Elite B Car. Choose our rental car service in Albany or luxury Hamptons car service for comfortable city tours.",
  alternates: {
    canonical: "https://www.elitebcar.com/service/city-tours",
  },
    keywords: [
    "rental car service albany",
    "hamptons car service",
  ],
};
const Page = () => {
    const airportTransferData = {
        id: "City-Tours",
        title: "City Tours",
        description: `With our city tour services, you can explore your favourite destinations with Elite B Cars’ luxury city tour service. From the lively streets of New York City to breathtaking drives to Boston, Albany, and the Hamptons, our luxury car service makes sure your journey is unforgettable and worry-free, whether you're a local or a visitor looking for an amazing city tour experience. Our trainedprofessional chauffeurs are there at your service to provide guided comfort, making sightseeing a sophisticated expertise.It doesn’t matter your destination or purpose; for us, what matters is our assurance of a premium travel experience every time you ride with us.,Our best luxury car service in New York is tailored to the needs of travellerswho want to travel in complete comfort and style. With professional chauffeurs and a fleet of high-end vehicles, we ensure your elite car service NYC,City tour is momentous.So just sit back, relax, and cherish the experience of your journey while we handle the driving.,Why Choose Elite B Cars for City Tours?
`,
        points: [
            "<b>Elite car service New York</b> for premium city sightseeing.",
            "<b>Chauffeur-driven luxury sedans and SUVs.",
            "Explore cities like <b> Boston , the Hamptons, Albany, and JFK.</b>",
            "Reliable, punctual, and 24/7 available service."
        ],
        keywords: [
            "Elite B car Luxury city tour service",
            "Trained professional Chauffeur",
            "Elite car service NYC",
            "Elite luxury car service NYC"
        ],
        image: "/images/services2-min.png"
    };
    return (
        <div>
            <Services {...airportTransferData} />
        </div>
    );
}

export default Page;
