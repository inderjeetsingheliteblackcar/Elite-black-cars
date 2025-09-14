import Policy from '@/Privacy_policy/Policy';
import React from 'react';
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Privacy Policy | Elite B Car",
  description: "Get in touch with Elite B Car for bookings, airport transfers, tours, or corporate travel inquiries.",
  alternates: {
    canonical: "https://www.elitebcar.com/privacy-policy",
  },
};
const privacy_policy = () => {
    return (
        <div>
            <Policy />
        </div>
    );
}

export default privacy_policy;
