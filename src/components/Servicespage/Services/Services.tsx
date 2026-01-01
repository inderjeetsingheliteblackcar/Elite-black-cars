// "use client";

// import React, { ReactNode } from "react";

// interface ServiceProps {
//   id: string;
//   title: string;
//   description: string;
//   keywords: string[];
//   image: string;
// }


// const Service: React.FC<ServiceProps> = ({ id, title, description, image }) => {
//   return (
//     <div className="container px-4">
//       <div className="grid items-start md:grid-cols-2 gap-20 pt" id={id}>

//         <div className="pt-40 pb-10">
//           <h2 className="mb-8">{title}</h2>

//           <div className="service-content" dangerouslySetInnerHTML={{ __html: description }} />

//           <img loading="lazy" className="md:hidden block" src={image} alt={title} />
//         </div>

//         <div className="sticky top-0 w-[50vw] md:block hidden">
//           <img loading="lazy" src={image} className="h-screen w-[50vw]" alt={title} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Service;

"use client";

import React from "react";
import Image from "next/image";

interface ServiceProps {
  id: string;
  title: string;
  description: string; // HTML string
  image: string;
}

const Service: React.FC<ServiceProps> = ({ id, title, description, image }) => {
  return (
    <div className="container px-4">
      <div
        id={id}
        className="grid items-start gap-20 md:grid-cols-2"
      >
        {/* Content */}
        <div className="pt-40 pb-10">
          <h2 className="mb-8">{title}</h2>

          <div
            className="service-content"
            dangerouslySetInnerHTML={{ __html: description }}
          />

          {/* Mobile Image */}
          <div className="md:hidden mt-10">
            <Image
              src={image}
              alt={title}
              width={800}
              height={600}
              className="w-full h-auto"
              priority={false}
            />
          </div>
        </div>

        {/* Desktop Sticky Image */}
        <div className="hidden md:block sticky top-0 h-screen w-[50vw]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Service;

