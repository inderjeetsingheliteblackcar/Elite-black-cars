import React, { useEffect } from 'react';
import { CiMail, CiCalendarDate } from "react-icons/ci";
import { HiArrowUturnRight } from "react-icons/hi2";

import './banner.css'
const Bookingform = () => {
    useEffect(() => {
        // Dynamically load the script only on client-side
        const script = document.createElement("script");
        script.src = "https://book.mylimobiz.com/v4/widgets/widget-loader.js";
        script.type = "text/javascript";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);
    return (
        <div className=' Bookingform bg-white w-full md:w-[500px] ms-auto rounded-[30px] px-4  py-7'>
           
            <div className=''>
                <a
                    href="https://book.mylimobiz.com/v4/eliteblackcar"
                    data-ores-widget="quickres"
                    data-ores-alias="eliteblackcar"
                    data-redirect-url="https://book.mylimobiz.com/v4/(S(3hk1vayurwuluomiaun0a0w1))/eliteblackcar"
                >
                    Online Reservations
                </a>
            </div>
        </div>
    );
}

export default Bookingform;
