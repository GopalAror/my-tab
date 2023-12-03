import React from 'react'
import toggle from "../assets/toggle-switch.svg";
import check from "../assets/check.svg";
import cross from "../assets/cross.svg";
import diamond from "../assets/diamond.svg";
import elepis from "../assets/elepis-everyone.svg";

const Everyone = () => {
    return (
        <div>
            <div className="container flex flex-col items-center justify-center">
                <div className='flex gap-2 items-center pt-130'>
                    <p className='white work-sans fs-sm lh-normal fw-600 about'>Features</p>
                    <span className='line-gradient'></span>
                </div>
                <h2 className='black work-sans fw-700 spacing-1 lh-normal fs-xl pt-2 pb-100'>Simple pricing for<span className='about'> everyone</span></h2>
                <div className="row gap-4 gap-lg-0">
                    <div className="col-lg-6 col-12">
                        <div className="card-everyone">
                            <div className="heading-everyone flex items-center justify-center gap-23">
                                <p className='white work-sans fs-md fw-600 lh-30'>Monthly Pricing</p>
                                <img src={toggle} alt="switch"/>
                                <p className='work-sans white fs-md fw-400 lh-30'>Yearly Pricing</p>
                            </div>
                            <div className="px-40">
                                <div className="flex justify-between pt-30">
                                <p className='black lh-normal opacity-70 fs-md work-sans fw-400'>Queue Management</p>
                                <img src={check} alt="check" />
                                </div>
                                <div className="flex justify-between pt-30">
                                <p className='black lh-normal opacity-70 fs-md work-sans fw-400'>Point of Sale</p>
                                <img src={check} alt="check" />
                                </div>
                                <div className="flex justify-between pt-30">
                                <p className='black lh-normal opacity-70 fs-md work-sans fw-400'>Barber Management</p>
                                <img src={check} alt="check" />
                                </div>
                                <div className="flex justify-between pt-30">
                                <p className='black lh-normal opacity-70 fs-md work-sans fw-400'>Customer Database</p>
                                <img src={check} alt="check" />
                                </div>
                                <div className="flex justify-between pt-30">
                                <p className='black lh-normal opacity-70 fs-md work-sans fw-400'>Timesheets</p>
                                <img src={check} alt="check" />
                                </div>
                                <div className="flex justify-between pt-30">
                                <p className='black lh-normal opacity-70 fs-md work-sans fw-400'>Pricing Management</p>
                                <img src={check} alt="check" />
                                </div>
                                <div className="flex justify-between pt-30">
                                <p className='black lh-normal opacity-70 fs-md work-sans fw-400'>Inventory Management</p>
                                <img src={cross} alt="cross" />
                                </div>
                                <div className="flex justify-between pt-30">
                                <p className='black lh-normal opacity-70 fs-md work-sans fw-400'>Analytics and Reporting</p>
                                <img src={cross} alt="cross" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 flex justify-center flex-col">
                        <div className="card-platinum flex justify-center items-center relative">
                            <div className="flex justify-between px-23 w-100 items-center">
                                <div className="">
                                    <img src={diamond} alt="diamond"/>
                                    <p className='white fw-600 work-sans fs-md lh-normal pt-3'>Platinum</p>
                                </div>
                                <div className="flex">
                                   <p className='white fw-600 fs-2xl lh-normal spacing-1 work-sans'>$449</p>
                                   <p className='fs-s fw-500  work-sans white lh-normal'>/Month</p>
                                </div>
                            </div>
                            <img className='elepis' src={elepis} alt="elepis" />
                        </div>
                        <div className="">
                        <button className='white fs-md fw-700 lh-normal App work-sans btn-1 mt-25'>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Everyone