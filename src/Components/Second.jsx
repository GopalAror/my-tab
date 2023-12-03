import React from 'react'
import second from "../assets/sec2-img.png";
const Second = () => {
  return (
    <div>
        <div className='container'>
        <div className='row pt-20  items-center justify-center flex-lg-row flex-column-reverse'>
            <div className='col-lg-6 col-12 items-center flex justify-center'>
                <img className='w-100' src={second} alt="second" />
            </div>
            <div className='col-lg-6 col-12 flex justify-center flex-col align-items-center align-items-lg-start '>
                <div className='flex gap-2 items-center'>
                <p className='white work-sans fs-sm lh-normal fw-600 about'>About Us</p>
                <span className='line-gradient'></span>
                </div>
                <h2 className='black work-sans fw-700 spacing-1 lh-normal fs-xl pt-14'>What is <span className='about'>Maître D?</span></h2>
                <p className='opacity-70 black work-sans lh-26 fs-sm max-w-453 fw-400 pt-12'>Maître D is a full service solution, designed specifically for salons and barbershops. Our approach is modular, which means you only pay for the functionality that you need. Each module is completely integrated into the solution, so your entire business always remains syncronized. Maître D allows you to see everything within your business, from one location. </p>
            </div>
        </div>
        </div>
    </div>
  )
}
export default Second