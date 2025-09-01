'use client';

import React, { useState } from 'react';
import { FaRegUser } from "react-icons/fa";
import { MdOutlinePhone, MdOutlineEmail } from "react-icons/md";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import LottieNoInstall from './Lottie';

const Form = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    email: '',
    phoneNumber: '',
    radioOption: '',
    message: '',
  });

  const [status, setStatus] = useState('');
 const [hideform, sethideform] = useState('hideform');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, radioOption: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Submitting...');

    const res = await fetch('/api/subscribe', {
      method: 'POST',
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus('🎉 Subscribed successfully!');
      sethideform("")
      setFormData({ firstname: '', email: '', phoneNumber: '', radioOption: '', message: '' });
    } else {
      const data = await res.json();
     // setStatus(`❌ Error: ${data.error?.title || 'Submission failed'}`);
       setStatus(`${data.message || 'Submission failed'}`);
    }
  };

  return (
    <div className="p-8 rounded-xl bg-white/20 shadow-2xl backdrop-blur-md border border-gray max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-semibold text-dark mb-8">Let's Start a Conversation</h2>
      <form onSubmit={handleSubmit} className={`grid grid-cols-1 `}>
        <div className='relative mb-6'>
          <label htmlFor="firstname" className="block text-sm font-medium text-dark mb-1">Full Name</label>
          <input
            type="text"
            value={formData.firstname}
            onChange={handleChange}
            name="firstname"
            placeholder="Full Name"
            className="w-full border border-gray bg-white/70 backdrop-blur-sm placeholder:text-gray-500 ps-10 px-4 py-2 rounded-lg focus:outline-none"
          />
          <FaRegUser className='absolute text-orange bottom-[10px] text-[20px] left-3' />
        </div>

        <div className='relative mb-6'>
          <label htmlFor="phone" className="block text-sm font-medium text-dark mb-1">Phone No.</label>
          <PhoneInput
            country={'us'}
            value={formData.phoneNumber}
            onChange={(phone) => setFormData({ ...formData, phoneNumber: phone })}
            inputProps={{
              name: 'phone',
              required: true,
            }}
            inputStyle={{
              width: '100%',
              height: '41px',
              fontSize: '16px',
            }}
          />
        </div>

        <div className='relative mb-6'>
          <label htmlFor="email" className="block text-sm font-medium text-dark mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border border-gray bg-white/70 backdrop-blur-sm ps-10 placeholder:text-gray-500 px-4 py-2 rounded-lg focus:outline-none"
          />
          <MdOutlineEmail className='absolute text-orange bottom-[10px] text-[20px] left-3' />
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-semibold text-dark">Who are you?</label>
          <div className="grid grid-cols-2 gap-4">
            {['HELP WITH RIDE', 'DRIVER PARTNER', 'CORPORATE', 'TRAVEL AGENT'].map((option) => {
              const isSelected = formData.radioOption === option;
              return (
                <label
                  key={option}
                  className={`flex items-center justify-start gap-2 px-4 py-2 border rounded-lg bg-orange cursor-pointer transition-all
                        ${isSelected ? 'bg-orange-500 text-white border-orange-600' : 'bg-white text-dark border-gray-300 hover:bg-gray-100'}
                    `}
                >
                  <input
                    type="radio"
                    name="radioOption"
                    value={option}
                    checked={isSelected}
                    onChange={handleRadioChange}
                    className="appearance-none h-4 w-4 rounded-full border-2 border-gray-400 checked:border-white checked:bg-white "
                  />
                  <span className="text-sm font-medium">{option}</span>
                </label>
              );
            })}
          </div>
        </div>


        <label htmlFor="message" className="block text-sm font-medium text-dark mb-1">Message</label>
        <textarea
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Type your message..."
          rows={2}
          className="w-full border border-gray bg-white/70 mb-6 backdrop-blur-sm placeholder:text-gray-500 px-4 py-2 rounded-lg focus:outline-none"
        ></textarea>

      {/* Consent Checkbox */}
<div className="flex items-start mb-6">
  <input
    type="checkbox"
    id="consent"
    required
    className="mt-1 h-4 w-4 text-orange border-gray-300 rounded focus:ring-orange"
  />
  <label htmlFor="consent" className="ml-2 text-sm text-dark leading-5">
    By checking this box, I consent to receive text messages related to (informative messages) from (Elite B Car). You can reply “STOP” at any time to opt out. Message and data rates may apply. Message frequency may vary. You may receive up to 2 SMS messages per week as per your bookings and your  payment cycle with us.Text HELP for assistance. For more information, please visit our Privacy Policy and SMS Terms and Conditions.{" "}
    <a
      href="/privacy_policy"
      className="hover:underline"
      style={{ color: "#e95440" }}
      target="_blank"
      rel="noopener noreferrer"
    >
      Privacy Policy
    </a>{" "}
    and{" "}
    <a
      href="/terms_conditions"
      className="hover:underline"
      style={{ color: "#e95440" }}
      target="_blank"
      rel="noopener noreferrer"
    >
      SMS Terms and Conditions
    </a>
    .
  </label>
</div>

        <button
          type="submit"
          className="px-6 py-3 bg-orange text-white font-medium rounded-lg hover:bg-dark transition-all duration-300"
        >
          Submit
        </button>
        {status && <p className="mt-4 text-sm text-dark">{status}</p>}
      </form>
      {/* <div className={`${hideform}`}> */}
        <div className={`absolute ${hideform} inset-0 flex rounded-xl items-center flex-col text-center justify-center  bg-white`}>
<LottieNoInstall />
        <p>🎉 Subscribed successfully!</p>
      </div>
    </div>
  );
};

export default Form;
