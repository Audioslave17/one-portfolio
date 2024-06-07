import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import social from '../assets/portfolio/social.png'
import { useNavigate } from 'react-router-dom';
import social2 from '../assets/portfolio/social2.png'

const Social = () => {
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
            <h1 className='text-4xl font-bold'>Social Sphere</h1>
          </div>
        </div>
        <div className='w-full flex flex-col md:flex-row mb-8 items-center md:items-start'>
          <div className='w-full md:w-1/2 flex justify-center md:justify-end mb-4 md:mb-0 md:mr-4'>
            <img src={social} alt="Description 1" className='w-1/2 md:w-3/4 object-cover'/>
          </div>
          <div className='w-full md:w-1/2 mt-4 md:mt-0 md:pl-4'>
            <p className='text-lg'>Social Sphere is a comprehensive backend solution for social media websites, powered by Spring Boot, SQL, and Postman, and currently in development alongside frontend integration. It prioritizes efficient user interactions, secure data management, and reliable API performance. With features including user authentication, posts, comments, likes, and real-time updates, Social Sphere aims to seamlessly support and enhance the frontend experiences of modern social media platforms while ensuring scalability and robustness in its development.</p>
          </div>
        </div>
        <div className='w-full flex flex-col md:flex-row-reverse items-center md:items-start'>
          <div className='w-full md:w-1/2 flex justify-center md:justify-start mb-4 md:mb-0 md:ml-4'>
            <img src={social2} alt="Description 2" className='w-1/2 md:w-3/4 object-cover'/>
          </div>
          <div className='w-full md:w-1/2 mt-4 md:mt-0 md:pr-4'>
            <p className='text-lg'>Introducing a groundbreaking feature in Social Sphere: multiple open chat rooms where users can actively participate and engage in debates on trending topics. Now, users have the opportunity to join discussions on hot-button issues, share diverse perspectives, and engage in lively debates—all within the Social Sphere platform. This latest addition not only fosters a sense of community but also encourages meaningful interactions among users, further enriching the social media experience. Stay connected, stay informed, and join the conversation with Social Sphere's new open chat rooms.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Social