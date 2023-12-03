import React from 'react'
import sliderImage from "../assets/sec4-img.png";
import next from "../assets/next.svg";
import prev from "../assets/prev.svg";

const Myslider = () => {
    return (
        <div>
            <div className='container flex items-center justify-center flex-col'>
            <div className='flex gap-3 items-center pt-130'>
                    <p className='white work-sans fs-sm lh-normal fw-600 about'>Modules</p>
                    <span className='line-gradient'></span>
                </div>
                <h2 className='black work-sans fw-700 spacing-1 lh-normal fs-xl pt-14 pb-70'>Why Choose <span className='about'>Maître D?</span></h2>
                <div className="card-forth relative">
                    <div className="row">
                        <div className="col-lg-6 col-12 flex items-center justify-center flex-col pt-50">
                            <img className='w-100' src={sliderImage} alt="sec4-img" />
                        </div>
                        <div className="col-lg-6 col-12 d-flex d-lg-block items-center justify-center flex-col pt-34">
                            <h2 className='black work-sans fs-lg fw-700 lh-56'>Manage Your <span className='about'>Customer Queues </span></h2>
                            <p className='black max-w-484 w-lg-100 opacity-70 fs-sm work-sans fw-400 pt-2'>The Maitre D queue management system is designed to allow your customers to sign up for walk-in appointments and select the services they want ahead of time. The queue will provide them with estimated wait times, costs and will allow them to even select their preferred stylist.</p>
                            <p className='black max-w-484 w-lg-100 opacity-70 fs-sm work-sans fw-400 pt-2'>As the queue gets bigger or smaller, its easy to monitor your operations and understand when wait periods are getting too long to service your customer base and to better resource your stores during busy periods. Beat the frustration of your customers ahead of time and help manage how they wait for your services</p>
                            <button className='white fs-md fw-700 lh-normal App work-sans btn-1 mt-25  '>Buy Now</button>
                        </div>
                    </div>
                {/* <span className='next'>
                    <img src={next} alt="next"/>
                </span>
                <span className='prev'>
                    <img src={prev} alt="prev"/>
                </span> */}
                </div>
            </div>
        </div>
    )
}

export default Myslider