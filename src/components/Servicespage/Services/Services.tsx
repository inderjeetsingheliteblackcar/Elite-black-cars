"use client";

import React, { ReactNode } from "react";

interface ServiceProps {
  id: string;
  title: string;
  description: string;
  keywords: string[];
  image: string;
}

const Service: React.FC<ServiceProps> = ({ id, title, description, image }) => {
  return (
    <div className="container px-4">
      <div className="grid items-start md:grid-cols-2 gap-20 pt" id={id}>

        <div className="pt-40 pb-10">
          <h2 className="mb-8">{title}</h2>

          <div className="service-content" dangerouslySetInnerHTML={{ __html: description }} />

          <img loading="lazy" className="md:hidden block" src={image} alt={title} />
        </div>

        <div className="sticky top-0 w-[50vw] md:block hidden">
          <img loading="lazy" src={image} className="h-screen w-[50vw]" alt={title} />
        </div>
      </div>
    </div>
  );
};

export default Service;
