import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';

const Choose = () => {
    return (
        <div className='Choose md:pb-20 pb-10 px-4'>
            <div className='container'>

                <div className='grid md:gap-10 gap-4 items-center md:grid-cols-12'>
                    <div className='image-choose md:col-span-5'>
                        <img src="./images/aboutuslogo.jpg" className='rounded' alt="d" />
                    </div>
                    <div className='body-text md:col-span-7 '>
                        <h2 className='mb-6'>Why Choose Us?</h2>
                        <p className='body-text mb-10'>Need to travel beyond New York? Our High-end Car rental providescomfort, privacy, and flexibility for trips up to 300 miles away, including destinations like Boston, Philadelphia, Washington D.C., and more.</p>
                        <p></p>
                        <div className='grid md:grid-cols-2  gap-y-5 gap-x-6'>
                            <div className='mb-4 '>
                                <img src="/images/check-icon.png" className='mb-6' alt="icon" />
                                 <h4> Experienced Chauffeurs </h4>
                                <p >– Professional drivers who are courteous and well-trained.</p>
                            </div>
                            <div className='mb-4 '>
                                <img src="/images/check-icon.png" className='mb-6' alt="icon" />
                                 <h4>Safe & Reliable</h4>
                                <p > – Punctual service with well-maintained vehicles</p>
                            </div>
                            <div className='mb-4 '>
                                <img src="/images/check-icon.png" className='mb-6' alt="icon" />
                                 <h4>Round-the-clock availability </h4>
                                <p >– Your ride, ready whenever and wherever you need it.</p>
                            </div>
                            <div className='mb-4 '>
                                <img src="/images/check-icon.png" className='mb-6' alt="icon" />
                                 <h4> Elite Service, accessible pricing</h4>
                                <p >– No gimmicks. Just luxury made affordable.</p>
                            </div>

                        </div>


                    </div>
                </div>
{/* <div className='md:pt-40 pt-10'>              
     <h2 className='mb-10'>Regions We Serve</h2>
                <p>We offer <b> premium private travel services</b> within <b>  New York City </b>and up to <b>  300 miles beyond, </b> covering locations such as:<br /><br />
                    <b>  New York City | Boston | Philadelphia | Washington D.C. | Baltimore | Albany | Hartford | Syracuse | Pittsburgh | Buffalo</b><br /><br />
                    Wherever you need to go, we ensure a safe, stylish, and hassle-free journey.<br /><br />
                    <b>  Book Your Luxury Travel Experience Today! </b><br /><br />
                    At <b>  Elite B Car, </b> we take pride in offering exceptional private travel solutions that focus on comfort, elegance, and efficiency. Whether you're traveling for business, leisure, or a special event, we promise a premium, hassle-free, and luxurious ride from start to finish.<br /><br />
                    <b>  🚖Ready to experience the best in private transportation? </b> Contact us today to <b>  book your ride</b> and travel in unmatched style and comfort!
                </p>
            </div> */}
            </div> 
        </div>
    );
}

export default Choose;
