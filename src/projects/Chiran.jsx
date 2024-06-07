import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import chiranjeevi from '../assets/portfolio/chiranjeevi.jpg'
import { useNavigate } from 'react-router-dom';
import chiranjeevi2 from '../assets/portfolio/chiranjeevi2.jpg'

const Chiran = () => {
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
            <h1 className='text-4xl font-bold'>Chiranjeevi</h1>
          </div>
        </div>
        <div className='w-full flex flex-col md:flex-row mb-8 items-center md:items-start'>
          <div className='w-full md:w-1/2 flex justify-center md:justify-end mb-4 md:mb-0 md:mr-4'>
            <img src={chiranjeevi} alt="Description 1" className='w-1/2 md:w-3/4 object-cover'/>
          </div>
          <div className='w-full md:w-1/2 mt-4 md:mt-0 md:pl-4'>
            <p className='text-lg'>Chiranjeevi, your go-to destination for seamless healthcare coordination. Our website empowers users to book ambulance services and doctor appointments simultaneously, streamlining the process for urgent medical needs. With Chiranjeevi, you can also effortlessly locate nearby hospitals, ensuring prompt access to care when it matters most. Experience convenience and peace of mind in managing your healthcare journey with Chiranjeevi.</p>
          </div>
        </div>
        <div className='w-full flex flex-col md:flex-row-reverse items-center md:items-start'>
          <div className='w-full md:w-1/2 flex justify-center md:justify-start mb-4 md:mb-0 md:ml-4'>
            <img src={chiranjeevi2} alt="Description 2" className='w-1/2 md:w-3/4 object-cover'/>
          </div>
          <div className='w-full md:w-1/2 mt-4 md:mt-0 md:pr-4'>
            <p className='text-lg'>Chiranjeevi, developed with React.js and Tailwind for the frontend and Spring Boot for the backend, offers a seamless healthcare coordination experience. With its intuitive user interface and robust backend functionality, users can efficiently book ambulance services, schedule doctor appointments, and locate nearby hospitals, all in one place. Experience convenience and reliability with Chiranjeevi.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chiran