import React from 'react'
import formimg from "../assets/form-img.png";

const Myform = () => {
    return (
        <div>
            <div className="container position-relative  pt-130">
                <div className="row py-sm-5">
                    <div className="col-lg-6 col-12 flex flex-column justify-content-end">
                        <div className='flex gap-2 items-center'>
                            <p className='white work-sans fs-sm lh-normal fw-600 about'>Contact US</p>
                            <span className='line-gradient'></span>
                        </div>
                        <h2 className='black work-sans fw-700 spacing-1 lh-normal fs-xl pt-2 pb-5'>Get in touch!</h2>
                        <div className="flex gap-3">
                            <input type="text" id="fname" name="firstname" className="W-50 form work-sans w-100" placeholder="Full Name " />
                            <input type="text" id="fname" name="email" className="W-50 form work-sans w-100" placeholder="Email Address" />
                        </div>
                        <input type="text" id="fname" name="Company" className="W-100 form work-sans pt-30" placeholder="Company Name" />
                        <textarea type="text" id="fname" name="Company" className="W-100 form work-sans pb-5 pt-30 " placeholder="Message" />

                        <div className="">
                            <button className='white fs-md fw-700 lh-normal App work-sans btn-1'>Submit</button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <img className="Translate w-100" src={formimg} alt="formimg" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Myform
