import React from 'react';

const Travelbetter = () => {
    return (
        <div className='Travelbetter py-20 md:py-40 relative px-4'>
            <div className='container'>
                <div className='grid gap-10 md:grid-cols-2'>
                    <img src="/images/banner1-min.png" className='rounded md:sticky top-40 w-full' alt="About content" />
                    <div className=''>
                        <h2>How do we make travel better?</h2>
                        <h4 className="my-4">Luxury Chauffeur Services</h4>
                        <p className='body-text'>
                            Experience tranquillity with our<b>  executive chauffeur-driven rides.</b> Whether it's a business meeting, corporate event, or special occasion, our professional drivers ensure a VIP experience.
                        </p>
                        <h4 className="my-4">Airport Transfers – Hassle-Free Pickups & Drop-offs</h4>
                        <p className='body-text'>Say goodbye to<b>   airport travel stress</b> with our on-time, relaxed, and reliable airport transfer service, ensuring a smooth pickup and drop-off experience.</p>
                        <h4 className="my-4">Long-Distance Private Car Rentals</h4>
                        <p className='body-text'>Need to travel beyond New York? Our<b>   High-end Car rental</b> providescomfort, privacy, and flexibility for trips up to 300 miles away, including destinations like <b>  Boston, Philadelphia, Washington D.C., and more. </b></p>
                        <h4 className="my-4">Corporate & Business Travel Solutions</h4>
                        <p className='body-text'>We cater to corporate executives, business professionals, and VIPs who require luxury transportation for meetings, events, and conferences. Our discreet, professional, and punctual services ensure you arrive on time and in style.</p>
                        <h4 className="my-4">Special Occasion & Event Transportation</h4>
                        <p className='body-text'>Whether it’s a wedding, birthday, prom night, or a VIP event, our top-notch transportation solutionsoffer a<b>   luxury car for events</b> for the perfect blend of elegance and convenience.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Travelbetter;
