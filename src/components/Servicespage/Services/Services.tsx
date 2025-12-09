"use client";

import React, { ReactNode } from "react";

interface ServiceProps {
  id: string;
  title: string;
  description: string;
  // points: string[];
  keywords: string[];
  image: string;
}

const Service: React.FC<ServiceProps> = ({ id, title, description, image }) => {
  return (
     <div className="container px-4">
    <div className="grid items-start md:grid-cols-2 gap-20 pt" id={id}>
     
      {/* Left side (Text) */}
      <div className="pt-40 pb-10">
        <h2 className="mb-8">{title}</h2>
{/* 
        {description.map((para, i) => (
          <p key={i} className="mb-4">{para}</p>
        ))} */}
        <div className="service-content" dangerouslySetInnerHTML={{ __html: description }} />
        {/* <ul className="my-4 ps-8">
          {points.map((point, i) => (
            <li key={i} className="list-disc mb-2" dangerouslySetInnerHTML={{ __html: point }} />
          ))}
        </ul> */}

        {/* <ul className="my-4">
    
          {keywords.map((word, i) => (
            <li key={i} className="mb-2"><b>{word}</b></li>
          ))}
        </ul> */}

        <img loading="lazy" className="md:hidden block" src={image} alt={title} />
      </div>

      {/* Right side (Image sticky) */}
      <div className="sticky top-0 w-[50vw] md:block hidden">
        <img loading="lazy" src={image} className="h-screen w-[50vw]" alt={title} />
      </div>
    </div>
    </div>
  );
};

export default Service;
