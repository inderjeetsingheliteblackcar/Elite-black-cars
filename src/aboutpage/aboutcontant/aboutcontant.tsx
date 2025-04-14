import React from 'react';
import "./aboutcontant.css";
import { GoArrowUpRight } from 'react-icons/go';

const aboutContentData = [
    {
        title: "Luxury Travel Solutions for Comfort & Convenience",
        description: `Welcome to <b>Elite B Car</b>, where we redefine travel with our <b>premium private transportation services</b>. Whether you're looking for a <b>luxury chauffeur service, airport transfer, and long-distance private car rental, or executive business travel</b>, we provide the best black car service for a seamless, stress-free, and comfortable journey tailored to your needs.`,
        image: "/images/banner1-min.png"
    },
    {
        title: "Your Trusted Travel Partner",
        description: `At <b>  Elite B Car, </b> we specialize in <b>high-end, private travel solutions tailored for individuals </b> who value safety, efficiency, and elegance. Whether you're a corporate traveller, leisure explorer, or VIP guest, we ensure a flagship service with our luxury sedans, SUVs, and premium chauffeur-driven cars. With a fleet of premium vehicles, professional chauffeurs, and 24/7 service, we offer a first-class travel experience tailored to your needs. From long-distance private rides to VIP event transportation, our commitment to punctuality, safety, and elegance sets us apart.
</br></br>
From <b>  New York to destinations up to 300 miles away, </b>  our service is known for punctuality, professionalism, and customer satisfaction. With a team of <b>   highly trained drivers, </b>  well-maintained vehicles, and 24/7 availability, we guarantee that every journey is smooth, reliable, and enjoyable.
`,
        image: "/images/banner1-min.png"
    },
    {
        title: "Travel in Style & Comfort with Elite B Car",
        description: `At <b> Elite B Car, </b> we believe that every journey should be as luxurious and hassle-free as possible. Whether you're heading to an important business meeting, a weekend retreat, or an airport transfer, our executive travel solutions ensure you reach your destination in comfort and style.
Enjoy stress-free, personalized travel, where your comfort is our priority. Whether for business or leisure, let us make your next journey an experience to remember.
`,
        image: "/images/banner1-min.png"
    },
];

const Aboutcontant = () => {
    return (
        <div className='md:pb-20 md:pt-40 pt-20 pb-20 aboutcontant px-4'>
            <div className='container space-y-16'>
                {aboutContentData.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col md:flex-row items-center gap-10 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                    >
                        <div className='md:w-1/2'>
                            <img src={item.image} className='rounded w-full' alt="About content" />
                        </div>
                        <div className='md:w-1/2'>
                            <h2 className='mb-6'>{item.title}</h2>
                            <p className='body-text mb-6' dangerouslySetInnerHTML={{ __html: item.description }} />
                            <button className="flex items-center gap-2 bg-dark text-white hover:bg-orange ease-in duration-300 rounded py-4 px-8 font-semibold">
                                View All Cities <GoArrowUpRight />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Aboutcontant;
