import React from 'react'
import chiranjeevi from '../assets/portfolio/chiranjeevi.jpg'
import mastgulla from '../assets/portfolio/mastgulla.png'
import social from '../assets/portfolio/social.png'
import tripti from '../assets/portfolio/tripti.jpg'
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: social,
      repoUrl: 'https://github.com/Audioslave17/SocialSphere'
    },
    {
      id: 2,
      src: chiranjeevi,
      repoUrl: 'https://github.com/sparshgupta121/Techack-4.0'
    },
    {
      id: 3,
      src: tripti,
      repoUrl: 'https://github.com/sparshgupta121/Tripti-Foundation'
    },
    {
      id: 4,
      src: mastgulla,
      repoUrl: 'https://github.com/Audioslave17/Mastgulla'
    }
  ]

  const handleRepoClick = (url) =>{
    window.location.href = url;
  }

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
          <p className='py-4'>Check Out some of my work right here!</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {
            portfolios.map(({id,src,repoUrl}) => (
              <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt="" className='rounded-md hover:scale-105 duration-200' />
              <div className='flex items-center justify-center'>
                <button className='w-1/2 px-6 py-1 m-4 hover:scale-105 duration-200'>About</button>
                <button className='w-1/2 px-6 py-1 m-4 hover:scale-105 duration-200' onClick={()=>handleRepoClick(repoUrl)}>Repo</button>
              </div>
            </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Portfolio