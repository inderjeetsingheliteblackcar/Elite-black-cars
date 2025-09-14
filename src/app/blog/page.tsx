"use client";
import Blogs from '@/components/blogs/blogs';
import React from 'react';
import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Blogs | Elite B Car",
    description: "Get in touch with Elite B Car for bookings, airport transfers, tours, or corporate travel inquiries.",
    alternates: {
        canonical: "https://www.elitebcar.com/blog",
    },
};
const Page = () => {
    return (
        <div className='py-20 '>
            <Blogs />
        </div>
    );
}

export default Page;
