import Bannersall from '@/banners/Bannersall';
import Button from '@/button/Button';
import Section1 from '@/components/Servicespage/Services/section1';
import Services from '@/components/Servicespage/Services/Services';
import ServicesBanner from '@/components/Servicespage/Services/ServicesBanner';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

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
  return (
    <div className='space-y-20'>
      <ServicesBanner pagename='Airport Transfers' bgimage='/images/aboutusbanner.jpg'
        text='Known for being the <b> best luxury car service</b>  in the region,our airport
         transfer services are designed in such a way that they provide timely pick-ups and 
         drop-offs from your location, and at your location, which makes travel without any 
         delay. With our <b> best airport transfer service, JFK, </b> you can count onit to 
         handle your airport journeys efficiently. Whether you are arriving at or departing
          from <b> JFK, LaGuardia, or Newark Airport</b>, our<b>  professional chauffeurs</b>  
          ensure a smooth, punctual, and stress-free ride. We specialise in providing <b>
           elite car service in NYC</b>  for travellers who value reliability, safety, and class
              At <b> Elite B Car, </b> we specialise in providing <b> luxury airport transfer 
              services in New York</b>  that ensure comfort, punctuality, and a premium travel
               experience. Being the <b> best luxury airport car service in New York, </b>  
               we ensure every transfer is seamless—from real-time flight updates to professional
                airport assistance. Our motto is to make your journey a smooth, reliable, 
                and stress-free airport transportation experience.'
      />
      {/* <Services {...airportTransferData} /> */}

      <Section1
        order="order-1"
        orderText="order-2"
        heading="Reliable Airport Transfers Designed Around Your Schedule"
        text='Flight delays and early-morning departures are no problem for us. 
         Real-time flight tracking by our team ensures your chauffeur is ready 
         the moment you arrive.With our dependable <b> JFK and LaGuardia airport 
         transfer services</b>, travellers can easily enjoy a complete peace of 
         mind with stress stress-free environment as Elite B Car removes the 
         stress of long queues, all of sudden cancellations, and ride-hailing 
         uncertainties. Available 24/7, we have become the trusted choice for 
         international visitors, business professionals, and families.  '
      />
      <Section1
        order="md:order-2"
        orderText="md:order-1"
        heading="Luxury Fleet for a Comfortable Airport Journey"
        text='Whether you are travelling solo or in a big group, Elite B Car offers a refined collection of premium black cars, luxury sedans, executive SUVs, and comfortable vans that suit your style. All our fleet is fully maintained andsanitised, and possess with modern features that providetop-class comfort.Experience the true meaning of comfort and elegance with our premium airport car service in NYC. From professional chauffeurs to sophisticated interiors, generous luggage space, and a soothing ride environment, it helps you just unwind your travel stress effortlessly.Our chauffeurs are expertly trained, impeccably polite, and well-versed with all New York airport routes. Our priority is to make your airport transfer journey a peaceful one.  '
      />
      <Section1
        order="order-1"
        orderText="order-2"
        heading="Why Choose Elite B Car Airport Transfers?"
        text='•	<b> Best Luxury Car Service in NYC</b>  – Travel in style with our diverse range of premium vehicles.</br>
        •	<b> JFK Luxury Car Service</b>  – Proactive JFK airport pickups and drop-offs with real-time flight monitoring to avoid any waiting time.</br>
        •	<b> Elite Car Service New York</b>  – Serving all major airports, including JFK, LaGuardia, Newark, and beyond.</br>
        •	<b> Professional Chauffeurs</b>  – Proficient and dedicated drivers whose major focus is onclient satisfaction.</br>
        •	<b> On-Time Guarantee</b>   – Guaranteed on-time departures.</br>
        •	<b> 24/7 Availability</b>  – Reliable 24/7 airport transfer service for seamless airport transfer.</br>
        •	<b> Safe & Comfortable Ride</b> – Maintain the highest hygiene standards for your safe and secure journey.  '
      />
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
