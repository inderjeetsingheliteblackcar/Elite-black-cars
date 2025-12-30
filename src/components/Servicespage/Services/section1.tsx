import Button from '@/button/Button';
import Link from 'next/link';
import React, { FC } from 'react';
type DataSection = {
    order?: string;
    orderText: string;
    heading: string;
    text: string
    image:string
}
const Section1: FC<DataSection> = ({ order, orderText, heading, text,image }) => {
    return (
        <div>
            <section className='px-4 '>
                <div className="container">
                    <div className='grid gap-10 items-center md:grid-cols-2'>
                        <div className={order}>

                            <h2 >{heading}</h2>
                            <div className='w-32 mt-4 h-1 bg-orange border-rounded'></div>
                            <div className='my-4' dangerouslySetInnerHTML={{ __html: text }}></div>

                            {/* <Link href="https://book.mylimobiz.com/v4/eliteblackcar">   <Button text="Book Now" color="text-white" bg="bg-dark" hoverbg="hover:bg-orange" /></Link> */}

                        </div>
                        <div className={`${orderText} h-full `}>
                            <img src={`/images/services/${image}`} className='rounded-xl h-full object-cover' alt="image" />
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
}

export default Section1;
