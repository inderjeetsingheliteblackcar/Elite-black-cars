import Conditions from '@/Terms_conditions/Conditions';
import React from 'react';
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Terms Conditions | Elite B Car",
  description: "Get in touch with Elite B Car for bookings, airport transfers, tours, or corporate travel inquiries.",
  alternates: {
    canonical: "https://www.elitebcar.com/terms-conditions",
  },
};
const Terms = () => {

    return (
        <div>
            <Conditions />
        </div>
    );
}

export default Terms;
