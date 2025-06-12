import React, { useState } from 'react';

const Form = () => {
    const [formdata, setformdata] = useState({ name: "", lName: "", email: "", phone: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setformdata({ ...formdata, [e.target.name]: e.target.value });

    };
    const SubmitForm = (e: React.FormEvent) => {
        e.preventDefault();
        const dataToSend = { Name: formdata.name, lastName: formdata.lName, Email: formdata.email, Phone: formdata.phone }
        console.log(dataToSend)
    }
    return (
        <div className="p-8 rounded-xl bg-white/30 shadow-2xl backdrop-blur-md border border-gray max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-center text-dark mb-8">Let's Start a Conversation</h2>
            <form onSubmit={SubmitForm} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="firstname" className="block text-sm font-medium text-dark mb-1">First Name</label>
                    <input
                        type="text"
                        value={formdata.name}
                        onChange={handleChange}
                        name="name"
                        placeholder="First Name"
                        className="w-full border border-gray bg-white/70 backdrop-blur-sm placeholder:text-gray-500 px-4 py-2 rounded-lg focus:outline-none "
                    />
                </div>
                <div>
                    <label htmlFor="lastname" className="block text-sm font-medium text-dark mb-1">Last Name</label>
                    <input
                        type="text"
                        name="lName"
                        value={formdata.lName}
                        onChange={handleChange}
                        placeholder="Last Name"
                        className="w-full border border-gray bg-white/70 backdrop-blur-sm placeholder:text-gray-500 px-4 py-2 rounded-lg focus:outline-none "
                    />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-dark mb-1">Phone No.</label>
                    <input
                        type="tel"
                        value={formdata.phone}
                        onChange={handleChange}
                        name="phone"
                        placeholder="Phone No."
                        className="w-full border border-gray bg-white/70 backdrop-blur-sm placeholder:text-gray-500 px-4 py-2 rounded-lg focus:outline-none "
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formdata.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="w-full border border-gray bg-white/70 backdrop-blur-sm placeholder:text-gray-500 px-4 py-2 rounded-lg focus:outline-none "
                    />
                </div>
                <div className="md:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-dark mb-1">Message</label>
                    <textarea
                        name="message"
                        id="message"
                        placeholder="Type your message..."
                        rows={5}
                        className="w-full border border-gray bg-white/70 backdrop-blur-sm placeholder:text-gray-500 px-4 py-2 rounded-lg focus:outline-none "
                    ></textarea>
                </div>
                <div className="md:col-span-2 flex ">
                    <button
                        type="submit"
                        className="px-6 py-3 bg-orange text-white font-medium rounded-lg hover:bg-dark transition-all duration-300"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
