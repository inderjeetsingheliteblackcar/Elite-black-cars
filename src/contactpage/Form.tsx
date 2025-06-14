import React, { useState } from 'react';
import { FaRegUser } from "react-icons/fa";
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";

const Form = () => {
    const [formdata, setformdata] = useState({ name: "", lName: "", email: "", phone: "", radio: "Option 1" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setformdata({ ...formdata, [e.target.name]: e.target.value });

    };
    const SubmitForm = (e: React.FormEvent) => {
        e.preventDefault();
        const dataToSend = { Name: formdata.name, lastName: formdata.lName, Email: formdata.email, Phone: formdata.phone, SelectedOption: formdata.radio, }
        console.log(dataToSend)
    }
    return (
        <div className="p-8 rounded-xl bg-white/20 shadow-2xl  backdrop-blur-md border border-gray max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold  text-dark mb-8">Let's Start a Conversation</h2>
            <form onSubmit={SubmitForm} className="grid grid-cols-1 ">
                <div className='relative mb-6'>
                    <label htmlFor="firstname" className="block text-sm font-medium text-dark mb-1">First Name</label>
                    <input
                        type="text"
                        value={formdata.name}
                        onChange={handleChange}
                        name="name"
                        placeholder="First Name"
                        className="w-full border border-gray bg-white/70  backdrop-blur-sm placeholder:text-gray-500 ps-10 px-4 py-2 rounded-lg focus:outline-none "
                    /><FaRegUser className='absolute text-orange bottom-[10px] text-[20px] left-3' />

                </div>
                <div className='relative mb-6'>


                    <label htmlFor="phone" className="block text-sm font-medium text-dark mb-1">Phone No.</label>
                    <input
                        type="tel"
                        value={formdata.phone}
                        onChange={handleChange}
                        name="phone"
                        placeholder="Phone No."
                        className="w-full border border-gray bg-white/70  ps-10 backdrop-blur-sm placeholder:text-gray-500 px-4 py-2 rounded-lg focus:outline-none "
                    />
                    <MdOutlinePhone className='absolute text-orange bottom-[10px] text-[20px] left-3' />

                </div>
                <div className='relative mb-6'>
                    <label htmlFor="email" className="block text-sm font-medium text-dark mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formdata.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="w-full border border-gray bg-white/70  backdrop-blur-sm ps-10 placeholder:text-gray-500 px-4 py-2 rounded-lg focus:outline-none "
                    />
                    <MdOutlineEmail className='absolute text-orange bottom-[10px] text-[20px] left-3' />

                </div>
                <div className="checkboxs grid grid-cols-2 gap-4 mb-6">
                    <div className={`cursor-pointer px-4 py-2 flex items-center rounded-md text-sm font-medium 
        ${formdata.radio === 'Option 1' ? 'bg-orange text-white' : 'bg-gray-200 text-black'}`}>
                        <input
                            id="option1"
                            type="radio"
                            name="radioGroup"
                            value="Option 1"
                            checked={formdata.radio === 'Option 1'}
                            onChange={(e) => setformdata({ ...formdata, radio: e.target.value })}
                            className="me-2  accent-white"
                        />
                        <label htmlFor="option1"> HELP WITH RIDE</label>
                    </div>
                    <div className={`cursor-pointer flex items-center  px-4 py-2 rounded-md text-sm font-medium 
        ${formdata.radio === 'Option 2' ? 'bg-orange text-white' : 'bg-gray-200 text-black'}`}>
                        <input
                            id="option2"
                            type="radio"
                            name="radioGroup"
                            value="Option 2"
                            checked={formdata.radio === 'Option 2'}
                            onChange={(e) => setformdata({ ...formdata, radio: e.target.value })}
                            className="me-2  accent-white"
                        />
                        <label htmlFor="option2"  > DRIVER PARTNER</label>
                    </div>
                    <div className={`cursor-pointer flex items-center  px-4 py-2 rounded-md text-sm font-medium 
        ${formdata.radio === 'Option 3' ? 'bg-orange text-white' : 'bg-gray-200 text-black'}`}>
                        <input
                            id="option3"
                            type="radio"
                            name="radioGroup"
                            value="Option 3"
                            checked={formdata.radio === 'Option 3'}
                            onChange={(e) => setformdata({ ...formdata, radio: e.target.value })}
                            className="me-2 accent-white"
                        />
                        <label htmlFor="option3"  > CORPORATE</label>
                    </div>
                    <div className={`cursor-pointer flex items-center  px-4 py-2 rounded-md text-sm font-medium 
        ${formdata.radio === 'Option 4' ? 'bg-orange text-white' : 'bg-gray-200 text-black'}`}>
                        <input
                            id="option4"
                            type="radio"
                            name="radioGroup"
                            value="Option 4"
                            checked={formdata.radio === 'Option 4'}
                            onChange={(e) => setformdata({ ...formdata, radio: e.target.value })}
                            className="me-2  accent-white"
                        />
                        <label htmlFor="option4"  >TRAVEL AGENT</label>
                    </div>
                </div>
                <label htmlFor="message" className="block text-sm font-medium text-dark mb-1">Message</label>
                <textarea
                    name="message"
                    id="message"
                    placeholder="Type your message..."
                    rows={2}
                    className="w-full border border-gray bg-white/70 mb-6 backdrop-blur-sm placeholder:text-gray-500 px-4 py-2 rounded-lg focus:outline-none "
                ></textarea>

                <button
                    type="submit"
                    className="px-6 py-3 bg-orange text-white font-medium rounded-lg hover:bg-dark transition-all duration-300"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Form;
