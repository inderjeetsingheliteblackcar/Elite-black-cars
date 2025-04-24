import React from 'react';

const Serve = () => {
    const ServeList = [
        {
            image: "/images/serve/Serve1.png",
            text: "New York City"
        },
        {
            image: "/images/serve/Serve2.png",
            text: "New York City"
        },
        {
            image: "/images/serve/Serve3.png",
            text: "New York City"
        },
        {
            image: "/images/serve/Serve4.png",
            text: "New York City"
        },
        {
            image: "/images/serve/Serve5.png",
            text: "New York City"
        },
        {
            image: "/images/serve/Serve6.png",
            text: "New York City"
        },

        {
            image: "/images/serve/Serve8.png",
            text: "New York City"
        },
        {
            image: "/images/serve/Serve9.png",
            text: "New York City"
        },
        {
            image: "/images/serve/Serve10.png",
            text: "New York City"
        },
        {
            image: "/images/serve/Serve11.png",
            text: "New York City"
        },

    ]
    return (
        <div className='Serve py-10 md:py-20 px-4'>
            <div className='container text-center'>
                <h2>Right We Serve</h2>
                <p className='mt-4 mb-6 body-text max-w-[700px] mx-auto'>We offer premium private travel services with in New York City and upto 300 miles beyong, covering locations such as:</p>
                <div className='flex gap-4 flex-wrap justify-center items-center'>
                    {ServeList.map((Servedata,index) => (
                        <div key={index} className='flex gap-2 bg-orange/10 items-center pr-4 p-2   rounded-full'>
                            <img src={Servedata.image} alt="" />
                            <p className='body-text semibold'>{Servedata.text}</p>
                        </div>
                    ))}

                </div>
            </div>

        </div>
    );
}

export default Serve;
