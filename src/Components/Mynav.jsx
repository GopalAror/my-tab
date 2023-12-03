import React from 'react'
import logo from "../assets/logo.png";
import search from "../assets/search.svg";

const Mynav = () => {    
    function myNav() {
        document.querySelector(".mobileView").classList.toggle("view")
    }
     return (
        <div>
            <nav className='relative'>
                <div className='container flex items-center justify-between h-100'>
                    <img src={logo} alt="nav"/>
                    <label className='d-flex flex-col gap-2 menu d-md-none position-absolute z-3 ' onClick={myNav}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                    <ul className='flex items-center gap-45 mobileView'>
                        <li><a className='lh-normal work-sans black fs-sm fw-400 nav-text text-decoration-none' href="#">Home</a></li>
                        <li><a className='lh-normal work-sans black fs-sm fw-400 nav-text text-decoration-none' href="#">Modules</a></li>
                        <li><a className='lh-normal work-sans black fs-sm fw-400 nav-text text-decoration-none' href="#">Pricing</a></li>
                        <li><a className='lh-normal work-sans black fs-sm fw-400 nav-text text-decoration-none' href="#">Features</a></li>
                        <li><a className='lh-normal work-sans black fs-sm fw-400 nav-text text-decoration-none' href="#">Contact Us</a></li>
                       <li className='pt-2'><a href="#"><img src={search} alt="search" /></a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Mynav