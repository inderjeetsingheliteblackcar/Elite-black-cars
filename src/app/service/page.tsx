import Bannersall from '@/banners/Bannersall';
import Services from '@/components/services/Services';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Service ",
    description: "Get in touch with Elite B Car for bookings, airport transfers, tours, or corporate travel inquiries.",
    alternates: {
        canonical: "https://www.elitebcar.com/service/",
    },
};
const Page = () => {
    return (
        <div>
            <Bannersall pagename='Services ' bgimage='/images/aboutusbanner.jpg' />
            <Services />

        </div>
    );
}

export default Page;
