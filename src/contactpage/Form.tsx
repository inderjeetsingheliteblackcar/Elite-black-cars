import React from 'react';

const Form = () => {
    return (
        <div className='md:grid p-6 rounded bg-orange/20 md:grid-cols-2 gap-4'>
            <div className='mb-4 md:mb-0'>
                <label htmlFor="firstname" className="mb-2">First Name</label>
                <input type='text' className='border w-full  bg-transparent placeholder:text-dark/50  px-4 py-2 rounded ' placeholder='First Name' name="name" />
            </div>
            <div className='mb-4 md:mb-0'>
                <label htmlFor="firstname" className="mb-2">Last Name</label>
                <input type='text' name="l-name" className='border w-full  bg-transparent placeholder:text-dark/50  px-4 py-2 rounded ' placeholder='Last Name' />
            </div>
            <div className='mb-4 md:mb-0'>
                <label htmlFor="firstname" className="mb-2">Phone No.</label>
                <input type='nombar' name='phone' placeholder='Phone No.' className='border w-full placeholder:text-dark/50  bg-transparent  px-4 py-2 rounded ' />
            </div>
            <div className='mb-4 md:mb-0'>
                <label htmlFor="firstname" className="mb-2">Email</label>
                <input type='email' name="email" placeholder='Email' className='border w-full  bg-transparent placeholder:text-dark/50  px-4 py-2 rounded ' />
            </div>
            <div className='col-span-2 mb-4 md:mb-0'>
                <label htmlFor="firstname" className="mb-2">Massage</label>
                <textarea name="" className='border px-4 bg-transparent  py-2 rounded w-full placeholder:text-dark/50 ' placeholder='Type...' id=""></textarea>
            </div>
            <button className='button rounded bg-orange text-white hover:bg-dark' type='submit'>Submit</button>
        </div>
    );
}

export default Form;
