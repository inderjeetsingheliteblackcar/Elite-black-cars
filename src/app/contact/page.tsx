
import Bannersall from '@/banners/Bannersall';
import Contactform from '@/contactpage/Contactform/Contactform';
import React from 'react';
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Contact | Elite B Car",
  description: "Get in touch with Elite B Car for bookings, airport transfers, tours, or corporate travel inquiries.",
  alternates: {
    canonical: "https://www.elitebcar.com/contact",
  },
};

const Page = () => {

    return (
        <>
          


            <div>
                <Bannersall pagename='Contact Us ' bgimage='/images/aboutusbanner.jpg' />
                <Contactform />
            </div>
        </>
    );
}

export default Page;
