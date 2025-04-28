import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';

const Button = ({ text = 'Book Now', bg = 'bg-orange-500', color = 'text-white', hoverbg ='hover:bg-orange' }) => {
    return (
        <div>
            <button className={`flex mt-6 items-center gap-2 ${bg}  ${color} ${hoverbg}   duration-300 rounded py-3 px-6 font-semibold`}>
                {text} <GoArrowUpRight />
            </button>
        </div>
    );
}

export default Button;
