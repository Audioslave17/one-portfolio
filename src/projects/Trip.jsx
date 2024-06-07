import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import tripti from '../assets/portfolio/tripti.jpg'
import { useNavigate } from 'react-router-dom';
import tripti2 from '../assets/portfolio/tripti2.jpg'

const Trip = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate('/');
  }
  return (
    <div className='w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white'>
      <div className='max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full mb-10'>
        <div className='w-full flex items-center mb-8 mt-0'>
          <button onClick={()=>handleBackClick()} className='text-white w-fit px-3 py-3 flex items-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
            <span><IoMdArrowRoundBack size={25}/></span>
          </button>
          <div className='flex-grow flex justify-center'>
            <h1 className='text-4xl font-bold'>Tripti Foundation</h1>
          </div>
        </div>
        <div className='w-full flex flex-col md:flex-row mb-8 items-center md:items-start'>
          <div className='w-full md:w-1/2 flex justify-center md:justify-end mb-4 md:mb-0 md:mr-4'>
            <img src={tripti} alt="Description 1" className='w-1/2 md:w-3/4 object-cover'/>
          </div>
          <div className='w-full md:w-1/2 mt-4 md:mt-0 md:pl-4'>
            <p className='text-lg'>Tripti Foundation is your gateway to making a meaningful impact on various humanitarian causes. Our website facilitates donations to diverse institutions such as old age homes, animal shelters, disaster relief efforts, and more. With Tripti Foundation, you can easily contribute to multiple charitable causes that resonate with you, spreading kindness and support to those in need. Join us in making a difference and fostering positive change in communities across the globe.</p>
          </div>
        </div>
        <div className='w-full flex flex-col md:flex-row-reverse items-center md:items-start'>
          <div className='w-full md:w-1/2 flex justify-center md:justify-start mb-4 md:mb-0 md:ml-4'>
            <img src={tripti2} alt="Description 2" className='w-1/2 md:w-3/4 object-cover'/>
          </div>
          <div className='w-full md:w-1/2 mt-4 md:mt-0 md:pr-4'>
            <p className='text-lg'>Tripti Foundation is built with React.js and Bootstrap, our platform offers a seamless and user-friendly interface for contributing to a variety of charitable causes. Leveraging Razorpay as our trusted payment gateway, donors can securely make contributions while enjoying the convenience of receiving payment receipts directly via email.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trip