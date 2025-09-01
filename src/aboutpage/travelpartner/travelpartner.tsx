import Button from '@/button/Button';
import Link from 'next/link';
import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';

const Travelpartner = () => {
    return (
        <div className='travelpartner pt-10 md:pt-20  px-4'>
            <div className='container text-center'>
                <div className='max-w-[900px] mx-auto'>
                    <h2 className='mb-6'>Your Trusted Travel Partner</h2>
                    <p className='body-text mb-6' >
                        At Elite B Car, we specialize in high-end, private travel solutions tailored for individuals who value safety, efficiency, and elegance. Whether you're a corporate traveller, leisure explorer, or VIP guest, we ensure a flagship service with our luxury sedans, SUVs, and premium chauffeur-driven cars. With a fleet of premium vehicles, professional chauffeurs, and 24/7 service, we offer a first-class travel experience tailored to your needs. From long-distance private rides to VIP event transportation, our commitment to punctuality, safety, and elegance sets us apart.
                        <br /><br />
                        Our service is known for punctuality, professionalism, and customer satisfaction. With a team of highly trained drivers, well-maintained vehicles, and 24/7 availability, we guarantee that every journey is smooth, reliable, and enjoyable.
                    </p>
                    <div className='text-center flex justify-center'>
                 <Link href="https://book.mylimobiz.com/v4/eliteblackcar">   <Button text="Book Now" color="text-white" bg="bg-dark" hoverbg="hover:bg-orange" /></Link>

                    </div>

                </div>
            </div>

        </div>
    );
}

export default Travelpartner;
