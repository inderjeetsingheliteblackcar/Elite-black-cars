"use client"

import Aboutbanner from "@/aboutpage/aboutbanner/Aboutbanner";
import Aboutcontant from "@/aboutpage/aboutcontant/aboutcontant";
import Faq from "@/components/faq/Faq";
import Maketrip from "@/components/maketrip/Maketrip";
import Showcase from "@/components/showcase/Showcase";
import Works from "@/components/works/Works";

export default function About() {
    return (
        <div>
            <Aboutbanner />
            <Aboutcontant />
            <Showcase />
            <div className="md:pb-[120px] pb-[60px]">
                <Maketrip />
            </div>
            <Works />
            <Faq />

        </div>
    );
}

