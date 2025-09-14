

import Aboutcontant from "@/aboutpage/aboutcontant/aboutcontant";
import Choose from "@/aboutpage/Choose/Choose";
import Comfort from "@/aboutpage/comfort/Comfort";
import Serve from "@/aboutpage/serve/Serve";
import Travelbetter from "@/aboutpage/travelbetter/Travelbetter";
import Travelpartner from "@/aboutpage/travelpartner/travelpartner";
import Bannersall from "@/banners/Bannersall";
import Faq from "@/components/faq/Faq";
import Maketrip from "@/components/maketrip/Maketrip";
import Showcase from "@/components/showcase/Showcase";
import Works from "@/components/works/Works";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "About Us | Elite B Car",
  description: "Get in touch with Elite B Car for bookings, airport transfers, tours, or corporate travel inquiries.",
  alternates: {
    canonical: "https://www.elitebcar.com/about",
  },
};
export default function About() {
    return (
        <div>
            <Bannersall pagename="About Us" bgimage="/images/aboutusbanner.jpg" />
            <Aboutcontant />
            <Comfort />
            <Travelbetter />
            <Choose />
            <Serve />
            <Showcase />
            {/* <div className="md:pb-[120px] pb-[60px]">
                <Maketrip />
            </div> */}
            {/* <Works /> */}
            <Travelpartner />
            <Faq />

        </div>
    );
}

