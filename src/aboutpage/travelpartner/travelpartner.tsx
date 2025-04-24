import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';

const Travelpartner = () => {
    return (
        <div className='travelpartner pt-20 px-4'>
            <div className='container text-center'>
                <div className='max-w-[900px] mx-auto'>
                    <h2 className='mb-6'>Your Trusted Travel Partner</h2>
                    <p className='body-text mb-6' >
                        At Elite B Car, we specialize in high-end, private travel solutions tailored for individuals who value safety, efficiency, and elegance. Whether you're a corporate traveller, leisure explorer, or VIP guest, we ensure a flagship service with our luxury sedans, SUVs, and premium chauffeur-driven cars. With a fleet of premium vehicles, professional chauffeurs, and 24/7 service, we offer a first-class travel experience tailored to your needs. From long-distance private rides to VIP event transportation, our commitment to punctuality, safety, and elegance sets us apart.
                        <br /><br />
                        From New York to destinations up to 300 miles away, our service is known for punctuality, professionalism, and customer satisfaction. With a team of highly trained drivers, well-maintained vehicles, and 24/7 availability, we guarantee that every journey is smooth, reliable, and enjoyable.
                    </p>
                    <button className="flex items-center mx-auto gap-2 bg-dark text-white hover:bg-orange ease-in duration-300 rounded py-4 px-8 font-semibold">
                        View All Cities <GoArrowUpRight />
                    </button>
                </div>
            </div>

        </div>
    );
}

export default Travelpartner;
