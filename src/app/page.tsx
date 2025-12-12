"use client"
import Banner from "@/components/banner/Banner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Fleet from "@/components/fleet/Fleet";
import Works from "@/components/works/Works";
import Maketrip from "@/components/maketrip/Maketrip";
import Showcase from "@/components/showcase/Showcase";
import Services from "@/components/services/Services";
import Region from "@/components/region/Region";
import Faq from "@/components/faq/Faq";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Toproutes from "@/components/toproutesf/Toproutes";
import Luxyslider from "@/components/luxyslider/luxyslider";
import Blogs from "@/components/blogs/blogs";
export default function Home() {

  
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])
  return (
    <>
      <Banner />
      <Fleet />
      <Works />
      <Maketrip />
      <Showcase />
      <Services />
      <Region />
      <Faq />
      <Toproutes />
      <Blogs limit={3}/>
      <Luxyslider />
    </>
  );
}
