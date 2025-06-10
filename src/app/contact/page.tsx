"use client"
import Bannersall from '@/banners/Bannersall';
import Contactform from '@/contactpage/Contactform/Contactform';
import React from 'react';

const Page = () => {
    return (
        <div>
            <Bannersall pagename='Contact Us ' bgimage='/images/aboutusbanner.jpg' />
            <Contactform />
        </div>
    );
}

export default Page;
