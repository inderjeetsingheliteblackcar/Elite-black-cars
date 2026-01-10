import Bannersall from '@/banners/Bannersall';
import Button from '@/button/Button';
import Section1 from '@/components/Servicespage/Services/section1';
import SectionCards from '@/components/Servicespage/Services/sectionCards';
import Services from '@/components/Servicespage/Services/Services';
import ServicesBanner from '@/components/Servicespage/Services/ServicesBanner';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import {
  MdDirectionsCar,
  MdFlightTakeoff,
  MdLocationCity,
  MdSupportAgent,
  MdAccessTime,
  MdSchedule,
  MdSecurity
} from "react-icons/md";

export const metadata: Metadata = {
  title: "Best Airport Car Service NYC | JFK Airport Chauffeur Service | Elite B Car",
  description: "Book the best airport car service in NYC with Elite B Car. Enjoy smooth JFK airport chauffeur service and reliable luxury transfers across New York.",
  alternates: {
    canonical: "https://www.elitebcar.com/service/airport-transfers",
  },
  keywords: [
    "best airport car service nyc",
    " jfk airport chauffeur service",
  ],
};

const Page = () => {

  const airportTransferData = {
    id: "airport-transfers",
    title: "Airport Transfers",
    description: ` Known for being the <b> best luxury car service</b>  in the region,our airport transfer services are designed in such a way that they provide timely pick-ups and drop-offs from your location, and at your location, which makes travel without any delay. With our <b> best airport transfer service, JFK, </b> you can count onit to handle your airport journeys efficiently. Whether you are arriving at or departing from <b> JFK, LaGuardia, or Newark Airport</b>, our<b>  professional chauffeurs</b>  ensure a smooth, punctual, and stress-free ride. We specialise in providing <b> elite car service in NYC</b>  for travellers who value reliability, safety, and class </br></br>
At <b> Elite B Car, </b> we specialise in providing <b> luxury airport transfer services in New York</b>  that ensure comfort, punctuality, and a premium travel experience. Being the <b> best luxury airport car service in New York, </b>  we ensure every transfer is seamless—from real-time flight updates to professional airport assistance. Our motto is to make your journey a smooth, reliable, and stress-free airport transportation experience. </br></br>
<h4>Reliable Airport Transfers Designed Around Your Schedule</h4>
Flight delays and early-morning departures are no problem for us.  Real-time flight tracking by our team ensures your chauffeur is ready the moment you arrive.With our dependable <b> JFK and LaGuardia airport transfer services</b>, travellers can easily enjoy a complete peace of mind with stress stress-free environment as Elite B Car removes the stress of long queues, all of sudden cancellations, and ride-hailing uncertainties. Available 24/7, we have become the trusted choice for international visitors, business professionals, and families. </br></br>
<h4>Luxury Fleet for a Comfortable Airport Journey</h4>
 Whether you are travelling solo or in a big group, Elite B Car offers a refined collection of<b>  premium black cars, luxury sedans, executive SUVs, </b>  and comfortable vans that suit your style.  All our fleet is fully maintained andsanitised, and possess with modern features that providetop-class comfort.Experience the true meaning of comfort and elegance with our <b> premium airport car service in NYC. </b> From professional chauffeurs to sophisticated interiors, generous luggage space, and a soothing ride environment, it helps you just unwind your travel stress effortlessly.Our chauffeurs are expertly trained, impeccably polite, and well-versed with all New York airport routes. Our priority is to make your airport transfer journey a peaceful one. </br></br>
<h4>Why Choose Elite B Car Airport Transfers? </h4>
•	<b> Best Luxury Car Service in NYC</b>  – Travel in style with our diverse range of premium vehicles.</br>
•	<b> JFK Luxury Car Service</b>  – Proactive JFK airport pickups and drop-offs with real-time flight monitoring to avoid any waiting time.</br>
•	<b> Elite Car Service New York</b>  – Serving all major airports, including JFK, LaGuardia, Newark, and beyond.</br>
•	<b> Professional Chauffeurs</b>  – Proficient and dedicated drivers whose major focus is onclient satisfaction.</br>
•	<b> On-Time Guarantee</b>   – Guaranteed on-time departures.</br>
•	<b> 24/7 Availability</b>  – Reliable 24/7 airport transfer service for seamless airport transfer.</br>
•	<b> Safe & Comfortable Ride</b> – Maintain the highest hygiene standards for your safe and secure journey.</br></br>
Book your <b> Elite airport transfer in NYC</b>  today. With the<b>  Elite B Car</b>, step into the world of unrivalled sophistication and relaxation. </br></br>
   So, whenever you book your next<b>  airport transfer in New York, </b> choose only Elite B Car, and enjoy a journeythat is truly a combination of elegance, comfort, and dependability.
`,

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
    image: "/images/services1-min.jpg"
  };
  const cardsData = [
    {
      icon: MdDirectionsCar,
      title: "Best Luxury Car Service in NYC ",
      description:
        "Only the latest models of Mercedes-Benz S-Class, V-Class, and E-Class vehicles, maintained to showroom standards.",
    },
    {
      icon: MdFlightTakeoff,
      title: "JFK Luxury Car Service ",
      description:
        "Punctual airport pickups and drop-offs with real-time flight tracking.",
    },
    {
      icon: MdLocationCity,
      title: "Elite Car Service New York ",
      description:
        "Experienced, courteous, and multilingual chauffeurs for a smooth ride.",
    },
    {
      icon: MdSupportAgent,
      title: "Professional Chauffeurs ",
      description:
        "Thousands of happy customers trust Elite B Car for airport transfers.",
    },
    {
      icon: MdAccessTime,
      title: "On-Time Guarantee  ",
      description:
        "Thousands of happy customers trust Elite B Car for airport transfers.",
    },
    {
      icon: MdSchedule,
      title: "24/7 Availability ",
      description:
        "Thousands of happy customers trust Elite B Car for airport transfers.",
    },
    {
      icon: MdSecurity,
      title: "Safe & Comfortable Ride",
      description:
        "Thousands of happy customers trust Elite B Car for airport transfers.",
    },
  ];
  return (
    <div className='space-y-20 service-page'>
      <Bannersall pagename='Airport Transfers In New York' bgimage='/images/services/Airportservice4.png' />

      <Section1
        order="order-1"
        orderText="order-2"
        image='Airportservice2.png'
        heading="Airport Transfer Service – Elite B Car"
        text='Travelling to and from the airport must be hassle-free. Known for being the best luxury car service in the region,our airport transfer services are designed in such a way that they provide timely pick-ups and drop-offs from your location, and at your location, which makes travel without any delay. With our best airport transfer service, JFK, you can count onit to handle your airport journeys efficiently. Whether you are arriving at or departing from JFK, LaGuardia, or Newark Airport, our professional chauffeurs ensure a smooth, punctual, and stress-free ride. We specialise in providing elite car service in NYC for travellers who value reliability, safety, and class
        At Elite B Car, we specialise in providing luxury airport transfer services in New York that ensure comfort, punctuality, and a premium travel experience. Being thebest luxury airport car service in New York, we ensure every transfer is seamless—from real-time flight updates to professional airport assistance. Our motto is to make your journey a smooth, reliable, and stress-free airport transportation experience.
 '
      />
      <Section1
        order="md:order-2"
        orderText="md:order-1"
        image='Airportservice3.png'
        heading="Reliable Airport Transfers Designed Around Your Schedule"
        text='Flight delays and early-morning departures are no problem for us.  Real-time flight tracking by our team ensures your chauffeur is ready the moment you arrive.With our dependable JFK and LaGuardia airport transfer services, travellers can easily enjoy a complete peace of mind with stress stress-free environment as Elite B Car removes the stress of long queues, all of sudden cancellations, and ride-hailing uncertainties. Available 24/7, we have become the trusted choice for international visitors, business professionals, and families.  '
      />
      <Section1
        order="order-1"
        orderText="order-2"
        image='Airportservice1.png'
        heading="Luxury Fleet for a Comfortable Airport Journey"
        text='Whether you are travelling solo or in a big group, Elite B Car offers a refined collection of premium black cars, luxury sedans, executive SUVs, and comfortable vans that suit your style.  All our fleet is fully maintained andsanitised, and possess with modern features that providetop-class comfort.Experience the true meaning of comfort and elegance with our premium airport car service in NYC. From professional chauffeurs to sophisticated interiors, generous luggage space, and a soothing ride environment, it helps you just unwind your travel stress effortlessly.Our chauffeurs are expertly trained, impeccably polite, and well-versed with all New York airport routes. Our priority is to make your airport transfer journey a peaceful one. '
      />
      <SectionCards title="Why Choose Elite B Car Airport Transfers?" cards={cardsData} />
      <section className='text-center py-16 px-4 border-t border-black/20 ' >
        <div className="max-w-[800px] mx-auto">
          <p>Book your <b> Elite airport transfer in NYC</b>  today. With the<b>  Elite B Car</b>, step into the world of unrivalled sophistication and relaxation. </p>
          <p>
            So, whenever you book your next<b>  airport transfer in New York, </b> choose only Elite B Car, and enjoy a journeythat is truly a combination of elegance, comfort, and dependability.</p>

        </div>
      </section >
    </div >
  );
}

export default Page;
