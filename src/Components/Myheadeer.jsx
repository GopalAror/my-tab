import React from 'react'
import curel from "../assets/curel.svg";
const Myheadeer = () => {
  return (
    <div>
        <div className='container flex flex-col items-center justify-center vh-80 relative'>
        <h1 className='max-w-729 App spacing-1 fs-3xl black work-sans fw-800 lh-normal'>Maitre D – Store Management for Barbers</h1>
        <button className='white fs-md fw-700 lh-normal App work-sans btn-1'>Submit</button>
        <img className='cruel-head' src={curel} alt="curel" />
        </div>
    </div>
  )
}

export default Myheadeer