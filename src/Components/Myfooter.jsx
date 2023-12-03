import React from 'react'
import logo from "../assets/foot-logo.png";
const Myfooter = () => {
    return (
        <div className='foot-bg mt-5 pt-5'>
            <div className="container pt-5">
                <div className="flex flex-column align-items-center justify-content-center">
                    <img src={logo} alt="logo" />
                    <p className='white max-w-375 work-sans fw-400 fs-s lh-56 text-center pt-4'>Proudly Australian developed software. Focused on increasing efficiency and growing business within the beauty industry.</p>
                    <ul className='m-0 p-0 pt-30 flex gap-5 pb-4 mb-2'>
                        <li><a className='text-decoration-none white work-sans fs-s fw-600 lh-56' href="#">Navigation</a></li>
                        <li><a className='text-decoration-none white work-sans fs-s fw-600 lh-56' href="#">Company</a></li>
                        <li><a className='text-decoration-none white work-sans fs-s fw-600 lh-56' href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="Footerline"></div>
            <p className='white work-sans fs-xs fw-400 lh-56 text-center py-3 opacity-70 m-0'>Copyright 2020 All rights reserved, Greenfox Development Pty Ltd©</p>
        </div>
    )
}

export default Myfooter