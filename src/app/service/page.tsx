"use client"

import Bannersall from '@/banners/Bannersall';
import Services from '@/components/services/Services';
import React from 'react';

const Page = () => {
    return (
        <div>
            <Bannersall pagename='Services ' bgimage='/images/aboutusbanner.jpg' />
            <Services />
            
        </div>
    );
}

export default Page;
