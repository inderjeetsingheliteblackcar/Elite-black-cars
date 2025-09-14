import React from 'react';

const Serve = () => {
    const ServeList = [
        { image: "/images/serve/Serve1.png", text: "New York City" },
        { image: "/images/serve/Serve2.png", text: "Boston" },
        { image: "/images/serve/Serve3.png", text: "Philadelphia" },
        { image: "/images/serve/Serve4.png", text: "Washington D.C." },
        { image: "/images/serve/Serve5.png", text: "Baltimore" },
        { image: "/images/serve/Serve6.png", text: "Albany" },
        { image: "/images/serve/Serve8.png", text: "Hartford" },
        { image: "/images/serve/Serve9.png", text: "Syracuse" },
        { image: "/images/serve/Serve10.png", text: "Pittsburgh" },
        { image: "/images/serve/Serve11.png", text: "Buffalo" },
    ];

    return (
        <div className='Serve py-10 md:py-20 px-4'>
            <div className='container text-center'>
                <h2>Regions We Serve</h2>
                <p className='mt-4 mb-6 body-text max-w-[700px] mx-auto'>
                    We offer premium private travel services within New York City and well-connected locations, covering locations such as:
                </p>

                <div className='flex gap-4 flex-wrap justify-center items-center'>
                    {ServeList.map((Servedata, index) => (
                        <div key={index} className='flex gap-2 bg-orange/10 items-center pr-4 p-2 rounded-full'>
                            <img loading="lazy" src={Servedata.image} alt={Servedata.text} />
                            <p className='body-text font-semibold'>{Servedata.text}</p>
                        </div>
                    ))}
                </div>

                {/* Correctly structured paragraph with separate <p> and <strong> where needed */}
                <div className='body-text text-center mt-10 md:mt-20 space-y-4'>
                    <p>Wherever you need to go, we ensure a safe, stylish, and hassle-free journey.</p>
                    <p><strong>Book Your Luxury Travel Experience Today!</strong></p>
                    <p>
                        At <strong>Elite B Car</strong>, we offer exceptional private travel solutions focusing on comfort, elegance, and efficiency.
                        Whether you're traveling for business, leisure, or a special event, we promise a premium, hassle-free, and luxurious ride from start to finish.
                    </p>
                    <p>
                        <strong>🚖 Ready to experience the best in private transportation?</strong> Contact us today to <strong>book your ride</strong> and travel in unmatched style and comfort!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Serve;
