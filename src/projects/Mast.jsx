import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import mastgulla from '../assets/portfolio/mastgulla.png'
import { useNavigate } from 'react-router-dom';
import mastgulla2 from '../assets/portfolio/mastgulla2.png'

const Mast = () => {
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
            <h1 className='text-4xl font-bold'>MastGulla</h1>
          </div>
        </div>
        <div className='w-full flex flex-col md:flex-row mb-8 items-center md:items-start'>
          <div className='w-full md:w-1/2 flex justify-center md:justify-end mb-4 md:mb-0 md:mr-4'>
            <img src={mastgulla} alt="Description 1" className='w-1/2 md:w-3/4 object-cover'/>
          </div>
          <div className='w-full md:w-1/2 mt-4 md:mt-0 md:pl-4'>
            <p className='text-lg'>MastGulla is a University Food Ordering App connects students and staff with local campus food vendors through a user-friendly interface. It offers easy menu browsing, order customization, multiple payment options, and real-time updates.</p>
          </div>
        </div>
        <div className='w-full flex flex-col md:flex-row-reverse items-center md:items-start'>
          <div className='w-full md:w-1/2 flex justify-center md:justify-start mb-4 md:mb-0 md:ml-4'>
            <img src={mastgulla2} alt="Description 2" className='w-1/2 md:w-3/4 object-cover'/>
          </div>
          <div className='w-full md:w-1/2 mt-4 md:mt-0 md:pr-4'>
            <p className='text-lg'>My team created MastGulla Application using Android Studio, leveraging its comprehensive suite of tools for development. We designed a user-friendly interface with XML for layouts and used Java/Kotlin for the application logic. Firebase was integrated for real-time database management and authentication, ensuring secure user login and data storage.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mast;
