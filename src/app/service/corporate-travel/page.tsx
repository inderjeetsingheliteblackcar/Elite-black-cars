import Button from '@/button/Button';
import Section1 from '@/components/Servicespage/Services/section1';
import Services from '@/components/Servicespage/Services/Services';
import ServicesBanner from '@/components/Servicespage/Services/ServicesBanner';
import { Metadata } from 'next';
import Link from 'next/link';
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
        description: `It is an opportunity for travellers to create new business relationships and foster new business growth ideas.The way you arrive indicates the tone for your business meeting when you travel with comfort and class. Elite B Car provides top-tier <b> corporate black car luxury services</b> for its clients whose priority is reliability, discretion, and exceptional convenience while travelling.Whether you are heading towards airport transfers, client meetings, or business conferences, we provide<b>  reliable chauffeur-driven vehicles </b>that match your corporate standards. You have an option toconvert your travel hours into productive hours with our expert chauffeurs and a top-class amenities fleet.For all your corporate travel needs, whether it is your key meeting or your big events, Elite B car is there for you toenhance your professional image.We specialise in delivering exceptional corporate travel solutions across New York and beyond, as our main purpose is toensure our executives and business travellers receive a consistently smooth, comfortable, and trustworthy experience.<br /><br />
<b> From luxury sedans to spacious SUVs, each vehicle is equipped with comfortable seating, Wi-Fi connectivity, and a soothing travel experience. </b>Every ride with Elite B Car is designed to impress, providing your team and guests with a premium, well-managed travel experience from pickup to drop-off. <br /><br />


<h4>Why Choose Elite for Corporate Travel? </h4>
Elite provides an <b> executive-grade travel</b> with <b> premium chauffeur-driven vehicles</b> to make your journey smooth for an uninterrupted travel experience. <br /><br />
<h4>Our Luxury Services Include: </h4>
•	<b> Executive black car services. </b></br>
•	Reliable On-time pick-up and drop-off with live tracking facility.</br>
•	<b> Premium airport chauffeur service</b></br>
•	Safeguarding VIPs and delegates' travel through enhanced security protocols.</br>
•	All cars have Wi Fi with charging ports & a<b> premium in-cabin experience. </b></br>
•	<b> Private Executive car Service in New York and beyond. </b></br>
•	Streamlined travel plans for meetings, conferences & corporate events</br>
•	Round-the-clock support for all your travel needs. <br /><br />

<h4>Perfect for Corporate Needs</h4>
•	Business Meetings or conferences.</br>
•	Airport Transfers</br>
•	Corporate Events</br>
•	Employee & Delegation Travel</br>
•	VIP & Executive Travel<br /><br />

<h4>Luxury Fleet for Corporate Travel</h4>
Elite offers a<b>  premium fleet of well-maintained, high-performance vehicles, </b> including:</br></br>
•	Executive Sedans</br>
•	Luxury SUVs</br>
•	Business Vans</br>
•	Premium Limousines</br>
•	Elite Class Chauffeur Cars<br /><br />
Our amenity-rich fleet gives you a comfortable and quiet environment for a productive journey with peace of mind. <br /><br />
<h4>Benefits of Choosing Elite</h4>
•  Vetted professional chauffeurs who are committed to your privacy.</br>
• Transparent business pricing options available.</br>
•  Ensuring a pristine environment with high standards of hygiene and a welcoming space.</br>
• Flexible booking options that match your business needs.</br>
• Everytouch point resonates with your brand identity and image. <br /><br />

<h4>Experience a Higher Standard of Business Travel</h4>
We specialise in curating travel experiences that should meet the exacting standards of our distinguished clients. Our motto is to provide more than just transportation. We create a luxurious travel environment for your utmost comfort, seamless workflow, and uncompromising privacy.
Choose Elite for an Executive travel experience, which is defined by punctuality, dignity and absolute comfort. So next time, whenever you want to book a corporate ride, choose only Elite B car <b> corporate traveller services for luxury travel.</b>

`,
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
        image: "/images/services3-min.jpg"
    };
    return (
        <div>
            <ServicesBanner pagename='Corporate Travel' bgimage='/images/aboutusbanner.jpg'
                text='It is an opportunity for travellers to create new business relationships and foster new business growth ideas.The way you arrive indicates the tone for your business meeting when you travel with comfort and class. Elite B Car provides top-tier <b> corporate black car luxury services</b> for its clients whose priority is reliability, discretion, and exceptional convenience while travelling.Whether you are heading towards airport transfers, client meetings, or business conferences, we provide<b>  reliable chauffeur-driven vehicles </b>that match your corporate standards. You have an option toconvert your travel hours into productive hours with our expert chauffeurs and a top-class amenities fleet.For all your corporate travel needs, whether it is your key meeting or your big events, Elite B car is there for you toenhance your professional image.We specialise in delivering exceptional corporate travel solutions across New York and beyond, as our main purpose is toensure our executives and business travellers receive a consistently smooth, comfortable, and trustworthy experience.<br />
                <b> From luxury sedans to spacious SUVs, each vehicle is equipped with comfortable seating, Wi-Fi connectivity, and a soothing travel experience. </b>Every ride with Elite B Car is designed to impress, providing your team and guests with a premium, well-managed travel experience from pickup to drop-off. 
'
            />
            {/* <Services {...airportTransferData} /> */}
            <section className='text-center py-16 px-4 border-t border-black/20 ' >
                <div className="max-w-[600px] mx-auto">
                    <h2>Why Choose Elite for Corporate Travel?</h2>
                    <p className='mt-4'>Elite provides an <b> executive-grade travel</b> with <b> premium chauffeur-driven vehicles</b> to make your journey smooth for an uninterrupted travel experience.</p>
                </div>
            </section >
            <div className='space-y-20 pb-20'>
                <Section1
                    order="order-1"
                    orderText="order-2"
                    heading="Our Luxury Services Include:"
                    text="•	<b> Executive black car services. </b></br>
                •	Reliable On-time pick-up and drop-off with live tracking facility.</br>
                •	<b> Premium airport chauffeur service</b></br>
                •	Safeguarding VIPs and delegates' travel through enhanced security protocols.</br>
                •	All cars have Wi Fi with charging ports & a<b> premium in-cabin experience. </b></br>
                •	<b> Private Executive car Service in New York and beyond. </b></br>
                •	Streamlined travel plans for meetings, conferences & corporate events</br>
                •	Round-the-clock support for all your travel needs. "
                />
                <Section1
                    order="order-2"
                    orderText="order-1"
                    heading="Perfect for Corporate Needs"
                    text="  •	Business Meetings or conferences.</br>
                        •	Airport Transfers</br>
                        •	Corporate Events</br>
                        •	Employee & Delegation Travel</br>
                        •	VIP & Executive Travel<br /><br /> "
                />
                <Section1
                    order="order-1"
                    orderText="order-2"
                    heading="Luxury Fleet for Corporate Travel"
                    text=" Elite offers a<b>  premium fleet of well-maintained, high-performance vehicles, </b> including:</br></br>
                •	Executive Sedans</br>
                •	Luxury SUVs</br>
                •	Business Vans</br>
                •	Premium Limousines</br>
                •	Elite Class Chauffeur Cars<br /><br />
                Our amenity-rich fleet gives you a comfortable and quiet environment for a productive journey with peace of mind. "
                />
                <Section1
                    order="order-2"
                    orderText="order-1"
                    heading="Benefits of Choosing Elite"
                    text=" •  Vetted professional chauffeurs who are committed to your privacy.</br>
                        • Transparent business pricing options available.</br>
                        •  Ensuring a pristine environment with high standards of hygiene and a welcoming space.</br>
                        • Flexible booking options that match your business needs.</br>
                        • Everytouch point resonates with your brand identity and image.  "
                />
            </div>
            <section className='text-center py-16 px-4 border-t border-black/20 ' >
                <div className="max-w-[800px] mx-auto">
                    <h2>Experience a Higher Standard of Business Travel</h2>
                    <p>We specialise in curating travel experiences that should meet the exacting standards of our distinguished clients. Our motto is to provide more than just transportation. We create a luxurious travel environment for your utmost comfort, seamless workflow, and uncompromising privacy. Choose Elite for an Executive travel experience, which is defined by punctuality, dignity and absolute comfort. So next time, whenever you want to book a corporate ride, choose only Elite B car <b> corporate traveller services for luxury travel.</b></p>
                    <Link href="https://book.mylimobiz.com/v4/eliteblackcar" className='inline-block'>   <Button text="Book Now" color="text-white" bg="bg-dark" hoverbg="hover:bg-orange" /></Link>

                </div>
                
            </section >
        </div >

    );
}

export default Page;
