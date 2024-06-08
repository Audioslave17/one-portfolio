import React from 'react'
import heroimage3 from "../assets/heroimage3.jpg"
import { MdKeyboardArrowRight } from "react-icons/md";
import {Link} from "react-scroll"
const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row text-white'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Full Stack Developer</h2>
                <p className='text-gray-500 py-4'><br />With 3 years of experience in developing web applications, I specialize in backend development while also exploring the front end. <br />
                I have a passion for creating dynamic and efficient websites using a range of modern technologies, including Spring Boot, MySQL, React.js, and Tailwind CSS.
                </p>

                <div>
                    <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Projects
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdKeyboardArrowRight size={25} className='ml-1'/>
                        </span>
                    </Link>
                </div>
            </div>
            <div className='flex h-3/5 w-3/4 mt-11 rounded-full'>
                <img className='rounded-full mx-auto hover:scale-105 duration-700 shadow-lg shadow-gray-500' src={heroimage3} alt="my profile" />
            </div>
        </div>    
    </div>
  )
}

export default Home