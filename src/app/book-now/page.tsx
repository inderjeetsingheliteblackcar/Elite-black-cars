'use client';

import React, { useEffect } from 'react';

const Page = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://book.mylimobiz.com/v4/widgets/widget-loader.js';
        script.type = 'text/javascript';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className='py-20 pt-36 px-4'>
            <a
                href="https://book.mylimobiz.com/v4/eliteblackcar"
                data-ores-widget="website"
                data-ores-alias="eliteblackcar"
            >
                Online Reservations
            </a>
        </div>
    );
};

export default Page;
